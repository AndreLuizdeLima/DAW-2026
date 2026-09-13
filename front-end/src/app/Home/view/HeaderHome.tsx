import CartSheet from "./CartSheet";
import type { CartViewModel } from "../view-model/useCartViewModel";

type HeaderHomeProps = {
  cartViewModel: CartViewModel;
};

const HeaderHome = ({ cartViewModel }: HeaderHomeProps) => {
  return (
    <header className="p-2">
      <div className="flex flex-row justify-between h-24 items-end">
        <div className="flex flex-row items-end gap-4">
          <img src="data/logo_lanchonete.svg" className="h-24" />
          <div className="hidden sm:block">
            <h1 className="text-xl font-semibold">Cardápio digital</h1>
            <p className="text-md text-gray-500">Faça o seu pedido aqui</p>
          </div>
        </div>
        <CartSheet cartViewModel={cartViewModel} />
      </div>
    </header>
  );
};

export default HeaderHome;
