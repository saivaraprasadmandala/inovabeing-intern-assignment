"use client"

import type React from "react"

import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { getFirebaseAuth } from "@/lib/firebase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { Eye, EyeOff, Loader2 } from "lucide-react"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [show, setShow] = useState(false)
  const [busy, setBusy] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setBusy(true)
    try {
      const auth = await getFirebaseAuth()
      await signInWithEmailAndPassword(auth, email, pass)
      toast({ title: "Signed in" })
    } catch (err: any) {
      toast({ title: "Error", description: err.message, variant: "destructive" })
    } finally {
      setBusy(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign&nbsp;In</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} disabled={busy} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="pass">Password</Label>
            <div className="relative">
              <Input
                id="pass"
                type={show ? "text" : "password"}
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                disabled={busy}
              />
              <Button
                type="button"
                size="sm"
                variant="ghost"
                className="absolute right-0 top-0 h-full px-3"
                onClick={() => setShow(!show)}
                disabled={busy}
              >
                {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          <Button className="w-full" disabled={busy}>
            {busy && <Loader2 className="h-4 w-4 mr-2 animate-spin" />} Sign&nbsp;In
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
