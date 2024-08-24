"use client";
import React from "react";
import { Button } from "./ui/button";
import { XIcon } from "lucide-react";
import { useRef } from "react";
import useClickOutside from "@/hooks/useClickOutside";
import useShopContext from "@/hooks/useShopContext";
import Link from "next/link";

type Props = {};

const CartOverlay = (props: Props) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);

  const { isCartOpen, closeCart, cart, removefromCart } = useShopContext();
  useClickOutside({
    ref: childRef,
    parent: parentRef,
    handleOnClickOutside(event) {
      closeCart();
    },
  });
  return (
    <div
      ref={parentRef}
      role="button"
      className={`fixed  z-[60] inset-y-0 right-0 w-full flex justify-end h-screen overflow-hidden  transform transition-transform duration-300 ease-in-out bg-slate-600 bg-opacity-80   ${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="h-full w-full bg-black bg-opacity-25 backdrop-blur-sm"></div>
      <div
        ref={childRef}
        className={`fixed z-[60] h-full inset-y-0 right-0 w-[80%] md:w-96 bg-yellow-400 border-l-8 border-black  
      overflow-y-auto`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold">Your Cart</h2>
            <Button
              onClick={() => closeCart()}
              className="bg-red-500 hover:bg-red-600 text-white p-2"
            >
              <XIcon />
            </Button>
          </div>
          {cart.map((item) => (
            <div
              key={item.id}
              className="mb-4 p-4 bg-white border-4 border-black"
            >
              <h3 className="text-xl font-bold">{item.name}</h3>
              <p className="text-lg">
                ${item.price} x {item.quantity}
              </p>
              <Button
                onClick={() => removefromCart(item.id)}
                className="mt-2 bg-red-500 hover:bg-red-600 text-white"
              >
                Remove
              </Button>
            </div>
          ))}
          <div className="mt-6 text-2xl font-bold">
            Total: $
            {cart
              .reduce((sum, item) => sum + item.price * item.quantity, 0)
              .toFixed(2)}
          </div>
          <Link href="/checkout">
            <Button className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white text-xl py-4 border-4 border-black">
              Checkout
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartOverlay;
