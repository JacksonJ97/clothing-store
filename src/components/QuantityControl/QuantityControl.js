import styled from "styled-components";

// Styles
const Wrapper = styled.div`
  button {
    padding: 0.25em;
  }

  .quality-container {
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      margin: 0 1em;
    }
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
          return { ...element, quantity: element.quantity - 1 };
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
          return { ...element, quantity: element.quantity + 1 };
        }
        return element;
      });

      return newCartItems;
    });
  };

  return (
    <Wrapper>
      <div className="quality-container">
        <button onClick={decrementQuantity}>-</button>
        <p>{quantity}</p>
        <button onClick={incrementQuantity}>+</button>
      </div>
      <div>Remove Item</div>
    </Wrapper>
  );
};

export default QuantityControl;
