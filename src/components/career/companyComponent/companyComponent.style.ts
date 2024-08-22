import styled from "styled-components";

const ComponentContainer = styled.div`
  display: flex;

  width: 100%;
  max-width: 1150px;

  @media (max-width: 799px) {
    flex-direction: column;
  }
`;

const CompanyDescriptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 4rem;
  width: 70%;

  @media (max-width: 799px) {
    width: 100%;

    padding: 4rem 0 0 0;
  }
`;

const TitleContainer = styled.div`
  h1 {
    font-size: 1.75rem;
    font-weight: 600;
  }
`;

const DateContainer = styled.div`
  margin: 0.8rem 0;
  span {
    color: #6c757d;
    font-size: 1.25rem;
    font-weight: 500;
  }
`;

const DescriptionsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ccc;
  li span {
    line-height: 1.3;
    font-size: 1.2rem;
    font-weight: 500;

    display: inline-block;
    margin-bottom: 1rem;
  }
`;

export default {
  ComponentContainer,
  CompanyDescriptionsContainer,
  TitleContainer,
  DateContainer,
  DescriptionsContainer,
};
