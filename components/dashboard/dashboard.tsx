"use client"

import { useAuth } from "@/components/auth/auth-provider"
import { UserProfile } from "./user-profile"
import { NotesSection } from "./notes-section"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { signOut } from "firebase/auth"
import { getFirebaseAuth } from "@/lib/firebase"
import { useToast } from "@/hooks/use-toast"
import { LogOut } from "lucide-react"

export function Dashboard() {
  const { user } = useAuth()
  const { toast } = useToast()

  const logout = async () => {
    try {
      await signOut(await getFirebaseAuth())
      toast({ title: "Signed out" })
    } catch {
      toast({ title: "Error", description: "Could not sign out", variant: "destructive" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Notes</h1>
          <div className="flex gap-4">
            <ThemeToggle />
            <Button variant="outline" onClick={logout}>
              <LogOut className="h-4 w-4 mr-2" /> Sign Out
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <UserProfile user={user} />
          </div>
          <div className="lg:col-span-3">
            <NotesSection />
          </div>
        </div>
      </main>
    </div>
  )
}
