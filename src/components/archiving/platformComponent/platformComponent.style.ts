import styled from "styled-components";

const ComponentContainer = styled.div`
  width: 350px;
  height: 320px;

  padding: 2rem;

  background-color: #f5f5f5;

  border-radius: 1rem;

  display: flex;
  flex-direction: column;

  cursor: pointer;

  a {
    color: #258ddb;
  }

  transition: scale 0.2s ease;

  &:hover {
    scale: 1.1;
  }

  @media (max-width: 1199px) {
    width: 100%;
    max-width: 500px;
  }
`;

const LongComponentContainer = styled(ComponentContainer)`
  width: 764px;

  @media (max-width: 1199px) {
    width: 100%;
    max-width: 500px;
  }
`;

const ImageBox = styled.div<{ $isVelogImage: boolean }>`
  width: 14rem;
  height: 75px;

  margin-left: ${(props) => (props.$isVelogImage ? "-3rem;" : "-1.8rem;")};
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: ${(props) => (props.$isVelogImage ? "55%" : "100%")};
  }
`;

const LinkTextBox = styled.div`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
`;

const SubtitleBox = styled.div`
  margin-top: -1rem;
  font-weight: 500;
`;

const DescriptionsContainer = styled.ul`
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 1em 0;

  word-wrap: break-word;
  overflow-wrap: break-word;
`;

export default {
  ComponentContainer,
  LongComponentContainer,
  ImageBox,
  LinkTextBox,
  SubtitleBox,
  DescriptionsContainer,
};
