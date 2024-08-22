import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TitleContainer = styled.div`
  h2 {
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

const DateContainer = styled.div`
  span {
    color: #6c757d;
    font-size: 1.1rem;
  }
`;

const DescriptionsContainer = styled.ul`
  padding-left: 1rem;

  li {
    margin-bottom: 0.5rem;
    white-space: pre-wrap;
    line-height: 1.35;
    font-weight: 500;
  }
`;

export default {
  Container,
  TitleContainer,
  DateContainer,
  DescriptionsContainer,
};
