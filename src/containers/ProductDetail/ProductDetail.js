import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { filter, productId } = useParams();

  return (
    <div>
      Product {productId} from {filter}
    </div>
  );
};

export default ProductDetail;
