import { formatCurrency } from "@/lib/formatCurrency";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, ShoppingCart } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export type ProductCardProps = {
  name: string;
  description: string;
  imagem: string;
  preco: number;
  hasAdicionadoCarrinho?: boolean;
  onAddToCart?: () => void;
};

const ProductCard = ({
  name,
  description,
  imagem,
  preco,
  hasAdicionadoCarrinho = false,
  onAddToCart,
}: ProductCardProps) => {
  return (
    <Card className="h-full gap-0 rounded-2xl py-0! shadow-sm transition hover:shadow-md">
      <div className="aspect-video w-full overflow-hidden">
        <img src={imagem} alt={name} className="h-full w-full object-cover" />
      </div>

      <CardHeader className="pt-4">
        <div className="flex items-center justify-between gap-4">
          <CardTitle>{name}</CardTitle>

          <Badge>{formatCurrency(preco)}</Badge>
        </div>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col gap-4 pb-4">
        <CardDescription className="line-clamp-2 leading-relaxed">
          {description}
        </CardDescription>

        <Button
          className="mt-auto w-full"
          disabled={hasAdicionadoCarrinho}
          onClick={onAddToCart}
        >
          {hasAdicionadoCarrinho ? (
            <Check aria-hidden="true" />
          ) : (
            <ShoppingCart aria-hidden="true" />
          )}
          {hasAdicionadoCarrinho ? "Adicionado" : "Adicionar"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
