import React, { useEffect, useState } from "react";
import AddNewProduct from "./AddNewProduct";
import ProductsTable from "./ProductsTable";

export default function Products() {
  const [allProducts, setAllProducts] = useState([]);

  const getAllProducts = () => {
    fetch("http://localhost:3004/products/")
      .then((res) => res.json())
      .then((product) => setAllProducts(product));
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div>
      <AddNewProduct getAllProducts={getAllProducts}/>
      <ProductsTable allProducts={allProducts} getAllProducts={getAllProducts}/>
    </div>
  );
}
