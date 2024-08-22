import styled from "styled-components";

const DescriptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 1rem;

  p {
    line-height: 1.3;
    font-weight: 500;
    white-space: pre-wrap;
  }
`;

export default { DescriptionsContainer };
