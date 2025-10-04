import styled from "styled-components";
import img from "../../assets/images/about-img.jpg";

// Styles
const Wrapper = styled.main`
  background-image: url(${img});
  background-size: cover;
  background-position: 35% 25%;
  padding: 0 5% 2em 5%;

  .details {
    text-align: center;
    background-color: rgba(32, 32, 32, 0.6);
    border-radius: 6px;
    max-width: 700px;
    margin: 4em auto 0 auto;
    padding: 2em;
  }

  h1 {
    color: #efefe7;
    margin-bottom: 1em;
  }

  p {
    color: #efefe7;
    max-width: 560px;
    margin: 0 auto 32px auto;
    line-height: 1.5;
  }

  @media (min-width: 1500px) {
    .details {
      text-align: left;
      background-color: transparent;
      max-width: 740px;
      margin: 4em 4em 0 auto;
    }

    h1 {
      font-size: 3rem;
      margin: 0 auto 32px auto;
      color: #202020;
      max-width: 560px;
    }

    p {
      color: #202020;
    }
  }
`;

const About = () => {
  return (
    <Wrapper>
      <div className="details">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis libero sed leo posuere gravida. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam laoreet quis risus at auctor. Donec sed mollis massa.
          Vivamus lobortis lacus elit, sed pretium sem laoreet luctus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis libero sed leo posuere gravida. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam laoreet quis risus at auctor. Donec sed mollis massa.
          Vivamus lobortis lacus elit, sed pretium sem laoreet luctus.
        </p>
      </div>
    </Wrapper>
  );
};

export default About;
