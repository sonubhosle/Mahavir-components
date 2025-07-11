import React from "react";
import Product_Card from "../Products/Product_Card";
import "../../Styles/Product.css";
import { products } from "../Data";

interface ProductImage {
  img: string;
  color: string;
}

interface ProductData {
  id: string;
  name: string;
  price: string;
  intrest: string;
  images: {
    [key: string]: ProductImage[];
  };
}

const Products: React.FC = () => {
  return (
    <div className="product_grid">
      {products.map((prod: ProductData, index: number) => (
        <Product_Card data={prod} key={prod.id || index} />
      ))}
    </div>
  );
};

export default Products;
