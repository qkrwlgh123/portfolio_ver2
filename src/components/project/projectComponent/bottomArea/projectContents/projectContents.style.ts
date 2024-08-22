import styled from "styled-components";

const ContentsContainer = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 799px) {
    width: 100%;
  }
`;

export default { ContentsContainer };
