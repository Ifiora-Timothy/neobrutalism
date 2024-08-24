"use client";
import { LucideProps } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  name: string;
  path: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
};

const NavLink = (item: Props) => {
  const pathname = usePathname();

  return (
    <Link
      key={item.name}
      href={item.path}
      className={`${
        pathname === item.path
          ? "bg-black text-white"
          : "text-black hover:bg-black hover:text-white"
      } px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 transform hover:scale-110`}
    >
      <item.icon className="inline-block mr-2 h-5 w-5" />
      {item.name}
    </Link>
  );
};

export default NavLink;
