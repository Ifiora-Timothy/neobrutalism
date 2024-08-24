"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CreditCardIcon, TruckIcon, LockIcon } from "lucide-react";
import clsx from "clsx";

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("credit");

  // Mock cart data
  const cartItems = [
    { id: 1, name: "Neon Explosion Tee", price: 29.99, quantity: 2 },
    { id: 2, name: "Bass Drop Hoodie", price: 49.99, quantity: 1 },
    { id: 3, name: "General Admission Ticket", price: 99.99, quantity: 1 },
  ];

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1; // Assuming 10% tax
  const shipping = 9.99;
  const total = subtotal + tax + shipping;

  return (
    <div className="max-w-6xl mx-auto sm:px-4 py-12">
      <h1 className="sm:text-7xl text-4xl font-black mb-12 transform -rotate-2 text-center bg-green-500 text-black p-6 border-8 border-black shadow-[12px_12px_0_0_#000]">
        CHECKOUT
      </h1>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <div className="bg-yellow-400 p-8 border-8 border-black shadow-[12px_12px_0_0_#000] mb-8">
            <h2 className="sm:text-3xl text-xl font-bold mb-4">
              1. SHIPPING INFO
            </h2>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label
                    htmlFor="firstName"
                    className="sm:text-xl text-sm font-bold"
                  >
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    className="border-4 bg-yellow-100 border-black sm:text-xl text-sm"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="lastName"
                    className="sm:text-xl text-sm font-bold"
                  >
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    className="border-4 bg-yellow-100 border-black sm:text-xl text-sm"
                  />
                </div>
              </div>
              <div>
                <Label
                  htmlFor="address"
                  className="sm:text-xl text-sm font-bold"
                >
                  Address
                </Label>
                <Input
                  id="address"
                  className="border-4 bg-yellow-100 border-black sm:text-xl text-sm"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label
                    htmlFor="city"
                    className="sm:text-xl text-sm font-bold"
                  >
                    City
                  </Label>
                  <Input
                    id="city"
                    className="border-4 bg-yellow-100 border-black sm:text-xl text-sm"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="zipCode"
                    className="sm:text-xl text-sm font-bold"
                  >
                    ZIP Code
                  </Label>
                  <Input
                    id="zipCode"
                    className="border-4 bg-yellow-100 border-black sm:text-xl text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-cyan-400 p-8 border-8 border-black shadow-[12px_12px_0_0_#000] mb-8">
            <h2 className="sm:text-3xl text-xl font-bold mb-4">
              2. PAYMENT METHOD
            </h2>
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
              <div className="flex items-center space-x-2 mb-2">
                <RadioGroupItem
                  value="credit"
                  id="credit"
                  className={clsx("border-4  border-black", {
                    "bg-yellow-100": paymentMethod === "credit",
                  })}
                />
                <Label
                  htmlFor="credit"
                  className="sm:text-xl text-sm font-bold"
                >
                  Credit Card
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="paypal"
                  id="paypal"
                  className={clsx("border-4  border-black", {
                    "bg-yellow-100": paymentMethod === "paypal",
                  })}
                />
                <Label
                  htmlFor="paypal"
                  className="sm:text-xl text-sm font-bold"
                >
                  PayPal
                </Label>
              </div>
            </RadioGroup>
            {paymentMethod === "credit" && (
              <div className="mt-4 grid gap-4">
                <div>
                  <Label
                    htmlFor="cardNumber"
                    className="sm:text-xl text-sm font-bold"
                  >
                    Card Number
                  </Label>
                  <Input
                    id="cardNumber"
                    className="border-4 border-black sm:text-xl text-sm"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="expiry"
                      className="sm:text-xl text-sm font-bold"
                    >
                      Expiry Date
                    </Label>
                    <Input
                      id="expiry"
                      placeholder="MM/YY"
                      className="border-4 border-black text-xl"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="cvv"
                      className="sm:text-xl text-sm font-bold"
                    >
                      CVV
                    </Label>
                    <Input
                      id="cvv"
                      className="border-4 border-black sm:text-xl text-sm"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div>
          <div className="bg-pink-400 p-8 border-8 border-black shadow-[12px_12px_0_0_#000] mb-8">
            <h2 className="sm:text-3xl text-xl font-bold mb-4">
              ORDER SUMMARY
            </h2>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center mb-2"
              >
                <span className="sm:text-xl text-sm">
                  {item.name} x{item.quantity}
                </span>
                <span className="sm:text-xl text-sm font-bold">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
            <div className="border-t-4 border-black mt-4 pt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="sm:text-xl text-sm">Subtotal</span>
                <span className="sm:text-xl text-sm font-bold">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="sm:text-xl text-sm">Tax</span>
                <span className="sm:text-xl text-sm font-bold">
                  ${tax.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="sm:text-xl text-sm">Shipping</span>
                <span className="sm:text-xl text-sm font-bold">
                  ${shipping.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center mt-4 sm:text-2xl text-base font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <Button className="w-full text-2xl py-6 bg-red-500 hover:bg-red-600 text-white font-bold transform transition-all duration-200 hover:scale-105 border-4 border-black">
            PLACE ORDER
          </Button>

          <div className="mt-8 text-center">
            <div className="flex justify-center items-start gap-2 mb-2">
              <LockIcon className="sm:size-6 size-4" />
              <span className="sm:text-xl text-sm font-bold">
                Secure Checkout
              </span>
            </div>
            <div className="flex justify-center items-start gap-2 mb-2">
              <TruckIcon className="sm:size-6 size-4" />
              <span className="sm:text-xl text-sm font-bold">
                Free Shipping on Orders Over $100
              </span>
            </div>
            <div className="flex justify-center items-start gap-2">
              <CreditCardIcon className="sm:size-6 size-4" />
              <span className="sm:text-xl text-sm font-bold">
                We Accept All Major Credit Cards
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
