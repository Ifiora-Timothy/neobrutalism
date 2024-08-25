"use client";

import { LucideProps, ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import useShopContext from "@/hooks/useShopContext";

type Props = {
  setMobileMenuOpen: (open: boolean) => void;
  navItems: {
    icon: React.ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
    >;
    name: string;
    path: string;
  }[];
};

const MobileNav = ({ navItems, setMobileMenuOpen }: Props) => {
  const pathname = usePathname();
  const { cart } = useShopContext();
  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-yellow-400 border-t-4 border-black">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className={`${
              pathname === item.path
                ? "bg-black text-white"
                : "text-black hover:bg-black hover:text-white"
            } block px-3 py-2 rounded-md text-base font-medium`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <item.icon className="inline-block mr-2 h-5 w-5" />
            {item.name}
          </Link>
        ))}
        <Link href="/cart" onClick={() => setMobileMenuOpen(false)}>
          <Button className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded border-4 border-black">
            <ShoppingCartIcon className="inline-block mr-2 h-5 w-5" />
            Cart ({cart.length})
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MobileNav;
