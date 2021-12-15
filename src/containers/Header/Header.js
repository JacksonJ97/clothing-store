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

  .shopping-cart {
    font-size: 1.25rem;
    cursor: pointer;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <div>Logo</div>
      <Nav />
      <div className="shopping-cart">
        <IoBagOutline />
      </div>
    </Wrapper>
  );
};

export default Header;
