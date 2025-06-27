"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import type { User } from "firebase/auth"
import { onAuthStateChanged } from "firebase/auth"
import { getFirebaseAuth } from "@/lib/firebase"

interface AuthCtx {
  user: User | null
  loading: boolean
}

const AuthContext = createContext<AuthCtx>({ user: null, loading: true })

export const useAuth = () => useContext(AuthContext)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let unsubscribe: () => void
    ;(async () => {
      const auth = await getFirebaseAuth()
      unsubscribe = onAuthStateChanged(auth, (u) => {
        setUser(u)
        setLoading(false)
      })
    })()

    return () => unsubscribe && unsubscribe()
  }, [])

  return <AuthContext.Provider value={{ user, loading }}>{children}</AuthContext.Provider>
}
