"use client";
import React from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import useShopContext from "@/hooks/useShopContext";
import { useRouter } from "next/navigation";
import NeobrutallistInfotoast from "./NeobrutallistInfotoast";
import { MoveRight } from "lucide-react";

type Props = {};

const PlaceOrderBtn = (props: Props) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();
  const { clearCart } = useShopContext();
  const promiseToastId = "promise";
  return (
    <>
      <Button
        onClick={() => {
          toast.promise(
            new Promise((resolve, reject) => {
              setTimeout(() => {
                if (Math.random() > 0.2) {
                  resolve("Order placed!");
                } else {
                  reject("Failed to place order");
                }
              }, 2000);
            }).finally(() => setIsLoading(false)),
            {
              loading: "Placing your order...",

              success: "Order placed successfully!",
              async onAutoClose(toas) {
                try {
                  const resp = await toas.promise;
                  clearCart();
                  router.replace("/shop");

                  toast(
                    <NeobrutallistInfotoast
                      description="Please take a moment to view my other works!❤️"
                      title="Hey! wait a minute."
                    >
                      <a target="_blank" href="https://bento.me/ifiora-timothy">
                        <div className="flex gap-2 items-center bg-yellow-400 border-4 border-black px-3 py-1 justify-between w-fit">
                          My Socials
                          <MoveRight size={18} />
                        </div>
                      </a>
                    </NeobrutallistInfotoast>,
                    {
                      duration: 4000,
                      position: "top-right",
                    }
                  );
                } catch (err) {
                  console.error(err);
                }
              },
              error: "Failed to place order",
              id: promiseToastId,
              unstyled: true,
              position: "top-right",
              classNames: {
                toast: "neo-brutalist-toast",
                title: "neo-brutalist-toast-title",
                description: "neo-brutalist-toast-description",
                actionButton: "neo-brutalist-toast-action",
                cancelButton: "neo-brutalist-toast-cancel",
                icon: "neo-brutalist-toast-icon",
                error: "neo-brutalist-toast-error",
                success: "neo-brutalist-toast-success",
                loading: "neo-brutalist-toast-loading",
              },
              duration: 1000,
            }
          );
        }}
        disabled={isLoading}
        className="w-full text-2xl py-6 bg-red-500 hover:bg-red-700 text-white font-bold transform transition-all duration-200  border-4 border-black"
      >
        PLACE ORDER
      </Button>
      <style jsx global>{`
        li {
          display: flex;
        }
        .neo-brutalist-toast {
          font-family: "Arial", sans-serif;
          padding: 1rem;
          border: 6px solid black;
          box-shadow: 12px 12px 0 0 black;
          max-width: 500px;
          width: 100%;
          margin-bottom: 1rem;
          padding-left: 3rem;
          position: relative;
          overflow: hidden;
        }
        .neo-brutalist-toast::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 8px;
          background: repeating-linear-gradient(
            45deg,
            black,
            black 10px,
            yellow 10px,
            yellow 20px
          );
        }
        .neo-brutalist-toast-icon {
          align-self: center;
        }
        .neo-brutalist-toast-title {
          font-size: 14px;
          font-weight: 900;
          margin-bottom: 0.5rem;

          display: contents;

          text-transform: uppercase;
        }
        .neo-brutalist-toast-description {
          font-size: 0.5rem;
          font-weight: bold;
        }
        .neo-brutalist-toast-loading {
          background-color: #fbbf24;
          color: black;
        }
        .neo-brutalist-toast-loading::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: black;
          animation: loading-bar 2s linear infinite;
        }
        .neo-brutalist-toast-success {
          background-color: #34d399;
          color: black;
        }
        .neo-brutalist-toast-error {
          background-color: #f87171;
          color: black;
        }
        .neo-brutalist-toast svg {
          position: absolute;
          left: -2rem;
          width: 32px;
          height: 32px;
        }
        @keyframes loading-bar {
          0% {
            width: 0;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default PlaceOrderBtn;
