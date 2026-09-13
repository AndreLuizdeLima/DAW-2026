import { useMemo } from "react";
import { Button } from "@/components/ui/button";

type NavigationOption = {
  value: string;
  hasActive: boolean;
};

const NavigationBar = () => {
  const options = useMemo<NavigationOption[]>(
    () => [
      {
        value: "Todos",
        hasActive: true,
      },
      {
        value: "Lanches",
        hasActive: false,
      },
      {
        value: "Porções",
        hasActive: false,
      },
      {
        value: "Sobremesas",
        hasActive: false,
      },
    ],
    [],
  );

  return (
    <nav className="flex flex-row gap-2">
      {options.length > 0
        ? options.map((i, index) => (
            <Button
              key={index}
              variant={i.hasActive ? "default" : "outline"}
              className={
                i.hasActive
                  ? undefined
                  : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              }
            >
              {i.value}
            </Button>
          ))
        : null}
    </nav>
  );
};

export default NavigationBar;
