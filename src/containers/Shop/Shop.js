import { Link, Outlet } from "react-router-dom";
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

  h3 {
    font-weight: 400;
    margin-bottom: 1em;
    cursor: pointer;
  }

  .price-sort {
    grid-column: 2 / 4;
    grid-row: 2 / 3;
  }

  .product-card-grid {
    grid-column: 2 / 4;
    grid-row: 3 / 4;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    place-items: center;
    gap: 24px;
  }
`;

const Shop = () => {
  return (
    <Wrapper>
      <div className="breadcrumb">Home {">>"} Catalog</div>
      <h2 className="products-title">Products</h2>
      <div className="product-category">
        <ul>
          <Link to="/shop/hoodies">
            <li>Hoodies</li>
          </Link>
          <Link to="/shop/cardigans&sweaters">
            <li>Cardigans {"&"} Sweaters</li>
          </Link>
          <Link to="/shop/jeans">
            <li>Jeans</li>
          </Link>
          <Link to="/shop/jackets&coats">
            <li>Jackets {"&"} Coats</li>
          </Link>
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
