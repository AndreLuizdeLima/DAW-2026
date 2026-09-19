import Footer from "./view/Footer";
import HeaderHome from "./view/HeaderHome";
import NavigationBar from "./view/NavigationBar";
import Products from "./view/Products";
import { useCartViewModel } from "./view-model/useCartViewModel";

const Home = () => {
  const cartViewModel = useCartViewModel();

  const { options, handleSelectedOptions } = cartViewModel;

  return (
    <section className="flex flex-col h-dvh justify-between">
      <div className="flex flex-col gap-2 px-4">
        <HeaderHome cartViewModel={cartViewModel} />
        <NavigationBar
          options={options}
          handleSelectedOptions={handleSelectedOptions}
        />
        <Products cartViewModel={cartViewModel} />
      </div>
      <Footer />
    </section>
  );
};

export default Home;
