import { motion } from "framer-motion";
import styled from "styled-components";

const ComponentContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;

  padding: 3rem;
  border-radius: 1rem;
  background-color: #ffffff;

  width: 100%;
  max-width: 1200px;

  min-height: 550px;
`;

const TitleInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 0.2rem;
  }

  span {
    color: #6c757d;
    font-weight: normal;
  }
`;

const BottomAreaContainer = styled.div`
  display: flex;

  margin-top: 3rem;

  width: 100%;
  max-width: 71.25rem;

  gap: 2rem;

  @media (max-width: 799px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default { ComponentContainer, TitleInfoBox, BottomAreaContainer };
