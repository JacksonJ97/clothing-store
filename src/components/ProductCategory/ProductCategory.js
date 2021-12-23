import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

// Styles
const List = styled.ul`
  a {
    display: block;
    color: #888881;
  }

  a:hover {
    color: #202020;
  }

  li {
    margin-bottom: 1em;
  }
`;

const ProductCategory = () => {
  const activeStyle = { color: "#202020" };
  const { pathname } = useLocation();

  return (
    <List>
      <li>
        <NavLink
          style={({ isActive }) => {
            if (pathname === "/catalog") {
              isActive = true;
            }
            return isActive ? activeStyle : undefined;
          }}
          to="/catalog/hoodies">
          Hoodies
        </NavLink>
      </li>
      <li>
        <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to="/catalog/cardigans&sweaters">
          Cardigans {"&"} Sweaters
        </NavLink>
      </li>
      <li>
        <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to="/catalog/jeans&pants">
          Jeans {"&"} Pants
        </NavLink>
      </li>
      <li>
        <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to="/catalog/jackets&coats">
          Jackets {"&"} Coats
        </NavLink>
      </li>
    </List>
  );
};

export default ProductCategory;
