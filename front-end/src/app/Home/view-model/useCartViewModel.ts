import { useState } from "react";

type CartItem = {
  name: string;
};

export type CartViewModel = {
  items: CartItem[];
  addProduct: (name: string) => void;
};

export function useCartViewModel(): CartViewModel {
  const [itemsByName, setItemsByName] = useState<Record<string, CartItem>>({});

  function addProduct(name: string) {
    setItemsByName((currentItems) => {
      if (currentItems[name]) {
        return currentItems;
      }

      return {
        ...currentItems,
        [name]: { name },
      };
    });
  }

  return {
    items: Object.values(itemsByName),
    addProduct,
  };
}
