"use client";

import useShopContext from "@/hooks/useShopContext";

type Props = {};

const OrderSummary = (props: Props) => {
  const { cart } = useShopContext();
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1; // Assuming 10% tax
  const shipping = 9.99;
  const total = subtotal + tax + shipping;
  return (
    <>
      {cart.map((item) => (
        <div key={item.id} className="flex justify-between items-center mb-2">
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
    </>
  );
};

export default OrderSummary;
