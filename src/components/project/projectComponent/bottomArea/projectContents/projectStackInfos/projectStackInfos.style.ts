import styled from "styled-components";

const StacksInfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  border-top: 1px solid #cccccc;
  padding-top: 2rem;
`;

const StackInfoBox = styled.div`
  display: flex;
`;

const SubtitleBox = styled.div`
  width: 11rem;
  display: inline-block;
`;

const LinkListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const LinkText = styled.a`
  color: #258ddb;
  cursor: pointer;
`;

const TeckStack = styled.div`
  border: 1px solid gray;
  border-radius: 1rem;
  padding: 4px 6px;
  user-select: none;
`;

export default {
  StacksInfosContainer,
  StackInfoBox,
  SubtitleBox,
  LinkListContainer,
  LinkText,
  TeckStack,
};
