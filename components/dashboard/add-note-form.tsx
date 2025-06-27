"use client"

import type React from "react"

import { useState } from "react"
import { useAuth } from "@/components/auth/auth-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { getFirestoreDb } from "@/lib/firebase"
import { Loader2, Plus, X } from "lucide-react"

interface AddNoteFormProps {
  onSuccess: () => void
}

export function AddNoteForm({ onSuccess }: AddNoteFormProps) {
  const { user } = useAuth()
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!user) return
    if (!title.trim() || !content.trim()) {
      toast({
        title: "Error",
        description: "Please fill in both title and content.",
        variant: "destructive",
      })
      return
    }

    setLoading(true)

    try {
      const db = await getFirestoreDb()
      await addDoc(collection(db, "notes"), {
        title: title.trim(),
        content: content.trim(),
        userId: user.uid,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      })

      toast({
        title: "Note created",
        description: "Your note has been created successfully.",
      })

      setTitle("")
      setContent("")
      onSuccess()
    } catch (error) {
      console.error("Error creating note:", error)
      toast({
        title: "Error",
        description: "Failed to create note. Please try again.",
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
          <CardTitle className="text-lg">Create New Note</CardTitle>
          <Button variant="ghost" size="sm" onClick={onSuccess}>
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
            <Button type="button" variant="outline" onClick={onSuccess} disabled={loading}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                  Creating...
                </>
              ) : (
                <>
                  <Plus className="mr-2 w-4 h-4" />
                  Create Note
                </>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
