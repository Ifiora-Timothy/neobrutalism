"use client";
import useAddToParams from "@/hooks/useAddToParams";
import React from "react";
import { shirt } from "../../page";

type Props = {
  color: "black" | "blue" | "white";
};

const ColorSelect = ({ color }: Props) => {
  const { addToParams, searchParams } = useAddToParams();
  const colorMap = {
    blue: "bg-blue-500",
    black: "bg-black",
    white: "bg-white",
  };
  const selectedColor = searchParams.get("color");

  return (
    <button
      onClick={() => addToParams("color", color)}
      className={`w-12 h-12 ${colorMap[color]} border-4 ${
        selectedColor === color ? "border-red-500" : "border-black"
      } transition-transform transform hover:scale-110`}
      aria-label={color}
    />
  );
};

export default ColorSelect;
