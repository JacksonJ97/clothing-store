import styled from "styled-components";

// Components
import Nav from "../../components/Nav/Nav";

// Styles
const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <Wrapper>
      <h1>Header</h1>
      <Nav />
    </Wrapper>
  );
};

export default Header;
