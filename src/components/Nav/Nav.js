import { Link } from "react-router-dom";
import styled from "styled-components";

// Styles
const Wrapper = styled.nav`
  min-width: 200px;
  width: 30%;

  ul {
    display: flex;
    justify-content: space-between;
  }
`;

const Nav = () => {
  return (
    <Wrapper>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Catalog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Nav;
