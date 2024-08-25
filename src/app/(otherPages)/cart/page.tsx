"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusIcon, MinusIcon, TrashIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import useShopContext from "@/hooks/useShopContext";

// Mock data for cart items

export default function Cart() {
  const { cart, updateQuantity, removefromCart } = useShopContext();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1; // Assuming 10% tax
  const total = subtotal + tax;

  console.log(`/shirt${cart[0]?.id}${cart[0]?.color}.png`);
  return (
    <div className="max-w-9xl  mx-auto sm:px-4 py-12">
      <h1 className="sm:text-7xl text-4xl font-black mb-12 transform -rotate-2 text-center bg-purple-600 text-white p-6 border-8 border-black shadow-[12px_12px_0_0_#000]">
        YOUR CART
      </h1>

      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-3xl font-bold mb-8">Your cart is empty!</p>
          <Link href="/shop">
            <Button className="text-2xl py-4 px-8 bg-yellow-400 hover:bg-yellow-500 text-black font-bold transform transition-all duration-200 hover:scale-105 border-4 border-black">
              CONTINUE SHOPPING
            </Button>
          </Link>
        </div>
      ) : (
        <>
          <div className="grid gap-8 lg:grid-cols-2 grid-cols-1 mb-12">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white p-6 border-8 border-black shadow-[12px_12px_0_0_#000] hover:shadow-[20px_20px_0_0_#000] transition-all duration-300"
              >
                <div className="flex w-full flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex  items-center w-full gap-4  h-24 ">
                    <div className="w-24 bg-green-300 p-3 border-4 border-black">
                      <Image
                        src={`/store/shirt${item.id}${item.color}.png`}
                        alt={item.name}
                        width="96"
                        height="96"
                        className="size-full object-fill "
                      />
                    </div>
                    <div className="w-fit">
                      <h2 className="sm:text-2xl  text-lg font-bold">
                        {item.name}
                      </h2>
                      <p className="text-xl font-bold">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-10   p-0  h-10 text-xl font-bold bg-red-500 text-white border-4 border-black hover:bg-red-600"
                    >
                      <MinusIcon size={16} />
                    </Button>
                    <Input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(
                          item.id,
                          parseInt(e.target.value) - item.quantity
                        )
                      }
                      className="w-16 text-center text-xl font-bold border-4 border-black"
                    />
                    <Button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-10 p-0 h-10 text-xl font-bold bg-green-500 text-white border-4 border-black hover:bg-green-600"
                    >
                      <PlusIcon size={16} />
                    </Button>
                    <Button
                      onClick={() => removefromCart(item.id)}
                      className="w-10 h-10  p-0  text-xl font-bold bg-red-600 text-white border-4 border-black hover:bg-gray-800"
                    >
                      <TrashIcon strokeWidth={3} size={18} />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-yellow-400 p-8 border-8 border-black shadow-[12px_12px_0_0_#000] mb-8">
            <h2 className="sm:text-4xl text-2xl font-bold mb-4">
              ORDER SUMMARY
            </h2>
            <div className="text-xl mb-2">Subtotal: ${subtotal.toFixed(2)}</div>
            <div className="text-xl mb-2">Tax (10%): ${tax.toFixed(2)}</div>
            <div className="sm:text-3xl text-xl font-bold mb-4">
              Total: ${total.toFixed(2)}
            </div>
            <Link href="/checkout">
              <Button className="w-fit max-w-full gap-2 sm:text-2xl text-sm py-6 bg-red-500 hover:bg-red-600 text-white font-bold transform transition-all duration-200 hover:scale-105 border-4 border-black">
                PROCEED TO CHECKOUT
              </Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
