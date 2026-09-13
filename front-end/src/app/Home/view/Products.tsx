import ProductCard from "@/components/ProductCard";
import { useProducts } from "../view-model/useProducts";
import type { CartViewModel } from "../view-model/useCartViewModel";

type ProductsProps = {
  cartViewModel: CartViewModel;
};

const Products = ({ cartViewModel }: ProductsProps) => {
  const { products, isLoading, error } = useProducts();

  if (isLoading) {
    return <p className="my-4">Carregando produtos...</p>;
  }

  if (error) {
    return <p className="my-4">{error}</p>;
  }

  return (
    <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 my-4">
      {products.length
        ? products.map((product) => (
            <ProductCard
              {...product}
              key={product.name}
              hasAdicionadoCarrinho={cartViewModel.hasProduct(product.name)}
              onAddToCart={() => cartViewModel.addProduct(product.name)}
            />
          ))
        : null}
    </article>
  );
};

export default Products;
