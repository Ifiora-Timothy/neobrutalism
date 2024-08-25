"use client";

import React, { useState } from "react";
import { shirt } from "../../page";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { HeartIcon, ShoppingCartIcon } from "lucide-react";
import useShopContext from "@/hooks/useShopContext";

type Props = {
  product: shirt;
};

const CreateCart = ({ product }: Props) => {
  const [selectedColor, setSelectedColor] = useState<
    "black" | "blue" | "white"
  >(Object.keys(product.images).find((key) => key === "black") as "black");
  const [selectedSize, setSelectedSize] = useState<"M" | "S" | "L" | "XL">("M");
  const [quantity, setQuantity] = useState(1);
  const { addtoCart, toggleWishlist, wishlist } = useShopContext();
  const colorMap = {
    blue: "bg-blue-500",
    black: "bg-black",
    white: "bg-white",
  };
  const sizesArray: Array<"M" | "S" | "L" | "XL"> = ["S", "M", "L", "XL"];
  const isWishlisted: boolean =
    !!wishlist.find((wish) => wish.id == product.id) ?? false;
  return (
    <>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Color</h2>
        <div className="flex gap-4">
          {Object.keys(product.images).map((color, index) => (
            <button
              key={index}
              onClick={() =>
                setSelectedColor(color as "black" | "blue" | "white")
              }
              className={`w-12 h-12 ${
                colorMap[color as "black" | "blue" | "white"]
              } border-4 ${
                selectedColor === color ? "border-red-500" : "border-black"
              } transition-transform transform hover:scale-110`}
              aria-label={color}
            />
          ))}
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Size</h2>
        <Select
          value={selectedSize}
          onValueChange={(value) =>
            setSelectedSize(value as "M" | "S" | "L" | "XL")
          }
        >
          <SelectTrigger className="w-full text-xl border-4 border-black">
            <SelectValue placeholder="Select size" />
          </SelectTrigger>
          <SelectContent>
            {sizesArray.map((size) => (
              <SelectItem key={size} value={size} className="text-xl">
                {size}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Quantity</h2>
        <div className="flex items-center gap-4">
          <Button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="text-2xl font-bold w-12 h-12 bg-white text-black border-4 border-black hover:bg-gray-200"
          >
            -
          </Button>
          <span className="text-2xl font-bold">{quantity}</span>
          <Button
            onClick={() => setQuantity(quantity + 1)}
            className="text-2xl font-bold w-12 h-12 bg-white text-black border-4 border-black hover:bg-gray-200"
          >
            +
          </Button>
        </div>
      </div>
      <div className="flex gap-4">
        <Button
          onClick={() =>
            addtoCart({
              ...product,
              color: selectedColor,
              size: selectedSize,
              quantity,
            })
          }
          className="flex-1 text-base items-center  sm:text-2xl sm:py-6 py-5 bg-red-500 hover:bg-red-600 text-white font-bold transform transition-all duration-200 hover:scale-105 border-4 border-black"
        >
          <ShoppingCartIcon className="mr-2 hidden sm:flex" /> Add to Cart
        </Button>
        <Button
          onClick={() =>
            toggleWishlist({
              ...product,
              size: selectedSize,
              color: selectedColor,
            })
          }
          className={`sm:p-6 p-5  border-4 border-black ${
            isWishlisted
              ? "bg-pink-500 hover:bg-pink-600"
              : "bg-gray-300 hover:bg-gray-400"
          }`}
        >
          <HeartIcon className="sm:size-6 size-5" />
        </Button>
      </div>
    </>
  );
};

export default CreateCart;
