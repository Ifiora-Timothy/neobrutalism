"use client";
import { Button } from "./ui/button";
import { HeartIcon } from "lucide-react";
import useShopContext from "@/hooks/useShopContext";
import { shirt } from "@/app/(otherPages)/shop/page";

type Props = {
  shirt: shirt;
};

const AddToWishlistBtn = ({ shirt }: Props) => {
  const { wishlist, toggleWishlist, isWishlistOpen } = useShopContext();

  return (
    <Button
      className={`p-2 md:p-4 border-2 md:border-4 border-black ${
        wishlist.some((item) => item.id === shirt.id)
          ? "bg-pink-500 hover:bg-pink-600"
          : "bg-gray-300 hover:bg-gray-400"
      }`}
      onClick={() => toggleWishlist({ ...shirt, size: "M", color: "black" })}
    >
      <HeartIcon className="w-4 h-4 md:w-6" />
    </Button>
  );
};

export default AddToWishlistBtn;
