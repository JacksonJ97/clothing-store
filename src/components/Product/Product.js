import styled from "styled-components";

// Styles
const Wrapper = styled.div`
  text-align: center;

  img {
    max-width: 100%;
    height: auto;
  }

  .details {
    margin-top: 2em;
  }

  .quantity {
    display: flex;
    justify-content: center;
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
      max-width: 60%;
    }

    .details {
      width: 40%;
      align-self: flex-start;
      margin: 10em 0 0;
    }

    .quantity {
      justify-content: flex-start;
    }
  }
`;

const Product = ({ name, price, img, text }) => {
  return (
    <Wrapper>
      <img src={img} alt={name} />
      <div className="details">
        <h1>{name}</h1>
        <p>{price}</p>
        <p>{text}</p>
        <div className="quantity">
          <p>Quantity</p>
          <button>Add to cart</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Product;
