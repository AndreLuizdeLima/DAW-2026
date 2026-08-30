import Footer from "./view/Footer";
import HeaderHome from "./view/HeaderHome";
import NavigationBar from "./view/NavigationBar";
import Products from "./view/Products";

const Home = () => {
  return (
    <section className="flex flex-col h-dvh justify-between">
      <div className="flex flex-col gap-2 px-4">
        <HeaderHome />
        <NavigationBar />
        <Products />
      </div>
      <Footer />
    </section>
  );
};

export default Home;
