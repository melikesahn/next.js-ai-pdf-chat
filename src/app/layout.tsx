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
import Providers from "@/components/Provider";
import { Toaster } from "react-hot-toast";


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
    <header>
      <div>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
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
    <html lang="en"> {/* <html> etiketi burada yer alıyor */}
      <ClerkProvider>
        <Providers>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <Header /> {/* Header bileşenini body içine yerleştiriyoruz */}
            {children}
          </body>
          <Toaster />
        </Providers>
      </ClerkProvider>
    </html>
  );
}
