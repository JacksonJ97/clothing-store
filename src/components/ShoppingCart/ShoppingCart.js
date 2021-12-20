import styled from "styled-components";
import { useRef } from "react";

// Components
import CartHeader from "../CartHeader/CartHeader";
import CartMain from "../CartMain/CartMain";
import EmptyCartMain from "../EmptyCartMain/EmptyCartMain";

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
  width: 450px;
  padding: 2em;
  overflow: auto;
`;

const ShoppingCart = ({ cartItems, setCartItems, showCart, setShowCart }) => {
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
            <CartHeader setShowCart={setShowCart} />

            {cartItems.length ? (
              <CartMain cartItems={cartItems} setCartItems={setCartItems} />
            ) : (
              <EmptyCartMain setShowCart={setShowCart} />
            )}
          </Cart>
        </Background>
      )}
    </>
  );
};

export default ShoppingCart;
