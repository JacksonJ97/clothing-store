import styled from "styled-components";
import { IoBagOutline } from "react-icons/io5";
// import hoodieImg from "../../assets/images/hoodie.png";

// Styles
const Wrapper = styled.div`
  max-width: 350px;
  border-radius: 6px;
  box-shadow: 2px 2px 18px 0px rgba(0, 0, 0, 0.1);

  .image-container {
    background-color: #f1f1f1;
    border-radius: 6px 6px 0 0;
  }

  img {
    display: block;
    width: 70%;
    padding: 1.25em 0;
    margin: 0 auto;
  }

  .product-details {
    padding: 1em;
  }

  .product-name {
    font-size: 1.25rem;
    margin-bottom: 0.25em;
  }

  .wrapper {
    display: flex;
    justify-content: space-between;
  }

  .shopping-cart {
    font-size: 1.25rem;
    cursor: pointer;
  }
`;

const ProductCard = ({ img, name, price }) => {
  return (
    <Wrapper>
      <div className="image-container">
        <img src={img} alt={name} />
      </div>

      <div className="product-details">
        <p className="product-name">{name}</p>

        <div className="wrapper">
          <p>{price}</p>
          <div className="shopping-cart">
            <IoBagOutline />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductCard;
