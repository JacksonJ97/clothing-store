import { Outlet, NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

// Styles
const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 15% repeat(2, 1fr);
  grid-template-rows: 50px 50px 1fr;
  padding: 2em 5%;

  .breadcrumb {
    grid-column: 1 / 4;
  }

  .products-title {
    grid-row: 2 / 3;
  }

  .product-category {
    grid-row: 3 / 4;
  }

  .price-sort {
    grid-column: 2 / 4;
    grid-row: 2 / 3;
  }

  .product-card-grid {
    grid-column: 2 / 4;
    grid-row: 3 / 4;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    place-items: center;
    gap: 24px;
  }
`;

const Shop = () => {
  const activeStyle = { borderBottom: "1px solid #202020" };
  const { pathname } = useLocation();

  return (
    <Wrapper>
      <div className="breadcrumb">Home {">>"} Catalog</div>
      <h2 className="products-title">Products</h2>
      <div className="product-category">
        <ul>
          <li>
            <NavLink
              style={({ isActive }) => {
                if (pathname === "/shop") {
                  isActive = true;
                }
                return isActive ? activeStyle : undefined;
              }}
              to="/shop/hoodies"
              id="hoodie-link">
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
        </ul>
      </div>
      <div className="price-sort">Price Sort Menu</div>
      <div className="product-card-grid">
        <Outlet />
      </div>
    </Wrapper>
  );
};

export default Shop;
