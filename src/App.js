import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

// Components
import Header from "./containers/Header/Header";
import Home from "./containers/Home/Home";
import Shop from "./containers/Shop/Shop";
import Contact from "./containers/Contact/Contact";
import Footer from "./containers/Footer/Footer";

// Global Styles
import GlobalStyle from "./theme/GlobalStyle";

// Styles
const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 10% 1fr 10%;
  min-height: 100vh;
`;

const App = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Wrapper>
  );
};

export default App;
