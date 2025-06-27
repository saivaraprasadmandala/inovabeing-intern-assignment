"use client"

import { initializeApp, getApps, type FirebaseApp } from "firebase/app"
import type { Auth } from "firebase/auth"
import { getFirestore, type Firestore } from "firebase/firestore"

let _app: FirebaseApp | undefined
let _auth: Auth | undefined
let _db: Firestore | undefined

export function getFirebaseApp(): FirebaseApp {
  if (_app) return _app

  _app = getApps().length
    ? getApps()[0]
    : initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
      })

  return _app
}

/**
 *  Lazy, **async** getter that waits for `firebase/auth` to
 *  self-register the auth component before returning `getAuth(app)`.
 */
export async function getFirebaseAuth(): Promise<Auth> {
  if (_auth) return _auth

  // Dynamically load the module – registration happens as a side-effect.
  const { getAuth } = await import("firebase/auth")
  _auth = getAuth(getFirebaseApp())
  return _auth
}

export async function getFirestoreDb(): Promise<Firestore> {
  if (_db) return _db
  _db = getFirestore(getFirebaseApp())
  return _db
}
