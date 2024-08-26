"use client";

import { useState } from "react";
import { RadioGroupItem, RadioGroup } from "./ui/radio-group";
import { Label } from "./ui/label";
import clsx from "clsx";
import { Input } from "./ui/input";

type Props = {};

const PaymentMethod = (props: Props) => {
  const [paymentMethod, setPaymentMethod] = useState("credit");
  return (
    <>
      <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
        <div className="flex items-center space-x-2 mb-2">
          <RadioGroupItem
            value="credit"
            id="credit"
            className={clsx("border-4  border-black", {
              "bg-yellow-100": paymentMethod === "credit",
            })}
          />
          <Label htmlFor="credit" className="sm:text-xl text-sm font-bold">
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
          <Label htmlFor="paypal" className="sm:text-xl text-sm font-bold">
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
              placeholder="1234 5678 9012 3456"
              className="border-4 border-black sm:text-xl text-sm"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="expiry" className="sm:text-xl text-sm font-bold">
                Expiry Date
              </Label>
              <Input
                id="expiry"
                placeholder="MM/YY"
                className="border-4 border-black text-xl"
              />
            </div>
            <div>
              <Label htmlFor="cvv" className="sm:text-xl text-sm font-bold">
                CVV
              </Label>
              <Input
                id="cvv"
                placeholder="123"
                className="border-4 border-black sm:text-xl text-sm"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PaymentMethod;
