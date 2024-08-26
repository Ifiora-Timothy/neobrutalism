import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Toaster } from "sonner";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { ShopProvider } from "@/contexts/shopContext";
import CartOverlay from "@/components/CartOverlay";
import WishlistOverlay from "@/components/WishlistOverlay";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce Neobrutalism Project",
  description:
    "Solved a major challenge developers face in state management, which is the question on when to store state in the url and when to store  in-memory.  Designed and developed by Techdoc",
  metadataBase: new URL("https://weekly-issue3-neobrutalism.vercel.app"),
  openGraph: {
    images: [
      {
        url: "https://weekly-issue3-neobrutalism.vercel.app/logo.png",
        width: 255,
        height: 255,
        alt: "Techdoc logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  authors: [
    { name: "Techdoc", url: "https://bento.me/ifiora-timothy" },
    { name: "Ifiora Timothy", url: "https://bento.me/ifiora-timothy" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "w-screen bg-yellow-100 overflow-x-hidden"
        )}
      >
        <div className="min-h-screen bg-[#ffc080] relative w-full bg-yelow-100 flex flex-col font-mono text-black">
          <ShopProvider>
            <header className=" sticky top-0 z-50">
              <Navbar />
            </header>
            <main className="w-full h-full overflow-hidden">
              {children}
              <WishlistOverlay />
              <CartOverlay />{" "}
            </main>
          </ShopProvider>
          <footer className="bg-black flex-col gap-2 flex items-center justify-center mt-auto text-white p-4 text-center">
            <a
              target="_blank"
              href="https://bento.me/ifiora-timothy"
              className="text-red-200"
            >
              View my portfolio
            </a>{" "}
            <p className="sm:text-lg text-xs font-bold">
              &copy; 2024 TECH FEST SHIRTS | ALL RIGHTS RESERVED
            </p>
          </footer>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
