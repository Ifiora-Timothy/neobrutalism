import clsx from "clsx";
import AddToWishlistBtn from "./AddToWishlistBtn";
import AddToCartBtn from "./AddToCartBtn";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ColorProvider } from "@/contexts/ColorContext";
import ItemImage from "./ItemImage";
import { ColorsAvailableLg } from "./ColorsAvailableLg";

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
  return (
    <ColorProvider>
      <div
        key={shirt.id}
        className={`${shirt.color} group grid relative p-4 md:p-6 border-4 md:border-8 border-black shadow-[8px_8px_0_0_#000] hover:shadow-[12px_12px_0_0_#000] transition-all duration-300 transform hover:-translate-y-2`}
      >
        <div className="absolute top-5 hidden    group-hover:flex right-5 text-white w-fit h-fit">
          <ArrowUpRight className="group-hover:animate-pulse" size={30} />
        </div>
        <Link href={`/shop/${shirt.id}`}>
          <div className="w-full h-fit flex items-center justify-center">
            <ItemImage images={shirt.images} name={shirt.name} />
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
          {viewMode === "grid2" ? <ColorsAvailable /> : <ColorsAvailableLg />}
        </div>
        <div className="flex gap-2 md:gap-4">
          <AddToCartBtn viewMode={viewMode} shirt={shirt} />
          <AddToWishlistBtn shirt={shirt} />
        </div>
      </div>
    </ColorProvider>
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
