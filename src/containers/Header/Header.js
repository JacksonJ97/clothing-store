import styled from "styled-components";
import Logo from "../../assets/images/hm-icon.png";
import { Link } from "react-router-dom";
import { IoBagOutline } from "react-icons/io5";

// Components
import Nav from "../../components/Nav/Nav";

// Styles
const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  position: relative;

  img {
    width: 64px;
    height: 64px;
  }

  .shopping-cart-icon {
    display: flex;
    align-items: center;
    font-size: 1.25rem;
    background: none;
    border: none;
    cursor: pointer;

    p {
      font-size: 0.875rem;
      margin-left: 0.25em;
    }
  }

  @media (max-width: 400px) {
    flex-direction: column;
    justify-content: flex-start;
    gap: 12px;

    img {
      display: none;
    }
  }
`;

const Header = ({ cartItems, setShowCart }) => {
  const totalQuantity = cartItems.reduce((total, item) => item.quantity + total, 0);

  return (
    <Wrapper>
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <Nav />
      <button className="shopping-cart-icon" onClick={() => setShowCart((prevState) => !prevState)}>
        <IoBagOutline /> <p>( {totalQuantity} )</p>
      </button>
    </Wrapper>
  );
};

export default Header;
