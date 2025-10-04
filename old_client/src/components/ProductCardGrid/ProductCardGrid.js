import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Components
import ProductCard from "../ProductCard/ProductCard";

// Data
import productData from "../../productData";

const ProductCardGrid = () => {
  const [data, setData] = useState([]);
  const [path, setPath] = useState("");

  const { filter } = useParams();

  useEffect(() => {
    if (!filter) {
      setData(productData.hoodies);
      setPath("hoodies");
    } else {
      setData(productData[filter]);
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
