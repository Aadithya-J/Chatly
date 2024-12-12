'use client'

import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"

export default function SignIn() {
    const handleSignIn = async () => {
        try {
            console.log('Starting sign in...')
            const result = await signIn('google', { 
                callbackUrl: '/',
                redirect: false 
            })
            console.log('Sign in result:', result)
        } catch (error) {
            console.error('Sign in error:', error)
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="space-y-4 text-center">
                <h1 className="text-2xl font-bold">Sign In</h1>
                <Button 
                    onClick={handleSignIn}
                    size="lg"
                >
                    Sign in with Google
                </Button>
            </div>
        </div>
    )
}
