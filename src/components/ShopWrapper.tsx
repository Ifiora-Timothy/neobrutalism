import { shirt } from "@/app/(otherPages)/shop/page";
import Pagination from "./Pagination";
import ItemCard from "./ItemCard";
import { Suspense } from "react";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};
const ShopWrapper = async ({ searchParams }: Props) => {
  const url = process.env.NEXT_PUBLIC_URL;
  console.log({ url });
  console.log({ url3: process.env.VERCEL_PROJECT_PRODUCTION_URL });
  console.log("ENCS", process.env.VERCEL_URL);
  const tees = await fetch(`https://${process.env.VERCEL_URL}/api`, {
    method: "GET",
    cache: "default",
  });
  const shirts: shirt[] = await tees.json();
  const priceRange = (searchParams.pricerange as string | undefined)
    ?.split("-")
    .map(Number) ?? [0, 50];

  const sortBy = searchParams.sortby ?? "popularity";
  const sortOrder = searchParams.sortorder ?? "desc";

  const viewMode = searchParams.viewMode ?? "list";

  const page = searchParams.page;
  const currentPage = page ? Number(page) : 1;

  const itemsPerPage = 6;
  const filteredAndSortedShirts = shirts
    .filter(
      (shirt) => shirt.price >= priceRange[0] && shirt.price <= priceRange[1]
    )
    .sort((a, b) => {
      if (sortBy === "price") {
        return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
      } else {
        return sortOrder === "asc" ? a.likes - b.likes : b.likes - a.likes;
      }
    });
  const displayedShirts = filteredAndSortedShirts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const gridClass =
    viewMode === "grid2"
      ? "grid-cols-2 md:grid-cols-3"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
  return (
    <>
      <div className={`grid ${gridClass} gap-4 md:gap-8 mb-12`}>
        {displayedShirts.map((shirt) => (
          <ItemCard
            viewMode={viewMode as "list" | "grid2"}
            shirt={shirt}
            key={shirt.id}
          />
        ))}
      </div>
      <Suspense fallback={<div>Loading</div>}>
        <Pagination itemsNumber={filteredAndSortedShirts.length} />
      </Suspense>
    </>
  );
};

export default ShopWrapper;
