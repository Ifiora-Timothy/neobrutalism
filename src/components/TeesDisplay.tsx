import { shirt } from "@/app/(otherPages)/shop/page";
import React from "react";
import ItemCard from "./ItemCard";
import { getShirt } from "@/app/actions/GetShirts";

type Props = {};

const TeesDisplay = async () => {
  const tees = await getShirt();
  const homeDisplayShirt: shirt[] = await JSON.parse(tees);

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
