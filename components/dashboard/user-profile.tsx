"use client"

import type { User } from "firebase/auth"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Calendar, Mail, UserIcon } from "lucide-react"

interface UserProfileProps {
  user: User | null
}

export function UserProfile({ user }: UserProfileProps) {
  if (!user) return null

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)
  }

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <Card>
      <CardHeader className="text-center">
        <Avatar className="mx-auto mb-4 w-20 h-20">
          <AvatarFallback className="text-lg">
            {user.displayName ? getInitials(user.displayName) : <UserIcon className="w-8 h-8" />}
          </AvatarFallback>
        </Avatar>
        <CardTitle className="text-xl">{user.displayName || "User"}</CardTitle>
        <Badge variant="secondary" className="mx-auto w-fit">
          Active User
        </Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-3 items-center text-sm">
          <Mail className="w-4 h-4 text-muted-foreground" />
          <span className="truncate">{user.email}</span>
        </div>

        <div className="flex gap-3 items-center text-sm">
          <Calendar className="w-4 h-4 text-muted-foreground" />
          <span>Joined {user.metadata.creationTime ? formatDate(user.metadata.creationTime) : "Recently"}</span>
        </div>

        {/* <div className="pt-4 border-t"> */}
          {/* <div className="mb-2 text-sm text-muted-foreground">Account Status</div> */}
          {/* <Badge variant={user.emailVerified ? "default" : "secondary"}>
            {user.emailVerified ? "Verified" : "Unverified"}
          </Badge> */}
        {/* </div> */}
      </CardContent>
    </Card>
  )
}
