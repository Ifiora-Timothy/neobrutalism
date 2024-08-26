import FilterandSort from "@/components/FilterandSort";
import ViewModeToggle from "@/components/ViewModeToggle";
import ShopWrapper from "@/components/ShopWrapper";
import { Suspense } from "react";
import { getShirt } from "@/app/actions/GetShirts";

export type shirt = {
  id: number;
  name: string;
  price: number;
  color: string;
  likes: number;
  description: string;

  images: {
    white: string;
    black: string;
    blue: string;
  };
};

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Shop({ searchParams }: Props) {
  const tees = await getShirt();
  const shirts: shirt[] = await JSON.parse(tees);
  return (
    <div className="max-w-7xl mx-auto sm:px-4 py-8">
      <h1 className="sm:text-5xl text-xl md:text-7xl font-black mb-12 transform -rotate-2 text-center bg-purple-600 text-white p-4 border-8 border-black shadow-[8px_8px_0_0_#000]">
        SHOP FEST SHIRTS
      </h1>

      {/* Mobile Filter Toggle Button */}
      <Suspense fallback={<div>Loading filter</div>}>
        <FilterandSort />
      </Suspense>
      {/* View Mode Toggles */}
      <Suspense fallback={<div>Loading ViewModeToggle</div>}>
        <ViewModeToggle />
      </Suspense>

      {/* Product Grid */}
      <ShopWrapper shirts={shirts} searchParams={searchParams} />
    </div>
  );
}
