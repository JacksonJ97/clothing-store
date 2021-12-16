import styled from "styled-components";
import { IoBagOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

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
    display: inline;
    font-size: 1.25rem;
    margin-bottom: 0.25em;
    border-bottom: 1px solid transparent;
  }

  .product-name:hover {
    border-bottom: 1px solid #202020;
  }

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .shopping-cart {
    font-size: 1.25rem;
  }
`;

const ProductCard = ({ img, name, price, id }) => {
  return (
    <Wrapper>
      <Link to={`/shop/${id}`}>
        <div className="image-container">
          <img src={img} alt={name} />
        </div>
      </Link>

      <div className="product-details">
        <Link to={`/shop/${id}`}>
          <p className="product-name">{name}</p>
        </Link>

        <div className="wrapper">
          <p>{price}</p>
          <Link to={`/shop/${id}`} className="shopping-cart">
            <IoBagOutline />
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductCard;
