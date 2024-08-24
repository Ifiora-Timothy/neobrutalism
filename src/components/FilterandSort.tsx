"use client";

import React, { useCallback, useState } from "react";
import { Slider } from "./ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { ArrowDownIcon, ArrowUpIcon, FilterIcon, XIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useDebouncedCallback } from "use-debounce";
import useAddToParams from "@/hooks/useAddToParams";

type Props = {};

const FilterandSort = (props: Props) => {
  const { addToParams, searchParams } = useAddToParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [priceRange, setPriceRange] = useState(
    searchParams.get("pricerange")?.split("-").map(Number) ?? [0, 50]
  );
  const sortBy = searchParams.get("sortby") ?? "popularity";
  const sortOrder = searchParams.get("sortorder") ?? "desc";

  const debounced = useDebouncedCallback((val: number[]) => {
    addToParams("pricerange", `${val[0]}-${val[1]}`);
  }, 100);

  //price rande
  //sortby
  //sortorder

  return (
    <>
      {/* Mobile Filter Toggle Button */}
      <div className="md:hidden mb-4">
        <Button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="w-full bg-yellow-400 hover:bg-yellow-400 sm:hover:bg-yellow-200 active:bg-yellow-700 text-black border-4 border-black p-4 text-xl font-bold"
        >
          {isFilterOpen ? (
            <XIcon className="mr-2" />
          ) : (
            <FilterIcon className="mr-2" />
          )}
          {isFilterOpen ? "Close Filters" : "Open Filters"}
        </Button>
      </div>
      <div
        className={`mb-12 grid grid-cols-1 md:grid-cols-3 gap-6 ${
          isFilterOpen ? "block" : "hidden md:grid"
        }`}
      >
        <div className="bg-yellow-400 p-6 border-4 border-black shadow-[8px_8px_0_0_#000]">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 transform -rotate-2">
            Price Range
          </h2>
          <Slider
            min={0}
            max={50}
            step={1}
            value={priceRange}
            onValueChange={(val) => {
              setPriceRange(val);
              debounced(val);
            }}
            className="mb-4"
          />
          <p className="text-xl md:text-2xl font-bold bg-white p-2 border-2 border-black inline-block transform rotate-2">
            ${priceRange[0]} - ${priceRange[1]}
          </p>
        </div>
        <div className="bg-cyan-400 p-6 border-4 border-black shadow-[8px_8px_0_0_#000]">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 transform -rotate-2">
            Sort By
          </h2>
          <Select
            value={sortBy}
            onValueChange={(val) => addToParams("sortby", val)}
          >
            <SelectTrigger className="w-full text-lg md:text-xl border-4 border-black">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="price" className="text-lg md:text-xl">
                Price
              </SelectItem>
              <SelectItem value="popularity" className="text-lg md:text-xl">
                Popularity
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="bg-pink-400 p-6 border-4 border-black shadow-[8px_8px_0_0_#000]">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 transform -rotate-2">
            Order
          </h2>
          <Button
            onClick={() => {
              const prevOrder = sortOrder;
              const newOrder = prevOrder === "asc" ? "desc" : "asc";
              addToParams("sortorder", newOrder);
            }}
            className="w-full bg-black text-white hover:bg-gray-800 text-lg md:text-xl py-4 md:py-6 border-4 border-white"
          >
            {sortOrder === "asc" ? (
              <ArrowUpIcon className="mr-2 h-5 w-5 md:h-6 md:w-6" />
            ) : (
              <ArrowDownIcon className="mr-2 h-5 w-5 md:h-6 md:w-6" />
            )}
            {sortOrder === "asc" ? "Ascending" : "Descending"}
          </Button>
        </div>
      </div>
    </>
  );
};

export default FilterandSort;
