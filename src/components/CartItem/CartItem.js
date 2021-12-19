import styled from "styled-components";

// Styles
const Wrapper = styled.div`
  display: flex;
  column-gap: 12px;
  margin-bottom: 2em;

  img {
    height: 100px;
    width: 100px;
  }

  .cart-details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    width: 100%;

    h2 {
      font-size: 1rem;
      margin-bottom: 0.25em;
    }

    .product-total {
      justify-self: end;
    }

    .quantity-container {
      grid-column: 1 / 3;
      justify-self: center;
    }
  }
`;

const CartItem = ({ name, img, price, quantity }) => {
  return (
    <Wrapper>
      <img src={img} alt={name} />
      <div className="cart-details">
        <div>
          <h2>{name}</h2>
          <p>{price}</p>
        </div>
        <p className="product-total">Total</p>
        <div className="quantity-container">
          <div>Quantity</div>
          <div>Remove Item</div>
        </div>
      </div>
    </Wrapper>
  );
};

export default CartItem;
