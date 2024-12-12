// middleware.ts
import { withAuth } from "next-auth/middleware"

export default withAuth({
    pages: {
        signIn: "/signin",
    },
})

export const config = {
    matcher: [
        // Protect all routes except auth routes
        "/((?!api|_next/static|_next/image|favicon.ico|signin|signup).*)",
    ],
}
