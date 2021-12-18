import styled from "styled-components";

// Components
import AddToCart from "../AddToCart/AddToCart";

// Styles
const Wrapper = styled.div`
  text-align: center;

  img {
    width: 100%;
    max-width: 500px;
    height: auto;
  }

  .details {
    margin-top: 2em;
  }

  @media (min-width: 1060px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 70%;
    max-width: 960px;
    justify-self: center;
    text-align: left;

    img {
      width: 60%;
      max-width: 500px;
    }

    .details {
      width: 40%;
      align-self: flex-start;
      margin: 10em 0 0;
    }
  }
`;

const Product = ({ name, price, img, text, setCartItemCount }) => {
  return (
    <Wrapper>
      <img src={img} alt={name} />
      <div className="details">
        <h1>{name}</h1>
        <p>{price}</p>
        <p>{text}</p>
        <AddToCart setCartItemCount={setCartItemCount} />
      </div>
    </Wrapper>
  );
};

export default Product;
