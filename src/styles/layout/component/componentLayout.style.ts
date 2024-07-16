import styled from "styled-components";

const LayoutContainer = styled.div`
  padding: 6rem 2rem;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  h1 {
    display: inline;
    font-weight: bold;
    font-size: 4rem;
    border-bottom: 2px solid #cccccc;
  }
`;

export default { LayoutContainer, TitleContainer };
