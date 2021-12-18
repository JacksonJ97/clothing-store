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
    font-size: 1.25rem;
    cursor: pointer;
  }
`;

const Header = ({ setShowCart }) => {
  return (
    <Wrapper>
      <div>Logo</div>
      <Nav />
      <div className="shopping-cart-icon" onClick={() => setShowCart((prevState) => !prevState)}>
        <IoBagOutline />
      </div>
    </Wrapper>
  );
};

export default Header;
