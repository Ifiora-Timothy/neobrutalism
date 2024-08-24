import { shirt } from "@/app/(otherPages)/shop/page";
import React from "react";
import ItemCard from "./ItemCard";

type Props = {};

const TeesDisplay = async () => {
  const tees = await fetch(`${process.env.NEXT_PUBLIC_URL}/api`, {
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
