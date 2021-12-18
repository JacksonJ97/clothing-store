import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

// Components
import Header from "./containers/Header/Header";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Home from "./containers/Home/Home";
import Shop from "./containers/Shop/Shop";
import ProductDetail from "./containers/ProductDetail/ProductDetail";
import ProductCardGrid from "./components/ProductCardGrid/ProductCardGrid";
import Contact from "./containers/Contact/Contact";

// Global Styles
import GlobalStyle from "./theme/GlobalStyle";

// Styles
const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 78px 1fr;
  min-height: 100vh;
`;

const App = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <Wrapper>
      <GlobalStyle />
      <Header setShowCart={setShowCart} />
      <ShoppingCart showCart={showCart} setShowCart={setShowCart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />}>
          <Route index element={<ProductCardGrid />} />
          <Route path=":filter" element={<ProductCardGrid />} />
        </Route>
        <Route path="/shop/:filter/:productId" element={<ProductDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Wrapper>
  );
};

export default App;
