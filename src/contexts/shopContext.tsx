"use client";

import {
  Dispatch,
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";

export type cartItem = {
  id: number;
  name: string;
  price: number;
  color: "black" | "blue" | "white";
  likes: number;
  description: string;
  size: "S" | "M" | "L" | "XL";
  quantity: number;
};
type ShopContextType = {
  cart: cartItem[];
  addtoCart: (item: cartItem) => void;
  removefromCart: (id: number) => void;
  toggleWishlist: (item: Omit<cartItem, "quantity">) => void;
  removeFromWishlist: (id: number) => void;
  addWishToCart: (id: number) => void;
  addCartToWishlist: (id: number) => void;
  isCartOpen: boolean;
  isWishlistOpen: boolean;
  closeCart: () => void;
  clearCart: () => void;
  closeWishlist: () => void;
  wishlist: Omit<cartItem, "quantity">[];
  updateQuantity: (id: number, delta: number) => void;
};

export const shopContext = createContext<ShopContextType>({
  cart: [],
  addtoCart() {},
  removefromCart() {},
  toggleWishlist() {},
  removeFromWishlist() {},
  addWishToCart() {},
  addCartToWishlist() {},
  isCartOpen: false,
  isWishlistOpen: false,
  closeCart() {},
  closeWishlist() {},
  wishlist: [],
  updateQuantity() {},
  clearCart() {},
});

export const ShopProvider = ({ children }: PropsWithChildren) => {
  const [cart, setCart] = useState<cartItem[]>([]);
  const [wishlist, setWishlist] = useState<Omit<cartItem, "quantity">[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  useEffect(() => {
    const carlL = JSON.parse(localStorage.getItem("cart") ?? "[]");
    const wishL = JSON.parse(localStorage.getItem("wishlist") ?? "[]");
    setCart(carlL);
    setWishlist(wishL);
  }, []);
  const addtoCart = (shirt: cartItem) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === shirt.id);
      if (existingItem) {
        const newCart = prev.map((item) =>
          item.id === shirt.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        localStorage.setItem("cart", JSON.stringify(newCart));
        return newCart;
      } else {
        const newCart = [...prev, { ...shirt, quantity: shirt.quantity ?? 1 }];
        localStorage.setItem("cart", JSON.stringify(newCart));
        return newCart;
      }
    });
    setIsCartOpen(true);
  };
  const clearCart = () => {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
  };

  const removefromCart = (id: number) => {
    setCart((prev) => {
      const newCart = prev.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };
  const toggleWishlist = (shirt: Omit<cartItem, "quantity">) => {
    setWishlist((prev) => {
      if (prev.some((item) => item.id === shirt.id)) {
        const newWish = prev.filter((item) => item.id !== shirt.id);
        localStorage.setItem("wishlist", JSON.stringify(newWish));
        return newWish;
      }
      setIsWishlistOpen(true);
      localStorage.setItem("wishlist", JSON.stringify([...prev, shirt]));
      return [...prev, shirt];
    });
  };
  const removeFromWishlist = (id: number) => {
    setWishlist((prev) => {
      const newWish = prev.filter((item) => item.id !== id);
      localStorage.setItem("wishlist", JSON.stringify(newWish));
      return newWish;
    });
  };
  const updateQuantity = (id: number, delta: number) => {
    setCart((prevItems) => {
      const newCart = prevItems
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0);

      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };
  const addWishToCart = (id: number) => {
    const item = wishlist.find((item) => item.id === id);
    if (item) {
      addtoCart({ ...item, quantity: 1 });
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
        clearCart,
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
