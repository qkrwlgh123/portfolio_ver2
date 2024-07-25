import styled from "styled-components";

const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 3rem;
  border-radius: 1rem;
  background-color: #ffffff;
  width: 100%;
  max-width: 1150px;
`;

const TitleInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
  }

  span {
    color: #6c757d;
    font-weight: normal;
    font-size: 1.5rem;
  }
`;

const BottomAreaContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 3rem;
  width: 100%;
`;

export default { ComponentContainer, TitleInfoBox, BottomAreaContainer };
