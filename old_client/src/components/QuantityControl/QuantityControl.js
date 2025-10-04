import styled from "styled-components";
import { BiPlus, BiMinus } from "react-icons/bi";

// Styles
const Wrapper = styled.div`
  button {
    background: none;
    border: none;
    padding: 0.25em;
    cursor: pointer;
  }

  .quality-container {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      font-size: 1.25rem;
    }

    p {
      margin: 0 1em;
      padding: 0.25em 0.75em;
      border: 1px solid #202020;
      user-select: none;
    }
  }

  .remove-item-btn {
    display: block;
    font-size: 0.625rem;
    margin: 0 auto;
  }

  .remove-item-btn:hover {
    text-decoration: underline;
  }
`;

const QuantityControl = ({ id, quantity, cartItems, setCartItems }) => {
  const decrementQuantity = () => {
    const item = cartItems.find((element) => element.id === id);

    if (item.quantity === 1) {
      return;
    }

    setCartItems((prevState) => {
      let newCartItems = prevState.map((element) => {
        if (element.id === id) {
          return { ...element, quantity: element.quantity - 1, total: (element.quantity - 1) * element.price };
        }
        return element;
      });

      return newCartItems;
    });
  };

  const incrementQuantity = () => {
    setCartItems((prevState) => {
      let newCartItems = prevState.map((element) => {
        if (element.id === id) {
          return { ...element, quantity: element.quantity + 1, total: (element.quantity + 1) * element.price };
        }
        return element;
      });

      return newCartItems;
    });
  };

  const removeItem = () => {
    setCartItems((prevState) => {
      return prevState.filter((element) => element.id !== id);
    });
  };

  return (
    <Wrapper>
      <div className="quality-container">
        <button onClick={decrementQuantity}>
          <BiMinus />
        </button>
        <p>{quantity}</p>
        <button onClick={incrementQuantity}>
          <BiPlus />
        </button>
      </div>
      <button className="remove-item-btn" onClick={removeItem}>
        Remove Item
      </button>
    </Wrapper>
  );
};

export default QuantityControl;
