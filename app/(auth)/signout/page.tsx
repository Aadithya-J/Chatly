'use client'

import { useEffect } from "react"
import { signOut } from "next-auth/react"

export default function SignOut() {
    useEffect(() => {
        signOut({ callbackUrl: '/signin' })
    }, [])

    return (
        <div className="flex min-h-screen items-center justify-center">
            <p>Signing out...</p>
        </div>
    )
}
