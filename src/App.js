import { Routes, Route } from "react-router-dom";
// Components
import Header from "./containers/Header/Header";
import Homepage from "./containers/Homepage/Hompage";
import Shop from "./containers/Shop/Shop";
import Contact from "./containers/Contact/Contact";
import Footer from "./containers/Footer/Footer";

// Global Styles
import GlobalStyle from "./theme/GlobalStyle";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
