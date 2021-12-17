import { useParams } from "react-router-dom";
import styled from "styled-components";

// Components
import Product from "../../components/Product/Product";

// Data
import productData from "../../productData";

// Styles
const Wrapper = styled.main`
  display: grid;
  grid-template-rows: 50px 1fr;
  padding: 2em 5%;
`;

const ProductDetail = () => {
  const { filter, productId } = useParams();
  const product = productData[filter].find((product) => product.id === productId);

  return (
    <Wrapper>
      <div className="breadcrumb">
        Home {">>"} Catalog {">>"} Hoodies
      </div>
      <Product img={product.img} name={product.name} text={product.description} price={product.price} />
    </Wrapper>
  );
};

export default ProductDetail;
