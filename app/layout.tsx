import { ReactNode } from "react";
import SessionLayout from "./(session)/sessionLayout"; // Import the session layout
import { Metadata } from 'next';

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
    <html lang="en">
      <SessionLayout>
        {children}
      </SessionLayout>
    </html>
  );
}