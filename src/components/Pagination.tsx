"use client";

import { Button } from "./ui/button";
import useAddToParams from "@/hooks/useAddToParams";

type Props = {
  itemsNumber: number;
};

const Pagination = ({ itemsNumber }: Props) => {
  const itemsPerPage = 6;
  const pageCount = Math.ceil(itemsNumber / itemsPerPage);
  const { addToParams, searchParams } = useAddToParams();

  const page = searchParams.get("page");
  const currentPage = page ? Number(page) : 1;
  return (
    <div className="flex justify-center gap-2 md:gap-4 mb-8">
      {Array.from({ length: pageCount }, (_, i) => i + 1).map((page) => (
        <Button
          key={page}
          onClick={() => addToParams("page", page.toString())}
          className={`w-8 h-8 md:w-12 md:h-12 text-lg md:text-2xl font-bold border-2 md:border-4 border-black transform transition-all duration-200 hover:scale-110 ${
            currentPage === page
              ? "bg-red-500 text-white rotate-3"
              : "bg-yellow-400 text-black hover:bg-yellow-500 -rotate-3"
          }`}
        >
          {page}
        </Button>
      ))}
    </div>
  );
};

export default Pagination;
