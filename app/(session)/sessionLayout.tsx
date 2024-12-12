'use client'; // Ensure this is a Client Component

import { SessionProvider } from "next-auth/react"; // Import SessionProvider
import { ReactNode } from "react";
import localFont from "next/font/local";
import "../globals.css";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function SessionLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <SessionProvider>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </SessionProvider>
  );
}