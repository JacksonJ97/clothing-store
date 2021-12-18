import { Link, useLocation } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import styled from "styled-components";

// Helpers
import { formatString } from "../../helpers/helpers";

// Styles
const Wrapper = styled.div`
  display: flex;
  align-items: center;

  a {
    color: #8a8a8a;
  }

  a:hover {
    color: #202020;
    border-bottom: 1px solid #202020;
  }

  svg {
    font-size: 1.25rem;
  }
`;

const Breadcrumb = () => {
  const { pathname } = useLocation();
  const pathNameArray = pathname.split("/");
  const lastPath = pathNameArray[2];

  return (
    <Wrapper>
      <Link to="/">Home</Link>
      <RiArrowRightSLine />
      <Link to="/shop">Catalog</Link>
      {lastPath ? (
        <>
          <RiArrowRightSLine />
          {formatString(lastPath)}
        </>
      ) : (
        <>
          <RiArrowRightSLine />
          Hoodies
        </>
      )}
    </Wrapper>
  );
};

export default Breadcrumb;
