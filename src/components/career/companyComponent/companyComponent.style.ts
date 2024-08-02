import styled from "styled-components";

const ComponentContainer = styled.div`
  display: flex;

  width: 100%;
  max-width: 1050px;
`;

const CompanyDescriptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 4rem;
  width: 70%;
`;

const TitleContainer = styled.div`
  h1 {
    font-size: 2.55rem;
    font-weight: bold;
  }
`;

const DateContainer = styled.div`
  margin: 0.8rem 0;
  span {
    color: #6c757d;
    font-size: 1.8rem;
  }
`;

const DescriptionsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #ccc;
  li span {
    font-size: 1.7rem;
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
