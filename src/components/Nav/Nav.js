import { NavLink } from "react-router-dom";
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
  const activeStyle = { borderBottom: "1px solid #202020" };
  return (
    <Wrapper>
      <ul>
        <li>
          <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to="/shop">
            Catalog
          </NavLink>
        </li>
        <li>
          <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Nav;
