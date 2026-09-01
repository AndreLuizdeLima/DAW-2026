import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const CartSheet = () => {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button
            variant="default"
            className="rounded-full w-14 h-14"
            aria-label="Abrir carrinho"
          />
        }
      >
        <ShoppingCart />
      </SheetTrigger>

      <SheetContent side="right" className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Seu carrinho</SheetTitle>
          <SheetDescription>
            Revise os itens antes de finalizar seu pedido.
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-1 items-center justify-center px-4 text-center text-muted-foreground">
          <p>Seu carrinho está vazio.</p>
        </div>

        <SheetFooter className="border-t">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Subtotal</span>
            <strong>R$ 0,00</strong>
          </div>
          <Button className="w-full" disabled>
            Finalizar pedido
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
