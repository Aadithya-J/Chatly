'use client'; // Ensure this is a Client Component

import { SessionProvider } from "next-auth/react"; // Import SessionProvider
import { ReactNode } from "react";

export default function SessionLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <SessionProvider>
        {children}
    </SessionProvider>
  );
}
