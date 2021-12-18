import { useRef } from "react";
import styled from "styled-components";
import { CgClose } from "react-icons/cg";

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

const ShoppingCart = ({ showCart, setShowCart }) => {
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
            Shopping Cart
            <div className="close-icon">
              <CgClose onClick={() => setShowCart((prevState) => !prevState)} />
            </div>
            <p>Subtotal: $20</p>
            <button>Checkout</button>
          </Cart>
        </Background>
      )}
    </>
  );
};

export default ShoppingCart;
