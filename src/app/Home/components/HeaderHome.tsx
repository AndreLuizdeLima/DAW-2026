import { ShoppingCart } from "lucide-react";

const HeaderHome = () => {
  return (
    <header>
      <div className="flex flex-row justify-between h-24 items-center">
        <img src="data/logo_lanchonete.svg" className="h-24 fill-red-500" />
        <div className="p-3 rounded-full border border-black hover:bg-gray-100 hover:shadow-lg">
          <ShoppingCart />
        </div>
      </div>
    </header>
  );
};

export default HeaderHome;
