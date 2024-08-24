"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  HomeIcon,
  ShirtIcon,
  TicketIcon,
  InfoIcon,
  ShoppingCartIcon,
  MenuIcon,
  LucideProps,
} from "lucide-react";
import NavLink from "./NavLink";
import clsx from "clsx";
import useShopContext from "@/hooks/useShopContext";
import MobileNav from "./MobileNav";

const navItems: {
  name: string;
  path: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
}[] = [
  { name: "Home", path: "/", icon: HomeIcon },
  { name: "Shop", path: "/shop", icon: ShirtIcon },
  { name: "Cart", path: "/cart", icon: ShirtIcon },
  { name: "Tickets", path: "/tickets", icon: TicketIcon },
  { name: "About", path: "/about", icon: InfoIcon },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cart } = useShopContext();
  const pathname = usePathname();

  return (
    <nav
      className={clsx("bg-yellow-400 border-black  sticky top-0 z-50", {
        "border-b-8": pathname !== "/", // Only show border on non-home pages
        "border-b-2": pathname === "/", // Only show border on non-home pages
      })}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="sm:text-2xl text-lg font-black">
                TECH FUSION FEST
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <NavLink key={item.name} {...item} />
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <Link href="/cart">
              <Button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transform transition-transform duration-200 hover:scale-110 border-4 border-black">
                <ShoppingCartIcon className="inline-block mr-2 h-5 w-5" />
                Cart ({cart.length})
              </Button>
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <Button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center  rounded-md text-white hover:text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <MenuIcon className="block h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <MobileNav navItems={navItems} setMobileMenuOpen={setMobileMenuOpen} />
      )}
    </nav>
  );
}
