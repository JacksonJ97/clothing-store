import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Components
import ProductCard from "../ProductCard/ProductCard";

// Data
import productData from "../../productData";

const ProductCardGrid = () => {
  const [data, setData] = useState(productData.hoodies);
  const [path, setPath] = useState("");

  const { filter } = useParams();

  useEffect(() => {
    if (!filter) {
      setData(productData.hoodies);
      setPath("hoodies");
    }

    if (filter === "hoodies") {
      setData(productData.hoodies);
      setPath(filter);
    }

    if (filter === "cardigans&sweaters") {
      setData(productData.cardigans);
      setPath(filter);
    }

    if (filter === "jeans") {
      setData(productData.jeans);
      setPath(filter);
    }

    if (filter === "jackets&coats") {
      setData(productData.jackets);
      setPath(filter);
    }
  }, [filter]);

  return (
    <>
      {data.map((item) => (
        <ProductCard path={path} id={item.id} name={item.name} price={item.price} img={item.img} key={item.id} />
      ))}
    </>
  );
};

export default ProductCardGrid;
