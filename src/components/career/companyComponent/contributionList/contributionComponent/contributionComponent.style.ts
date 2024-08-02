import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TitleContainer = styled.div`
  h2 {
    font-size: 1.7rem;
    font-weight: bold;
  }
`;

const DateContainer = styled.div`
  span {
    color: #6c757d;
    font-size: 1.5rem;
  }
`;

const DescriptionsContainer = styled.ul`
  padding-left: 1.2rem;

  li {
    margin-bottom: 0.5rem;
  }
  li span {
    font-size: 1.4rem;
  }
`;

export default {
  Container,
  TitleContainer,
  DateContainer,
  DescriptionsContainer,
};
