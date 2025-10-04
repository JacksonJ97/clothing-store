import styled from "styled-components";

// Components
import CartItem from "../CartItem/CartItem";

// Styles
const Wrapper = styled.div`
  .checkout-btn {
    font-size: 1rem;
    width: 100%;
    padding: 0.75em;
    margin: 1.5em 0;
    border-radius: 6px;
    border: 1px solid #202020;
    background-color: #ffffff;
    cursor: pointer;
  }

  .checkout-btn:hover {
    background-color: #efefe7;
  }
`;

const CartMain = ({ cartItems, setCartItems }) => {
  const subtotal = cartItems.reduce((total, item) => item.total + total, 0);

  const openCheckoutMessage = () => {
    alert("Thank you for shopping!");
  };

  return (
    <Wrapper>
      {cartItems.map((item) => (
        <CartItem item={item} cartItems={cartItems} setCartItems={setCartItems} key={item.id} />
      ))}
      <h2>Subtotal: ${subtotal}</h2>
      <button className="checkout-btn" onClick={openCheckoutMessage}>
        Checkout
      </button>
    </Wrapper>
  );
};

export default CartMain;
