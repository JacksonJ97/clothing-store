import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

// Styles
const List = styled.ul`
  a {
    color: #8a8a8a;
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
            if (pathname === "/shop") {
              isActive = true;
            }
            return isActive ? activeStyle : undefined;
          }}
          to="/shop/hoodies">
          Hoodies
        </NavLink>
      </li>
      <li>
        <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to="/shop/cardigans&sweaters">
          Cardigans {"&"} Sweaters
        </NavLink>
      </li>
      <li>
        <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to="/shop/jeans">
          Jeans
        </NavLink>
      </li>
      <li>
        <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} to="/shop/jackets&coats">
          Jackets {"&"} Coats
        </NavLink>
      </li>
    </List>
  );
};

export default ProductCategory;
