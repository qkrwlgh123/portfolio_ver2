import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin-top: 4rem;
  justify-content: center;
  align-items: flex-start;
  width: 100%;

  h3 {
    font-size: 2rem;
    font-weight: normal;
    border-bottom: 2px solid #cccccc;
    width: fit-content;
  }
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1rem;

  width: 33%;
`;

const ContentText = styled.span`
  font-size: 1.25rem;
  font-weight: normal;
`;

const CenterContentBox = styled(ContentBox)`
  display: flex;
  justify-content: center;
`;

const RightContentBox = styled(ContentBox)`
  display: flex;
  justify-content: flex-end;
`;

export default {
  Container,
  ContentBox,
  CenterContentBox,
  RightContentBox,
  ContentText,
};
