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
  width: 450px;
  padding: 2em;

  .shopping-cart-header {
    display: flex;
    justify-content: space-between;
  }

  svg {
    font-size: 1.25rem;
    cursor: pointer;
  }

  .cart-items-container {
    margin: 2em 0;
  }
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
            <div className="shopping-cart-header">
              <h1>
                Your <br />
                Shopping <br />
                Cart
              </h1>
              <CgClose onClick={() => setShowCart((prevState) => !prevState)} />
            </div>

            <div className="cart-items-container">
              {cartItems.map((item) => (
                <CartItem
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  img={item.img}
                  quantity={item.quantity}
                  total={item.total}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  key={item.id}
                />
              ))}
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
