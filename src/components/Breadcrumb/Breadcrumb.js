import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

// Helpers
import { formatString } from "../../helpers/helpers";

// Styles
const Wrapper = styled.div`
  a {
    color: #8a8a8a;
  }

  a:hover {
    color: #202020;
    border-bottom: 1px solid #202020;
  }
`;

const Breadcrumb = () => {
  const { pathname } = useLocation();
  const pathNameArray = pathname.split("/");
  const lastPath = pathNameArray[2];

  return (
    <Wrapper>
      <Link to="/">Home</Link> {">>"} <Link to="/shop">Catalog</Link> {lastPath ? `>> ${formatString(lastPath)}` : `>> Hoodies`}
    </Wrapper>
  );
};

export default Breadcrumb;
