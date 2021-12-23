import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import desktopBackground from "../../assets/images/homepage-desktop-bg.jpg";
import mobileBackground from "../../assets/images/homepage-mobile-bg.jpg";

// Styles
const Wrapper = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  font-size: clamp(1.25rem, 5vw, 1.75rem);
  padding: 0 5%;
  background-image: url(${mobileBackground});
  background-size: cover;
  background-position: center right 40%;

  h1 {
    color: #efefe7;
  }

  .details {
    text-align: center;
    background-color: rgba(32, 32, 32, 0.6);
    border-radius: 6px;
    margin-top: 4em;
    padding: 2em;
  }

  button {
    display: block;
    margin: 2em auto 0 auto;
    padding: 1em 2em;
    font-size: clamp(0.875rem, 1.25vw, 1rem);
    background-color: #efefe7;
    border: 1px solid #202020;
    border-radius: 6px;
    cursor: pointer;
  }

  button:hover {
    background-color: #ffffff;
  }

  @media (min-width: 700px) {
    align-items: center;
    justify-content: flex-start;
    font-size: clamp(1.75rem, 3vw, 3rem);
    background-image: url(${desktopBackground});
    background-size: cover;
    background-position: top 20% center;

    h1 {
      color: #202020;
    }

    .details {
      text-align: left;
      background-color: transparent;
      margin: 0;
      padding: 0;
    }

    button {
      margin: 2em 0;
    }
  }
`;

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div className="details">
        <h1>
          Fall <br /> Collection <br /> 2022
        </h1>
        <button onClick={() => navigate("/catalog")}>Shop Now</button>
      </div>
    </Wrapper>
  );
};

export default Homepage;
