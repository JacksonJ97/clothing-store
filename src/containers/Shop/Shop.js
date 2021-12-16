import { useState } from "react";
import styled from "styled-components";

// Components
import ProductCard from "../../components/ProductCard/ProductCard";

// Data
import productData from "../../productData";

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
  const [clickedProductFilter, setClickedProductFilter] = useState(productData.hoodies);

  const handleClick = (e) => {
    setClickedProductFilter(productData[e.target.id]);
  };
  return (
    <Wrapper>
      <div className="breadcrumb">Home {">>"} Catalog</div>
      <h2 className="products-title">Products</h2>
      <div className="product-filter">
        <h3 id="hoodies" onClick={handleClick}>
          Hoodies
        </h3>
        <h3 id="cardigans" onClick={handleClick}>
          Cardigans {"&"} Sweaters
        </h3>
        <h3 id="jeans" onClick={handleClick}>
          Jeans
        </h3>
        <h3 id="jackets" onClick={handleClick}>
          Jackets {"&"} Coats
        </h3>
      </div>
      <div className="price-sort">Price Sort Menu</div>
      <div className="product-card-grid">
        {clickedProductFilter.map((item) => (
          <ProductCard id={item.id} name={item.name} price={item.price} img={item.img} key={item.id} />
        ))}
      </div>
    </Wrapper>
  );
};

export default Shop;
