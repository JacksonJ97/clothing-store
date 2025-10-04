import styled from "styled-components";

// Components
import QuantityControl from "../QuantityControl/QuantityControl";

// Styles
const Wrapper = styled.div`
  display: flex;
  column-gap: 12px;
  margin: 2em 0;

  img {
    height: 100px;
    width: 100px;
  }

  .cart-details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 12px;
    width: 100%;
    max-width: 257px;

    h3 {
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

const CartItem = ({ item, cartItems, setCartItems }) => {
  return (
    <Wrapper>
      <img src={item.img} alt={item.name} />
      <div className="cart-details">
        <div>
          <h3>{item.name}</h3>
          <p>${item.price}</p>
        </div>
        <p className="product-total">Total: ${item.total}</p>
        <div className="quantity-container">
          <QuantityControl id={item.id} quantity={item.quantity} cartItems={cartItems} setCartItems={setCartItems} />
        </div>
      </div>
    </Wrapper>
  );
};

export default CartItem;
