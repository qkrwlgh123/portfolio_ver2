import styled from "styled-components";

const Container = styled.div`
  border: 2px solid #eeeeee;
  cursor: pointer;
  border-radius: 1rem;
  user-select: none;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.5);
  }
`;

export default { Container };
