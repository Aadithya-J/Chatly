import { ReactNode } from "react";
import SessionLayout from "./(session)/sessionLayout"; // Import the session layout
import { Metadata } from 'next';
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Chatly",
  description: "A chat application",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <SessionLayout>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            storageKey="chatly-theme">
          <body className={cn(`${geistSans.variable} ${geistMono.variable} antialiased`,"bg-white","dark:bg-[#37414148]")}>
            {children}
          </body>
        </ThemeProvider>
      </SessionLayout>
    </html>
  );
}
