import Footer from "./view/Footer";
import HeaderHome from "./view/HeaderHome";
import NavigationBar from "./view/NavigationBar";
import Products from "./view/Products";
import { useCartViewModel } from "./view-model/useCartViewModel";

const Home = () => {
  const cartViewModel = useCartViewModel();

  return (
    <section className="flex flex-col h-dvh justify-between">
      <div className="flex flex-col gap-2 px-4">
        <HeaderHome cartViewModel={cartViewModel} />
        <NavigationBar />
        <Products cartViewModel={cartViewModel} />
      </div>
      <Footer />
    </section>
  );
};

export default Home;
