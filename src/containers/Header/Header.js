import { useState } from "react";
import styled from "styled-components";
import { IoBagOutline } from "react-icons/io5";

// Components
import Nav from "../../components/Nav/Nav";
import ShoppingCart from "../../components/ShoppingCart/ShoppingCart";

// Styles
const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2em 5%;
  position: relative;

  .shopping-cart-icon {
    font-size: 1.25rem;
    cursor: pointer;
  }
`;

const Header = () => {
  const [showCart, setShowCart] = useState(false);

  const handleClick = () => {
    setShowCart(!showCart);
  };

  return (
    <Wrapper>
      <div>Logo</div>
      <Nav />
      <div className="shopping-cart-icon" onClick={handleClick}>
        <IoBagOutline />
      </div>
      {showCart && <ShoppingCart handleClick={handleClick} />}
    </Wrapper>
  );
};

export default Header;
