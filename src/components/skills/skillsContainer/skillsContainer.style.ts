import styled from "styled-components";

const Container = styled.div`
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  box-shadow: 1rem 1rem 1rem 0 rgb(68 68 68 / 20%);
  gap: 0.5rem;
`;

const Title = styled.span`
  color: #f4623a;
  font-size: 1.5rem;
  border-bottom: 1px solid #ccc;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const SmallSkillsListContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  width: 280px;
`;

const SkillsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export default {
  Container,
  Title,
  SmallSkillsListContainer,
  SkillsListContainer,
};
