import styled from "styled-components";

const SkillsContentsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

const SkillsListContainer = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 1199px) {
    flex-direction: column;
  }
`;

const SkillsComponentsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export default {
  SkillsContentsContainer,
  SkillsListContainer,
  SkillsComponentsBox,
};
