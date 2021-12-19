import styled from "styled-components";
import { IoBagOutline } from "react-icons/io5";

// Components
import Nav from "../../components/Nav/Nav";

// Styles
const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2em 5%;
  position: relative;

  .shopping-cart-icon {
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    background: none;
    border: none;
    cursor: pointer;
    p {
      font-size: 0.875rem;
      margin-left: 0.25em;
    }
  }
`;

const Header = ({ setShowCart }) => {
  return (
    <Wrapper>
      <div>Logo</div>
      <Nav />
      <button className="shopping-cart-icon" onClick={() => setShowCart((prevState) => !prevState)}>
        <IoBagOutline /> <p>( 0 )</p>
      </button>
    </Wrapper>
  );
};

export default Header;
