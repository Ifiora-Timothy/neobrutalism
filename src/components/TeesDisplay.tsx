import { shirt } from "@/app/(otherPages)/shop/page";
import React from "react";
import ItemCard from "./ItemCard";
import { ImageMap } from "@/data";

type Props = {};

const TeesDisplay = async () => {
  const tees = await fetch("http://localhost:3000/api", {
    method: "GET",
    cache: "default",
  });
  const homeDisplayShirt: shirt[] = await tees.json();

  const shirts: shirt[] = homeDisplayShirt.slice(0, 4);
  console.log({ shirts });

  return (
    <>
      {shirts.map((shirt) => (
        <ItemCard viewMode="list" shirt={shirt} key={shirt.id} />
      ))}
    </>
  );
};

export default TeesDisplay;
