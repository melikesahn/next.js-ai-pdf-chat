import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ChatPDF",
};

// Header Component
function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        background: "#f4f4f4",
        borderBottom: "1px solid #ddd",
      }}
    >
      <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>ChatPDF</h1>
      <div>
        <SignedIn>
          {/* Kullanıcı giriş yapmışsa UserButton bileşeni gösterilir */}
          <UserButton />
        </SignedIn>
        <SignedOut>
          {/* Kullanıcı çıkış yapmışsa giriş butonu gösterilir */}
          <SignInButton />
        </SignedOut>
      </div>
    </header>
  );
}

// Root Layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider>
        {/* Header bileşenini tüm sayfalara ekliyoruz */}
        <Header />
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
