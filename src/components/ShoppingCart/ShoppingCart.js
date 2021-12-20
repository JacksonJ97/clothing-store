import { useRef } from "react";
import { useNavigate } from "react-router-dom";
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
  width: 450px;
  padding: 2em;
  overflow: auto;

  .cart-header {
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

  .checkout-btn {
    width: 100%;
    padding: 1em;
    margin: 2em 0;
    border-radius: 6px;
    border: 1px solid #202020;
    background-color: #ffffff;
    cursor: pointer;
  }

  .empty-cart-container {
    margin: 2em 0;

    button {
      width: 100%;
      padding: 1em;
      margin: 2em 0;
      border-radius: 6px;
      border: 1px solid #202020;
      background-color: #ffffff;
      cursor: pointer;
    }
  }
`;

const ShoppingCart = ({ cartItems, setCartItems, showCart, setShowCart }) => {
  const backgroundRef = useRef();
  const navigate = useNavigate();
  const subtotal = cartItems.reduce((total, item) => item.total + total, 0);

  const closeCart = (e) => {
    if (backgroundRef.current === e.target) {
      setShowCart(false);
    }
  };

  const openCheckoutMessage = () => {
    alert("Thank you for shopping!");
  };

  return (
    <>
      {showCart && (
        <Background ref={backgroundRef} onClick={closeCart}>
          <Cart>
            <div className="cart-header">
              <h1>
                Your <br />
                Shopping <br />
                Cart
              </h1>
              <CgClose onClick={() => setShowCart((prevState) => !prevState)} />
            </div>

            {cartItems.length ? (
              <>
                <div className="cart-items-container">
                  {cartItems.map((item) => (
                    <CartItem item={item} cartItems={cartItems} setCartItems={setCartItems} key={item.id} />
                  ))}
                </div>
                <h2>Subtotal: ${subtotal}</h2>
                <button className="checkout-btn" onClick={openCheckoutMessage}>
                  Checkout
                </button>
              </>
            ) : (
              <div className="empty-cart-container">
                <p>Your cart is empty.</p>
                <button
                  onClick={() => {
                    navigate("/shop");
                    setShowCart(false);
                  }}>
                  Browse Products
                </button>
              </div>
            )}
          </Cart>
        </Background>
      )}
    </>
  );
};

export default ShoppingCart;
