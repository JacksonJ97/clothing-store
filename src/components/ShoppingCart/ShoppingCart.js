import styled from "styled-components";
import { CgClose } from "react-icons/cg";

// Styles
const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  background-color: white;
  border: 1px solid #202020;
  height: 100vh;
  width: 200px;

  .close-icon {
    font-size: 1.25rem;
  }

  svg {
    cursor: pointer;
  }
`;

const ShoppingCart = ({ handleClick }) => {
  return (
    <Wrapper>
      Shopping Cart
      <div className="close-icon">
        <CgClose onClick={handleClick} />
      </div>
      <p>Subtotal: $20</p>
      <button>Checkout</button>
    </Wrapper>
  );
};

export default ShoppingCart;
