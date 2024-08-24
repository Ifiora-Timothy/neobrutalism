"use client";

import { Dispatch, PropsWithChildren, createContext, useState } from "react";

type cartItem = {
  id: number;
  name: string;
  price: number;
  color: string;
  likes: number;
  description: string;
  quantity: number;
};
type ShopContextType = {
  cart: cartItem[];
  addtoCart: (item: Omit<cartItem, "quantity">) => void;
  removefromCart: (id: number) => void;
  toggleWishlist: (item: Omit<cartItem, "quantity">) => void;
  removeFromWishlist: (id: number) => void;
  addWishToCart: (id: number) => void;
  addCartToWishlist: (id: number) => void;
  isCartOpen: boolean;
  isWishlistOpen: boolean;
  closeCart: () => void;
  closeWishlist: () => void;
  wishlist: Omit<cartItem, "quantity">[];
  updateQuantity: (id: number, delta: number) => void;
};

export const shopContext = createContext<ShopContextType>({
  cart: [],
  addtoCart: () => {},
  removefromCart: () => {},
  toggleWishlist: () => {},
  removeFromWishlist: () => {},
  addWishToCart: () => {},
  addCartToWishlist: () => {},
  isCartOpen: false,
  isWishlistOpen: false,
  closeCart: () => {},
  closeWishlist: () => {},
  wishlist: [],
  updateQuantity: () => {},
});

export const ShopProvider = ({ children }: PropsWithChildren) => {
  const [cart, setCart] = useState<cartItem[]>([]);
  const [wishlist, setWishlist] = useState<Omit<cartItem, "quantity">[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  const addtoCart = (shirt: Omit<cartItem, "quantity">) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === shirt.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === shirt.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...shirt, quantity: 1 }];
      }
    });
    setIsCartOpen(true);
  };

  const removefromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };
  const toggleWishlist = (shirt: Omit<cartItem, "quantity">) => {
    setWishlist((prev) => {
      if (prev.some((item) => item.id === shirt.id)) {
        return prev.filter((item) => item.id !== shirt.id);
      }
      setIsWishlistOpen(true);
      return [...prev, shirt];
    });
  };
  const removeFromWishlist = (id: number) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };
  const updateQuantity = (id: number, delta: number) => {
    setCart((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };
  const addWishToCart = (id: number) => {
    const item = wishlist.find((item) => item.id === id);
    if (item) {
      addtoCart(item);
      removeFromWishlist(id);
      setIsCartOpen(true);
    }
  };
  const addCartToWishlist = (id: number) => {
    const item = cart.find((item) => item.id === id);
    if (item) {
      toggleWishlist(item);
      removefromCart(id);
      setIsWishlistOpen(true);
    }
  };
  const closeCart = () => {
    setIsCartOpen(false);
  };
  const closeWishlist = () => {
    setIsWishlistOpen(false);
  };

  return (
    <shopContext.Provider
      value={{
        cart,
        addtoCart,
        removefromCart,
        toggleWishlist,
        removeFromWishlist,
        addWishToCart,
        addCartToWishlist,
        updateQuantity,
        isCartOpen,
        isWishlistOpen,
        closeCart,
        closeWishlist,
        wishlist,
      }}
    >
      {children}
    </shopContext.Provider>
  );
};
