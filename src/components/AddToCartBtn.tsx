"use client";
import clsx from "clsx";
import { Button } from "./ui/button";
import { BiCartAdd } from "react-icons/bi";
import useShopContext from "@/hooks/useShopContext";
import { shirt } from "@/app/(otherPages)/shop/page";

type Props = { viewMode: "grid2" | "list"; shirt: shirt };

const AddToCartBtn = ({ viewMode, shirt }: Props) => {
  const { addtoCart } = useShopContext();
  return (
    <Button
      onClick={() => addtoCart({ ...shirt, color: "black", size: "M" })}
      className={clsx(
        "flex-1  md:text-xl  bg-red-500 hover:bg-red-600 text-white font-bold transform transition-all duration-200 hover:scale-105 border-2 md:border-4 border-black",
        {
          "py-2 md:py-4": viewMode === "list",
          "p-1": viewMode === "grid2",
        }
      )}
    >
      {viewMode == "list" ? "ADD TO CART" : <BiCartAdd size="26" />}
    </Button>
  );
};

export default AddToCartBtn;
