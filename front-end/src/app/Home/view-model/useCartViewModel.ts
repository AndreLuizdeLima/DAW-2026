import { useCallback, useState } from "react";

type CartItem = {
  name: string;
};

export type ValueOptions =
  | "todos"
  | "lanches"
  | "porcoes"
  | "bebidas"
  | "sobremesas";

export type NavigationOption = {
  value: ValueOptions;
  hasActive: boolean;
  label?: string;
};

export function useCartViewModel() {
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

  function hasProduct(name: string) {
    return Boolean(itemsByName[name]);
  }

  const [options, setOptions] = useState<NavigationOption[]>([
    {
      label: "Todos",
      hasActive: true,
      value: "todos",
    },
    {
      label: "Lanches",
      hasActive: false,
      value: "lanches",
    },
    {
      label: "Porções",
      hasActive: false,
      value: "porcoes",
    },
    {
      label: "Bebidas",
      hasActive: false,
      value: "bebidas",
    },
    {
      label: "Sobremesas",
      hasActive: false,
      value: "sobremesas",
    },
  ]);

  const handleSelectedOptions = useCallback((value?: ValueOptions) => {
    if (!value) return;

    setOptions((prev) =>
      prev.map((option) => ({
        ...option,
        hasActive: Boolean(option.value === value),
      })),
    );
  }, []);

  return {
    items: Object.values(itemsByName),
    addProduct,
    hasProduct,
    options,
    handleSelectedOptions,
  };
}
