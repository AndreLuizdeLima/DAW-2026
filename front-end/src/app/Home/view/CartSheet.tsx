import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { CartViewModel } from "../view-model/useCartViewModel";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type CartSheetProps = {
  cartViewModel: CartViewModel;
};

const CartSheet = ({ cartViewModel }: CartSheetProps) => {
  return (
    <Sheet>
      <SheetTrigger
        render={<Button variant="default" className="rounded-full w-14 h-14" />}
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

        <div className="flex flex-1 px-4">
          {cartViewModel.items.length ? (
            <ul className="w-full space-y-2">
              {cartViewModel.items.map((item) => (
                <li
                  key={item.name}
                  className="rounded-md border px-3 py-2 font-medium"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          ) : (
            <p className="m-auto text-center text-muted-foreground">
              Seu carrinho está vazio.
            </p>
          )}
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
