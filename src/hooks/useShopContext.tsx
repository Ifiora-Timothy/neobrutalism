import { shopContext } from "@/contexts/shopContext";
import React, { useContext } from "react";

const useShopContext = () => {
  const context = useContext(shopContext);

  return { ...context };
};

export default useShopContext;
