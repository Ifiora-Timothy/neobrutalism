"use client";

import useAddToParams from "@/hooks/useAddToParams";

import { imageColors } from "../page";
import Image from "next/image";

type Props = {
  image: string;
  name: string;
  index: number;
  color: imageColors;
};

const ProductslideItem = ({ image, name, color, index }: Props) => {
  const { addToParams, searchParams } = useAddToParams();

  const active = searchParams.get("mainimage") == color;
  return (
    <button
      onClick={() => addToParams("mainimage", color)}
      className={`border-4 ${
        active ? "border-red-500" : "border-black"
      } overflow-hidden p-2 bg-slate-300 transition-transform transform hover:scale-105`}
    >
      <Image
        src={image}
        height={200}
        width={200}
        alt={`${name} view ${index + 1}`}
        className="w-full h-auto"
      />
    </button>
  );
};

export default ProductslideItem;
