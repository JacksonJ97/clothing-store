import { Outlet } from "react-router-dom";
import styled from "styled-components";

// Components
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import ProductCategory from "../../components/ProductCategory/ProductCategory";

// Styles
const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 15% repeat(2, 1fr);
  grid-template-rows: 50px 50px 1fr;
  column-gap: 24px;
  padding: 0 5% 2em 5%;

  .breadcrumb {
    grid-column: 1 / 4;
    align-self: center;
  }

  .products-title {
    grid-row: 2 / 3;
  }

  .product-category {
    grid-row: 3 / 4;
  }

  .product-card-grid {
    grid-column: 2 / 4;
    grid-row: 2 / 4;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    place-items: center;
    gap: 24px;
  }

  @media (max-width: 625px) {
    grid-template-columns: 1fr;
    grid-template-rows: 50px 50px 150px 1fr;

    .breadcrumb {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }

    .products-title {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
      text-align: center;
      align-self: center;
    }

    .product-category {
      grid-column: 1 / 2;
      grid-row: 3 / 4;
      text-align: center;
      align-self: center;
    }

    .product-card-grid {
      grid-column: 1 / 2;
      grid-row: 4 / 5;
      grid-template-columns: repeat(auto-fit, minmax(265px, 1fr));
    }
  }
`;

const Shop = () => {
  return (
    <Wrapper>
      <div className="breadcrumb">
        <Breadcrumb className="breadcrumb" />
      </div>
      <h2 className="products-title">Products</h2>
      <div className="product-category">
        <ProductCategory />
      </div>
      <div className="product-card-grid">
        <Outlet />
      </div>
    </Wrapper>
  );
};

export default Shop;
