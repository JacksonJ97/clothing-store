import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import desktopBackground from "../../assets/images/homepage-desktop-bg.jpg";
import mobileBackground from "../../assets/images/homepage-mobile-bg.jpg";

// Styles
const Wrapper = styled.main`
  display: flex;
  align-items: center;
  font-size: clamp(1.75rem, 3vw, 3rem);
  padding: 0 5%;
  background-image: url(${mobileBackground});
  background-size: cover;
  background-position: center right 40%;

  button {
    display: block;
    margin: 2em 0;
    padding: 1em 2em;
    font-size: clamp(0.875rem, 1.25vw, 1rem);
    border: 1px solid #202020;
    border-radius: 6px;
    cursor: pointer;
  }

  @media (min-width: 700px) {
    background-image: url(${desktopBackground});
    background-size: cover;
    background-position: top 20% center;
  }
`;

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div>
        <h1>
          Fall <br /> Collection <br /> 2022
        </h1>
        <button onClick={() => navigate("/shop")}>Shop Now</button>
      </div>
    </Wrapper>
  );
};

export default Homepage;
