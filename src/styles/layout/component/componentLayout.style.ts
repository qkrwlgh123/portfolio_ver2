import styled from "styled-components";

const LayoutContainer = styled.section<{ $bgColor: string }>`
  padding: 6rem 2rem;
  background-color: ${(props) => props.$bgColor};
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
