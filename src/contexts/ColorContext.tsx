"use client";

import { imageColors } from "@/app/(otherPages)/shop/[product]/page";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from "react";

export type cartItem = {
  color: imageColors;
  changeColor: (color: imageColors) => {};
};
type colorContextType = {
  color: imageColors;
  changeColor: (color: imageColors) => void;
};

export const colorContext = createContext<colorContextType>({
  color: "black",
  changeColor: () => {},
});

export const ColorProvider = ({ children }: PropsWithChildren) => {
  const [color, setColor] = useState<imageColors>("black");

  const changeColor = (color: imageColors) => {
    setColor(color);
  };
  return (
    <colorContext.Provider
      value={{
        changeColor,
        color,
      }}
    >
      {children}
    </colorContext.Provider>
  );
};
