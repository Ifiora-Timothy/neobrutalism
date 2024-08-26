"use client";
import { colorContext } from "@/contexts/ColorContext";
import Image from "next/image";
import React, { use } from "react";

type Props = {
  name: string;
  images: { black: string; blue: string; white: string };
};

const ItemImage = ({ name, images }: Props) => {
  const { color } = use(colorContext);
  console.log({ color });

  return (
    <Image
      height={300}
      width={300}
      placeholder="blur"
      blurDataURL={images[color]}
      src={images[color]}
      alt={name}
      className="w-[170px] h-auto mb-4 bordr-2 md:borer-4 border-black"
    />
  );
};

export default ItemImage;
