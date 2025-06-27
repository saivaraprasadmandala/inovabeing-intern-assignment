"use client"

import { useState, useEffect } from "react"
import { useAuth } from "@/components/auth/auth-provider"
import { NoteCard } from "./note-card"
import { AddNoteForm } from "./add-note-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { collection, query, where, orderBy, onSnapshot, deleteDoc, doc } from "firebase/firestore"
import { getFirestoreDb } from "@/lib/firebase"
import { Plus, Search, FileText } from "lucide-react"

export interface Note {
  id: string
  title: string
  content: string
  createdAt: Date
  updatedAt: Date
  userId: string
}

export function NotesSection() {
  const { user } = useAuth()
  const [notes, setNotes] = useState<Note[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [showAddForm, setShowAddForm] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    if (!user) return
    console.log("Current user UID:", user.uid); 

    (async () => {
      const db = await getFirestoreDb()
      const notesQuery = query(collection(db, "notes"), where("userId", "==", user.uid), orderBy("updatedAt", "desc"))

      const unsubscribe = onSnapshot(
        notesQuery,
        (snapshot) => {
          const notesData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            createdAt: doc.data().createdAt?.toDate() || new Date(),
            updatedAt: doc.data().updatedAt?.toDate() || new Date(),
          })) as Note[]

          setNotes(notesData)
          setLoading(false)
        },
        (error) => {
          console.error("Error fetching notes:", error)
          toast({
            title: "Error",
            description: "Failed to load notes. Please try again.",
            variant: "destructive",
          })
          setLoading(false)
        },
      )

      // Return unsubscribe function
      return unsubscribe
    })()
  }, [user, toast])

  const handleDeleteNote = async (noteId: string) => {
    try {
      const db = await getFirestoreDb()
      await deleteDoc(doc(db, "notes", noteId))
      toast({
        title: "Note deleted",
        description: "Your note has been deleted successfully.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete note. Please try again.",
        variant: "destructive",
      })
    }
  }

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  if (loading) {
    return (
      <Card>
        <CardContent className="flex justify-center items-center py-12">
          <div className="w-8 h-8 rounded-full border-b-2 animate-spin border-primary"></div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4 justify-between items-start sm:flex-row sm:items-center">
            <CardTitle className="flex gap-2 items-center">
              <FileText className="w-5 h-5" />
              My Notes ({notes.length})
            </CardTitle>
            <Button onClick={() => setShowAddForm(!showAddForm)}>
              <Plus className="mr-2 w-4 h-4" />
              Add Note
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 w-4 h-4 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search notes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {showAddForm && (
            <div className="mb-6">
              <AddNoteForm onSuccess={() => setShowAddForm(false)} />
            </div>
          )}
        </CardContent>
      </Card>

      {filteredNotes.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <FileText className="mx-auto mb-4 w-12 h-12 text-muted-foreground" />
            <h3 className="mb-2 text-lg font-semibold">{searchTerm ? "No notes found" : "No notes yet"}</h3>
            <p className="mb-4 text-muted-foreground">
              {searchTerm ? "Try adjusting your search terms." : "Create your first note to get started."}
            </p>
            {!searchTerm && (
              <Button onClick={() => setShowAddForm(true)}>
                <Plus className="mr-2 w-4 h-4" />
                Create Note
              </Button>
            )}
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {filteredNotes.map((note) => (
            <NoteCard key={note.id} note={note} onDelete={() => handleDeleteNote(note.id)} />
          ))}
        </div>
      )}
    </div>
  )
}
