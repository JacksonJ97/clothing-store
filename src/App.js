import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

// Components
import Header from "./containers/Header/Header";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Home from "./containers/Home/Home";
import Catalog from "./containers/Catalog/Catalog";
import ProductDetail from "./containers/ProductDetail/ProductDetail";
import ProductCardGrid from "./components/ProductCardGrid/ProductCardGrid";
import About from "./containers/About/About";

// Global Styles
import GlobalStyle from "./theme/GlobalStyle";

// Styles
const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 78px 1fr;
  min-height: 100vh;
`;

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  return (
    <Wrapper>
      <GlobalStyle />
      <Header cartItems={cartItems} setShowCart={setShowCart} />
      <ShoppingCart cartItems={cartItems} setCartItems={setCartItems} showCart={showCart} setShowCart={setShowCart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />}>
          <Route index element={<ProductCardGrid />} />
          <Route path=":filter" element={<ProductCardGrid />} />
        </Route>
        <Route path="/catalog/:filter/:productId" element={<ProductDetail cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Wrapper>
  );
};

export default App;
