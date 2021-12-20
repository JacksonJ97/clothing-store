import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// Styles
const Wrapper = styled.div`
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
`;

const EmptyCartMain = ({ setShowCart }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/shop");
    setShowCart(false);
  };

  return (
    <Wrapper>
      <p>Your cart is empty.</p>
      <button onClick={handleClick}>Browse Products</button>
    </Wrapper>
  );
};

export default EmptyCartMain;
