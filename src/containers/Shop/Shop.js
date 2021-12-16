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

  .product-filter {
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
      <div className="product-filter">
        <Link to="/shop/hoodies">
          <h3>Hoodies</h3>
        </Link>
        <Link to="/shop/cardigans&sweaters">
          <h3>Cardigans {"&"} Sweaters</h3>
        </Link>
        <Link to="/shop/jeans">
          <h3>Jeans</h3>
        </Link>
        <Link to="/shop/jackets&coats">
          <h3>Jackets {"&"} Coats</h3>
        </Link>
      </div>
      <div className="price-sort">Price Sort Menu</div>
      <div className="product-card-grid">
        <Outlet />
      </div>
    </Wrapper>
  );
};

export default Shop;
