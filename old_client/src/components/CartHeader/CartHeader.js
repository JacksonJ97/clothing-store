import styled from "styled-components";
import { CgClose } from "react-icons/cg";

// Styles
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  svg {
    font-size: 1.25rem;
    cursor: pointer;
  }
`;

const CartHeader = ({ setShowCart }) => {
  return (
    <Wrapper>
      <h1>
        Your <br />
        Shopping <br />
        Cart
      </h1>
      <CgClose onClick={() => setShowCart((prevState) => !prevState)} />
    </Wrapper>
  );
};

export default CartHeader;
