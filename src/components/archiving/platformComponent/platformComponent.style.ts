import styled from "styled-components";

const ConponentContainer = styled.div`
  padding: 3rem;
  background-color: #f5f5f5;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  h4 {
    font-size: 45px;
  }

  a {
    color: #258ddb;
  }

  * {
    font-size: 15px;
  }
`;

const LinkTextBox = styled.div`
  margin: 2rem 0;
`;

const SubtitleBox = styled.div`
  font-weight: bold;
`;

const DescriptionsContainer = styled.ul`
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1em 0;
`;

export default {
  ConponentContainer,
  LinkTextBox,
  SubtitleBox,
  DescriptionsContainer,
};
