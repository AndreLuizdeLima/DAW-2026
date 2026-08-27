import { cn } from "../lib/utils";

export type BageProps = {
  value: string;
  hasActive: boolean;
};

const Badge = ({ value, hasActive }: BageProps) => {
  return (
    <div
      className={cn(
        "p-2 rounded-3xl",
        hasActive
          ? "bg-red-500 text-white"
          : "border-2 border-red-500 text-red-500 hover:text-white hover:bg-red-500 transition-colors duration-300 cursor-pointer",
      )}
    >
      {value}
    </div>
  );
};

export default Badge;
