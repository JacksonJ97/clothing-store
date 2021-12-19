import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import styled from "styled-components";

// Components
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Product from "../../components/Product/Product";

// Data
import productData from "../../productData";

// Styles
const Wrapper = styled.main`
  display: grid;
  grid-template-rows: 50px 50px 1fr;
  padding: 2em 5%;

  .back-button {
    font-size: 2.25rem;
    cursor: pointer;
  }
`;

const ProductDetail = ({ setCartItems }) => {
  const { filter, productId } = useParams();
  const product = productData[filter].find((product) => product.id === productId);
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div>
        <Breadcrumb />
      </div>
      <FaArrowLeft onClick={() => navigate(-1)} className="back-button" />
      <Product product={product} setCartItems={setCartItems} />
    </Wrapper>
  );
};

export default ProductDetail;
