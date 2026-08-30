import { formatCurrency } from "@/lib/formatCurrency";
import Badge from "./Badge";

export type ProductCardProps = {
  name: string;
  description: string;
  imagem: string;
  preco: number;
};

const ProductCard = ({
  name,
  description,
  imagem,
  preco,
}: ProductCardProps) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="aspect-video w-full overflow-hidden">
        <img src={imagem} alt={name} className="h-full w-full object-cover" />
      </div>

      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-base font-semibold text-zinc-900">{name}</h3>

          <Badge value={formatCurrency(preco)} hasActive={true} />
        </div>

        <p className="line-clamp-2 text-sm leading-relaxed text-zinc-500">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
