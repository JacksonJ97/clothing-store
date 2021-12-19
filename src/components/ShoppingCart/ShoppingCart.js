import { useRef } from "react";
import styled from "styled-components";
import { CgClose } from "react-icons/cg";

// Components
import CartItem from "../CartItem/CartItem";

// Styles
const Background = styled.div`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

const Cart = styled.div`
  background-color: white;
  border: 1px solid #202020;
  width: 300px;

  .close-icon {
    font-size: 1.25rem;
  }

  svg {
    cursor: pointer;
  }
`;

const ShoppingCart = ({ cartItems, showCart, setShowCart }) => {
  const backgroundRef = useRef();

  const closeCart = (e) => {
    if (backgroundRef.current === e.target) {
      setShowCart(false);
    }
  };

  return (
    <>
      {showCart && (
        <Background ref={backgroundRef} onClick={closeCart}>
          <Cart>
            <h1>Your Shopping Cart</h1>
            <div className="close-icon">
              <CgClose onClick={() => setShowCart((prevState) => !prevState)} />
            </div>
            {cartItems.map((item) => (
              <CartItem name={item.name} price={item.price} img={item.img} key={item.id} />
            ))}
            <p>Subtotal: $20</p>
            <button>Checkout</button>
          </Cart>
        </Background>
      )}
    </>
  );
};

export default ShoppingCart;
