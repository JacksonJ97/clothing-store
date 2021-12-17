import { useParams } from "react-router-dom";
import styled from "styled-components";
import hoodieImg from "../../assets/images/hoodie.png";

// Components
import Product from "../../components/Product/Product";

// Styles
const Wrapper = styled.main`
  display: grid;
  grid-template-rows: 50px 1fr;
  padding: 2em 5%;
`;

const ProductDetail = () => {
  const { filter, productId } = useParams();

  return (
    <Wrapper>
      <div className="breadcrumb">
        Home {">>"} Catalog {">>"} Hoodies
      </div>
      <Product img={hoodieImg} name="Product Name" text="Text" price="Price" />
      {/* Product {productId} from {filter} */}
    </Wrapper>
  );
};

export default ProductDetail;
