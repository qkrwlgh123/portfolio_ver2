import styled from "styled-components";

const StacksInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  border-top: 1px solid #cccccc;

  padding-top: 1rem;

  font-weight: 500;
`;

const StackInfoBox = styled.div`
  display: flex;
  align-items: start;
  width: 100%;
`;

const SubtitleBox = styled.div`
  width: 11rem;
  display: flex;
`;

const MainFeatureList = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: calc(100% - 11rem);
`;

const LinkListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  width: calc(100% - 11rem);
`;

const LinkText = styled.a`
  color: #258ddb;
  cursor: pointer;
`;

const TeckStackList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  width: calc(100% - 11rem);
`;

const TechStack = styled.div`
  border: 1px solid gray;

  border-radius: 1rem;
  padding: 2px 4px;
  user-select: none;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 0.875rem;
`;

export default {
  StacksInfosContainer,
  StackInfoBox,
  SubtitleBox,
  MainFeatureList,
  LinkListContainer,
  LinkText,
  TeckStackList,
  TechStack,
};
