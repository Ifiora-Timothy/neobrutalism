import clsx from "clsx";
import AddToWishlistBtn from "./AddToWishlistBtn";
import AddToCartBtn from "./AddToCartBtn";
import { ShopProvider } from "@/contexts/shopContext";
import Image from "next/image";

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
  console.log({ shirt });

  return (
    <div
      key={shirt.id}
      className={`${shirt.color} grid p-4 md:p-6 border-4 md:border-8 border-black shadow-[8px_8px_0_0_#000] hover:shadow-[12px_12px_0_0_#000] transition-all duration-300 transform hover:-translate-y-2`}
    >
      <div className="w-full h-fit flex items-center justify-center">
        <Image
          height={300}
          width={300}
          placeholder="blur"
          blurDataURL={shirt.images.black}
          src={shirt.images.black}
          alt={shirt.name}
          className="w-[200px] h-auto mb-4 bordr-2 md:borer-4 border-black"
        />
      </div>
      <h2
        className={clsx("md:text-3xl font-bold mb-2", {
          "text-xl ": viewMode === "list",
          "text-sm ": viewMode === "grid2",
        })}
      >
        {shirt.name}
      </h2>
      <p className="text-lg w-fit md:text-2xl mb-2 bg-white inline-block px-2 transform -rotate-2 border-2 border-black">
        ${shirt.price}
      </p>
      <p className="text-base md:text-xl mb-4">❤️ {shirt.likes}</p>

      <div className="flex gap-2 md:gap-4">
        <AddToCartBtn viewMode={viewMode} shirt={shirt} />
        <AddToWishlistBtn shirt={shirt} />
      </div>
    </div>
  );
};

export default ItemCard;
