import { ShoppingCart } from "lucide-react";

const HeaderHome = () => {
  return (
    <header className="p-5">
      <div className="flex flex-row justify-between h-24 items-center">
        <div className="flex flex-row items-center gap-4">
          <img src="data/logo_lanchonete.svg" className="h-24" />
          <div>
            <h1 className="text-xl font-semibold">Cardápio digital</h1>
            <p className="text-md text-gray-500">Faça o seu pedido aqui</p>
          </div>
        </div>
        <div className="p-3 rounded-full border border-black hover:bg-gray-100 hover:shadow-lg">
          <ShoppingCart />
        </div>
      </div>
    </header>
  );
};

export default HeaderHome;
