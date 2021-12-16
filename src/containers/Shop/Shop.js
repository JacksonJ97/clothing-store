import styled from "styled-components";

// Styles
const Wrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 50px 50px 1fr;
  padding: 0 5%;

  .breadcrumb {
    grid-column: 1 / 4;
    grid-row: 1 / 2;
  }

  .product-filter {
    grid-column: 1 / 2;
    grid-row: 2 / 4;
  }

  .price-sort {
    grid-column: 2 / 4;
    grid-row: 2 / 3;
  }

  .product-card-grid {
    grid-column: 2 / 4;
    grid-row: 3 / 4;
  }
`;

const Shop = () => {
  return (
    <Wrapper>
      <div className="breadcrumb">Breadcrumb</div>
      <div className="product-filter">Product Filter</div>
      <div className="price-sort">Price Sort</div>
      <div className="product-card-grid">Product Card Grid</div>
    </Wrapper>
  );
};

export default Shop;
