"use client"

import type React from "react"

import { useState } from "react"
import type { Note } from "./notes-section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { doc, updateDoc, serverTimestamp } from "firebase/firestore"
import { getFirestoreDb } from "@/lib/firebase"
import { Loader2, Save, X } from "lucide-react"

interface EditNoteFormProps {
  note: Note
  onCancel: () => void
  onSuccess: () => void
}

export function EditNoteForm({ note, onCancel, onSuccess }: EditNoteFormProps) {
  const [title, setTitle] = useState(note.title)
  const [content, setContent] = useState(note.content)
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!title.trim() || !content.trim()) {
      toast({
        title: "Error",
        description: "Please fill in both title and content.",
        variant: "destructive",
      })
      return
    }

    // Check if anything actually changed
    if (title.trim() === note.title && content.trim() === note.content) {
      onSuccess()
      return
    }

    setLoading(true)

    try {
      const db = await getFirestoreDb()
      await updateDoc(doc(db, "notes", note.id), {
        title: title.trim(),
        content: content.trim(),
        updatedAt: serverTimestamp(),
      })

      toast({
        title: "Note updated",
        description: "Your note has been updated successfully.",
      })

      onSuccess()
    } catch (error) {
      console.error("Error updating note:", error)
      toast({
        title: "Error",
        description: "Failed to update note. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg">Edit Note</CardTitle>
          <Button variant="ghost" size="sm" onClick={onCancel}>
            <X className="w-4 h-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              placeholder="Note title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              disabled={loading}
              className="text-lg font-medium"
            />
          </div>

          <div>
            <Textarea
              placeholder="Write your note here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              disabled={loading}
              rows={6}
              className="resize-none"
            />
          </div>

          <div className="flex gap-2 justify-end">
            <Button type="button" variant="outline" onClick={onCancel} disabled={loading}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="mr-2 w-4 h-4" />
                  Save Changes
                </>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
