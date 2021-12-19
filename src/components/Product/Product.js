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

const Product = ({ product, setCartItems }) => {
  const item = { id: product.id, name: product.name, price: product.price, img: product.img, quantity: 1 };

  return (
    <Wrapper>
      <img src={product.img} alt={product.name} />
      <div className="details">
        <h1>{product.name}</h1>
        <p>{product.price}</p>
        <p>{product.description}</p>
        <AddToCart item={item} setCartItems={setCartItems} />
      </div>
    </Wrapper>
  );
};

export default Product;
