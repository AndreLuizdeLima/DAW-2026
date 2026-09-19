import { Injectable } from '@nestjs/common';
import { ProductDto } from './dto/product.dto';

const PRODUCTS: ProductDto[] = [
  {
    name: 'Burger',
    description: 'Pão brioche, hambúrguer 160g, queijo prato e molho da casa.',
    imagem: 'data/burger.png',
    preco: 22,
    typeProduct: 'lanches',
  },
  {
    name: 'Bacon Burger',
    description:
      'Pão brioche, hambúrguer 160g, bacon, queijo cheddar e molho da casa.',
    imagem: 'data/burger-bacon.png',
    preco: 25,
    typeProduct: 'lanches',
  },
  {
    name: 'Duplo Burguer',
    description:
      'Dois hambúrgueres de 160g cada, cheddar, bacon e cebola caramelizada.',
    imagem: 'data/burger-double.png',
    preco: 29,
    typeProduct: 'lanches',
  },
  {
    name: 'Batata Rústica',
    description: 'Porção de batata com alecrim, parmesão e maionese verde.',
    imagem: 'data/batata-rustica.png',
    preco: 18,
    typeProduct: 'porcoes',
  },
  {
    name: 'Batata Tradicional',
    description: 'Porção de batata e maionese verde.',
    imagem: 'data/batata-tradicional.png',
    preco: 15,
    typeProduct: 'porcoes',
  },
  {
    name: 'Água Sem Gás',
    description: 'Garrafa descartável de água sem gás com 500 ml.',
    imagem: 'data/agua.png',
    preco: 8,
    typeProduct: 'bebidas',
  },
  {
    name: 'Refrigerante 300 ml',
    description: 'Copo de refrigerante de 300 ml.',
    imagem: 'data/refri.png',
    preco: 10,
    typeProduct: 'bebidas',
  },
  {
    name: 'Chopp 300 ml',
    description: 'Caneca de 300 ml do nosso chopp pilsen geladíssimo.',
    imagem: 'data/chopp.png',
    preco: 15,
    typeProduct: 'bebidas',
  },
  {
    name: 'Petit Gateau',
    description: 'Petit Gateau com uma bola de sorvete de creme.',
    imagem: 'data/petit-gateau.png',
    preco: 25,
    typeProduct: 'sobremesas',
  },
  {
    name: 'Mousse de Maracujá',
    description: 'Mousse de maracujá feito com a fruta de verdade.',
    imagem: 'data/mousse-maracuja.png',
    preco: 18,
    typeProduct: 'sobremesas',
  },
];

@Injectable()
export class ProductsService {
  getAll(): ProductDto[] {
    return PRODUCTS;
  }
}
