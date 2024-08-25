"use client";
import { Button } from "./ui/button";
import { XIcon } from "lucide-react";
import useShopContext from "@/hooks/useShopContext";
import { useRef } from "react";
import useClickOutside from "@/hooks/useClickOutside";

type Props = {};

const WishlistOverlay = (props: Props) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);

  const { isWishlistOpen, closeWishlist, wishlist, addtoCart } =
    useShopContext();
  console.log({ isWishlistOpen, wishlist });

  useClickOutside({
    ref: childRef,
    parent: parentRef,
    handleOnClickOutside(event) {
      closeWishlist();
    },
  });
  return (
    <div
      ref={parentRef}
      role="button"
      className={`fixed  z-[60] inset-y-0 right-0 w-full flex justify-end h-screen overflow-hidden  transform transition-transform duration-300 ease-in-out bg-slate-600 bg-opacity-80   ${
        isWishlistOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="h-full w-full bg-black bg-opacity-25 backdrop-blur-sm"></div>
      <div
        ref={childRef}
        className={` w-[80%] shrink-0 h-full md:w-96 bg-pink-400 border-l-8 border-black 
        overflow-y-auto`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold">Your Wishlist</h2>
            <Button
              onClick={() => closeWishlist()}
              className="bg-red-500 hover:bg-red-600 text-white p-2"
            >
              <XIcon />
            </Button>
          </div>
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="mb-4 p-4 bg-white border-4 border-black"
            >
              <h3 className="text-xl font-bold">{item.name}</h3>
              <p className="text-lg">${item.price}</p>
              <Button
                onClick={() =>
                  addtoCart({ ...item, color: "black", size: "M", quantity: 1 })
                }
                className="mt-2 bg-green-500 hover:bg-green-600 text-white"
              >
                Add to Cart
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishlistOverlay;
