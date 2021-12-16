import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Components
import ProductCard from "../ProductCard/ProductCard";

// Data
import productData from "../../productData";

const ProductCardGrid = () => {
  const [data, setData] = useState(productData.hoodies);
  const { filter } = useParams();

  useEffect(() => {
    if (!filter) {
      setData(productData.hoodies);
    }

    if (filter === "hoodies") {
      setData(productData.hoodies);
    }

    if (filter === "cardigans&sweaters") {
      setData(productData.cardigans);
    }

    if (filter === "jeans") {
      setData(productData.jeans);
    }

    if (filter === "jackets&coats") {
      setData(productData.jackets);
    }
  }, [filter]);

  return (
    <>
      {data.map((item) => (
        <ProductCard path={filter} id={item.id} name={item.name} price={item.price} img={item.img} key={item.id} />
      ))}
    </>
  );
};

export default ProductCardGrid;
