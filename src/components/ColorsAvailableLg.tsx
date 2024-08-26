"use client";
import { colorContext } from "@/contexts/ColorContext";
import clsx from "clsx";
import { use } from "react";

export const ColorsAvailableLg = () => {
  const { changeColor, color } = use(colorContext);

  return (
    <div className="flex gap-1">
      <div
        onClick={() => changeColor("black")}
        className={clsx("size-8 bg-black rounded-md border-2 ", {
          "border-black": color != "black",
          "border-red-500": color == "black",
        })}
      ></div>
      <div
        onClick={() => changeColor("white")}
        className={clsx("size-8 bg-white rounded-md border-2 ", {
          "border-black": color != "white",
          "border-red-500": color == "white",
        })}
      ></div>
      <div
        onClick={() => changeColor("blue")}
        className={clsx("size-8 bg-blue-500 rounded-md border-2 ", {
          "border-black": color != "blue",
          "border-red-500": color == "blue",
        })}
      ></div>
    </div>
  );
};
