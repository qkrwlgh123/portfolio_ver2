import styled from "styled-components";

const ConponentContainer = styled.div`
  width: 30%;
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

  transition: all 0.2s ease;
  &:hover {
    scale: 1.1;
  }
`;

const ImageBox = styled.div`
  width: 20rem;
  margin-left: -2.25rem;
  img {
    width: 100%;
  }
`;

const LinkTextBox = styled.div`
  margin-bottom: 2rem;
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

  word-wrap: break-word; /* 추가된 부분 */
  overflow-wrap: break-word; /* 추가된 부분 */
`;

export default {
  ConponentContainer,
  ImageBox,
  LinkTextBox,
  SubtitleBox,
  DescriptionsContainer,
};
