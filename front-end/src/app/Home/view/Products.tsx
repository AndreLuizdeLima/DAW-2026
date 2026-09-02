import type { ProductCardProps } from "@/components/ProductCard";
import ProductCard from "@/components/ProductCard";
import { useMemo } from "react";

const Products = () => {
  const itens = useMemo<ProductCardProps[]>(
    () => [
      {
        name: "Burger",
        description:
          "Pão brioche, hambúrguer 160g, queijo prato e molho da casa.",
        imagem: "data/burger.png",
        preco: 22,
      },
      {
        name: "Bacon Burger",
        description:
          "Pão brioche, hambúrguer 160g, bacon, queijo cheddar e molho da casa.",
        imagem: "data/burger-bacon.png",
        preco: 25,
      },
      {
        name: "Duplo Burguer",
        description:
          "Dois hambúrgueres de 160g cada, cheddar, bacon e cebola caramelizada.",
        imagem: "data/burger-double.png",
        preco: 29,
      },
      {
        name: "Batata Rústica",
        description: "Porção de batata com alecrim, parmesão e maionese verde.",
        imagem: "data/batata-rustica.png",
        preco: 18,
      },
      {
        name: "Batata Tradicional",
        description: "Porção de batata e maionese verde.",
        imagem: "data/batata-tradicional.png",
        preco: 15,
      },
      {
        name: "Água Sem Gás",
        description: "Garrafa descartável de água sem gás com 500 ml.",
        imagem: "data/agua.png",
        preco: 8,
      },
      {
        name: "Refrigerante 300 ml",
        description: "Copo de refrigerante de 300 ml.",
        imagem: "data/refri.png",
        preco: 10,
      },
      {
        name: "Chopp 300 ml",
        description: "Caneca de 300 ml do nosso chopp pilsen geladíssimo.",
        imagem: "data/chopp.png",
        preco: 15,
      },
      {
        name: "Petit Gateau",
        description: "Petit Gateau com uma bola de sorvete de creme.",
        imagem: "data/petit-gateau.png",
        preco: 25,
      },
      {
        name: "Mousse de Maracujá",
        description: "Mousse de maracujá feito com a fruta de verdade.",
        imagem: "data/mousse-maracuja.png",
        preco: 18,
      },
    ],
    [],
  );

  return (
    <article className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 my-4">
      {itens.length
        ? itens.map((i, index) => <ProductCard {...i} key={index} />)
        : null}
    </article>
  );
};

export default Products;
