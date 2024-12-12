'use client'

import { signOut, useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { redirect } from "next/navigation"

export default function Home() {
    const { data: session, status } = useSession()

    if (status === "loading") {
        return <div>Loading...</div>
    }

    if (!session) {
        redirect('/signin')
    }

    return (
        <div className="p-8">
            <div className="flex justify-between items-center">
                <div>
                    Welcome, {session.user?.name}!
                </div>
                <Button onClick={() => signOut()}>
                    Sign Out
                </Button>
            </div>
        </div>
    )
}
