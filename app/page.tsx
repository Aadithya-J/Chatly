'use client'

import { signOut, useSession } from "next-auth/react"; // Import useSession
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import { ModeToggle } from "@/components/ui/toggle";
export default function Home() {
    const { data: session, status } = useSession(); // Use useSession to get session data
    if (status === "loading") {
        return <div>Loading...</div>; // Show loading state while session is being fetched
    }

    if (!session) {
        redirect('/signin'); // Redirect if not authenticated
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
                <ModeToggle />
            </div>
        </div>
    );
}