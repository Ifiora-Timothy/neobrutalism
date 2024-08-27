"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LuCrown, LuZap, LuTicket, LuMinus, LuPlus } from "react-icons/lu";
import { IconType } from "react-icons";
import { MinusIcon, MoveRight, PlusIcon } from "lucide-react";
import useShopContext from "@/hooks/useShopContext";
import { cartItem } from "@/contexts/shopContext";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import NeobrutallistInfotoast from "@/components/NeobrutallistInfotoast";

type TicketType = {
  id: 101 | 102 | 103;
  name: string;
  price: number;
  color: string;
  icon: IconType;
  description: string;
};
const ticketTypes: TicketType[] = [
  {
    id: 101,
    name: "GENERAL ADMISSION",
    price: 99.99,
    color: "bg-yellow-400",
    icon: LuTicket,
    description: "Access to all main stages and general festival areas.",
  },
  {
    id: 102,
    name: "VIP EXPERIENCE",
    price: 199.99,
    color: "bg-purple-500",
    icon: LuZap,
    description:
      "VIP lounge access, premium viewing areas, and exclusive merch.",
  },
  {
    id: 103,
    name: "ULTIMATE FEST PASS",
    price: 299.99,
    color: "bg-red-500",
    icon: LuCrown,
    description:
      "All VIP perks plus backstage tours, artist meet & greets, and more!",
  },
];

export default function Tickets() {
  const [quantities, setQuantities] = useState({ 101: 0, 102: 0, 103: 0 });
  const selectedTickets = ticketTypes.filter(
    (ticket) => quantities[ticket.id] > 0
  );
  const { addtoCart, removefromCart } = useShopContext();
  const router = useRouter();

  const updateQuantity = (id: 101 | 102 | 103, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, prev[id] + delta),
    }));
  };

  const total = ticketTypes.reduce(
    (sum, ticket) => sum + ticket.price * quantities[ticket.id],
    0
  );

  const proceedCheckout = () => {
    //toast an info if no tickets are added
    if (total === 0) {
      toast(
        <NeobrutallistInfotoast
          description="Please select one or multiple tiket before checking out."
          title="Hey! wait a minute."
        />,
        {
          duration: 2000,
          position: "top-right",
        }
      );
    }

    //add tickets to cart
    const ticketsToAdd: cartItem[] = selectedTickets.map((ticket) => ({
      id: ticket.id,
      name: ticket.name,
      price: ticket.price,
      color: ticket.color as "black" | "blue" | "white",
      likes: 0,
      description: ticket.description,
      size: "S",
      quantity: quantities[ticket.id],
    }));
    //if tickets already added to cart, remove them first
    selectedTickets.forEach((ticket) => removefromCart(ticket.id));
    ticketsToAdd.forEach((ticket) => addtoCart(ticket));
  };

  return (
    <div className="max-w-6xl mx-auto sm:px-4  py-12">
      <h1 className="sm:text-7xl text-2xl font-black mb-12 transform -rotate-2 text-center bg-cyan-400 text-black py-6 sm:px-6 px-1 border-8 border-black shadow-[12px_12px_0_0_#000]">
        GET YOUR TICKETS
      </h1>

      <div className="grid gap-8 sm:p-0 justify-center  mb-12">
        {ticketTypes.map((ticket) => (
          <div
            key={ticket.id}
            className={`${ticket.color} p-6 max-w-full border-8 border-black shadow-[12px_12px_0_0_#000] hover:shadow-[20px_20px_0_0_#000] transition-all duration-300 transform hover:-translate-y-2`}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="sm:text-4xl text-xl text-nowrap font-bold mb-2 flex items-center gap-2">
                  <ticket.icon size={32} />
                  {ticket.name}
                </h2>
                <p className="text-xl mb-4">{ticket.description}</p>
                <p className="text-3xl font-bold bg-white inline-block px-4 py-2 transform -rotate-2 border-4 border-black">
                  ${ticket.price.toFixed(2)}
                </p>
              </div>
              <div className="flex w-full sm:w-fit justify-center items-center gap-4">
                <Button
                  onClick={() => updateQuantity(ticket.id, -1)}
                  className="w-12 h-12 p-0 text-2xl font-bold bg-black text-white border-4 border-white hover:bg-gray-800"
                >
                  <MinusIcon />
                </Button>
                <Input
                  type="number"
                  min="0"
                  value={quantities[ticket.id]}
                  onChange={(e) =>
                    setQuantities((prev) => ({
                      ...prev,
                      [ticket.id]: parseInt(e.target.value) || 0,
                    }))
                  }
                  className="w-20 text-center text-2xl font-bold border-4 border-black"
                />
                <Button
                  onClick={() => updateQuantity(ticket.id, 1)}
                  className="w-12 p-0 h-12 text-2xl font-bold bg-black text-white border-4 border-white hover:bg-gray-800"
                >
                  <PlusIcon />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-green-400 p-8 border-8 border-black shadow-[12px_12px_0_0_#000] mb-8">
        <h2 className="sm:text-4xl text-2xl font-bold mb-4">
          TOTAL: ${total.toFixed(2)}
        </h2>
        <p className="text-xl mb-4">Ready to experience the madness?</p>
        <Button
          onClick={proceedCheckout}
          className="w-fit max-w-full gap-2 sm:text-2xl text-sm py-6 bg-red-500 hover:bg-red-600 text-white font-bold transform transition-all duration-200 hover:scale-105 border-4 border-black"
        >
          PROCEED TO CHECKOUT
        </Button>
      </div>

      <div className="bg-pink-400 p-6 border-4 border-black">
        <h3 className="text-2xl font-bold mb-2">IMPORTANT INFO</h3>
        <ul className="list-disc list-inside sm:text-lg text-base">
          <li>Tickets are non-refundable</li>
          <li>Valid ID required for entry</li>
          <li>Event is 18+ only</li>
          <li>Rain or shine event</li>
        </ul>
      </div>
    </div>
  );
}
