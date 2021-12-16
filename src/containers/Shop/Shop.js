import styled from "styled-components";

// Styles
const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 20% repeat(2, 1fr);
  grid-template-rows: 50px 50px 1fr;
  padding: 0 5%;

  .breadcrumb {
    grid-column: 1 / 4;
    grid-row: 1 / 2;
  }

  .product-filter {
    grid-column: 1 / 2;
    grid-row: 2 / 4;

    div {
      margin-bottom: 2em;
    }
  }

  .price-sort {
    grid-column: 2 / 4;
    grid-row: 2 / 3;
  }

  .product-card-grid {
    grid-column: 2 / 4;
    grid-row: 3 / 4;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;

const Shop = () => {
  return (
    <Wrapper>
      <div className="breadcrumb">Home {">>"} Catalog</div>
      <div className="product-filter">
        <div>Hoodies</div>
        <div>Jackets {"&"} Coats</div>
        <div>Pants</div>
        <div>Jeans</div>
        <div>Cardigans {"&"} Sweaters</div>
      </div>
      <div className="price-sort">Price Sort Menu</div>
      <div className="product-card-grid">
        <div>Product Card</div>
        <div>Product Card</div>
        <div>Product Card</div>
        <div>Product Card</div>
        <div>Product Card</div>
        <div>Product Card</div>
      </div>
    </Wrapper>
  );
};

export default Shop;
