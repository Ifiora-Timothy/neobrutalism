import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCardIcon, TruckIcon, LockIcon } from "lucide-react";

import PaymentMethod from "@/components/PaymentMethod";
import PlaceOrderBtn from "@/components/PlaceOrderBtn";
import OrderSummary from "@/components/OrderSummary";
import { Suspense } from "react";

export default function Checkout() {
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
                    placeholder="John"
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
                    placeholder="Doe"
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
                  placeholder="tech street 123"
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
                    placeholder="San Francisco"
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
                    placeholder="94102"
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
            <PaymentMethod />
          </div>
        </div>

        <div>
          <div className="bg-pink-400 p-8 border-8 border-black shadow-[12px_12px_0_0_#000] mb-8">
            <h2 className="sm:text-3xl text-xl font-bold mb-4">
              ORDER SUMMARY
            </h2>
            <Suspense fallback={<div>Loading Order Summary</div>}>
              <OrderSummary />
            </Suspense>
          </div>

          <PlaceOrderBtn />

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
