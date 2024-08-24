import { shirt } from "@/app/(otherPages)/shop/page";
import React from "react";
import ItemCard from "./ItemCard";

type Props = {};

const TeesDisplay = async () => {
  const url = process.env.NEXT_PUBLIC_URL;
  console.log({ url });
  console.log({ url3: process.env.VERCEL_PROJECT_PRODUCTION_URL });
  console.log("ENCS", process.env.VERCEL_URL);
  const tees = await fetch(
    `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}/api`,
    {
      method: "GET",
      cache: "default",
    }
  );
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
