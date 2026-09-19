import { Button } from "@/components/ui/button";
import type {
  NavigationOption,
  ValueOptions,
} from "../view-model/useCartViewModel";

interface NavigationBarProps {
  options: NavigationOption[];
  handleSelectedOptions: (value: ValueOptions) => void;
}

const NavigationBar = ({
  options,
  handleSelectedOptions,
}: NavigationBarProps) => {
  return (
    <nav className="flex flex-row gap-2">
      {options.length > 0
        ? options.map((i, index) => (
            <Button
              key={index}
              variant={i.hasActive ? "default" : "outline"}
              onClick={() => handleSelectedOptions(i.value)}
              className={
                i.hasActive
                  ? undefined
                  : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              }
            >
              {i?.label || i.value}
            </Button>
          ))
        : null}
    </nav>
  );
};

export default NavigationBar;
