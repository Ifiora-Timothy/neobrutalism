import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { ShopProvider } from "@/contexts/shopContext";
import CartOverlay from "@/components/CartOverlay";
import WishlistOverlay from "@/components/WishlistOverlay";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
        <div className="min-h-screen relative w-full bg-yellow-100 font-mono text-black">
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
          <footer className="bg-black text-white p-4 text-center">
            <p className="sm:text-lg text-xs font-bold">
              &copy; 2024 TECH FEST SHIRTS | ALL RIGHTS RESERVED
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
