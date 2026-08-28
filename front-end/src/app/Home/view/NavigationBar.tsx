import { useMemo } from "react";
import Badge, { type BageProps } from "@/components/Badge";

const NavigationBar = () => {
  const options = useMemo<BageProps[]>(
    () => [
      {
        value: "Lanches",
        hasActive: true,
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
            <Badge hasActive={i.hasActive} value={i.value} key={index} />
          ))
        : null}
    </nav>
  );
};

export default NavigationBar;
