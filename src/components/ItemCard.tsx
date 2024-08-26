"use client";
import clsx from "clsx";
import AddToWishlistBtn from "./AddToWishlistBtn";
import AddToCartBtn from "./AddToCartBtn";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { imageColors } from "@/app/(otherPages)/shop/[product]/page";

type Props = {
  shirt: {
    id: number;
    name: string;
    price: number;
    color: string;
    likes: number;
    description: string;
    images: {
      black: string;
      white: string;

      blue: string;
    };
  };
  viewMode: "grid2" | "list";
};

const ItemCard = ({ shirt, viewMode }: Props) => {
  const [color, setColor] = useState<imageColors>("black");
  console.log({ shirt });

  const changeColor = (color: imageColors) => {
    setColor(color);
  };

  return (
    <div
      key={shirt.id}
      className={`${shirt.color} group grid relative p-4 md:p-6 border-4 md:border-8 border-black shadow-[8px_8px_0_0_#000] hover:shadow-[12px_12px_0_0_#000] transition-all duration-300 transform hover:-translate-y-2`}
    >
      <div className="absolute top-5 hidden    group-hover:flex right-5 text-white w-fit h-fit">
        <ArrowUpRight className="group-hover:animate-pulse" size={30} />
      </div>
      <Link href={`/shop/${shirt.id}`}>
        <div className="w-full h-fit flex items-center justify-center">
          <Image
            height={300}
            width={300}
            placeholder="blur"
            blurDataURL={shirt.images[color]}
            src={shirt.images[color]}
            alt={shirt.name}
            className="w-[170px] h-auto mb-4 bordr-2 md:borer-4 border-black"
          />
        </div>
      </Link>
      <h2
        className={clsx("md:text-2xl font-bold mb-2", {
          "text-xl ": viewMode === "list",
          "text-sm ": viewMode === "grid2",
        })}
      >
        {shirt.name}
      </h2>{" "}
      <p className="text-lg w-fit md:text-2xl mb-2 bg-white inline-block px-2 transform -rotate-2 border-2 border-black">
        ${shirt.price}
      </p>
      <div
        className={clsx(
          "text-base flex items-center justify-between md:text-xl mb-4",
          {
            "flex-row": viewMode === "list",
            "flex-col": viewMode === "grid2",
          }
        )}
      >
        <span>❤️{shirt.likes}</span>
        {/* show a green black and white short */}
        {viewMode === "grid2" ? (
          <ColorsAvailable />
        ) : (
          <ColorsAvailableLg color={color} changeColor={changeColor} />
        )}
      </div>
      <div className="flex gap-2 md:gap-4">
        <AddToCartBtn viewMode={viewMode} shirt={shirt} />
        <AddToWishlistBtn shirt={shirt} />
      </div>
    </div>
  );
};

export default ItemCard;

export const ColorsAvailable = () => {
  return (
    <div className="flex gap-1">
      <div className="size-4 bg-black rounded-full border-2 border-black"></div>
      <div className="size-4 bg-white rounded-full border-2 border-black"></div>
      <div className="size-4 bg-blue-500 rounded-full border-2 border-black"></div>
    </div>
  );
};
export const ColorsAvailableLg = ({
  changeColor,
  color,
}: {
  color: string;
  changeColor: (color: imageColors) => void;
}) => {
  return (
    <div className="flex gap-1">
      <div
        onClick={() => changeColor("black")}
        className={clsx("size-8 bg-black rounded-md border-2 ", {
          "border-black": color != "black",
          "border-red-500": color == "black",
        })}
      ></div>
      <div
        onClick={() => changeColor("white")}
        className={clsx("size-8 bg-white rounded-md border-2 ", {
          "border-black": color != "white",
          "border-red-500": color == "white",
        })}
      ></div>
      <div
        onClick={() => changeColor("blue")}
        className={clsx("size-8 bg-blue-500 rounded-md border-2 ", {
          "border-black": color != "blue",
          "border-red-500": color == "blue",
        })}
      ></div>
    </div>
  );
};
