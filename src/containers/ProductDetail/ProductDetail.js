import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams();

  return <div>Product {productId}</div>;
};

export default ProductDetail;
