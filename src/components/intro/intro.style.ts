import { motion } from "framer-motion";
import styled from "styled-components";

const ComponentOuterLayout = styled.section`
  position: relative;
  background-color: #000000;
  height: 4000px;
  display: flex;
  color: #ffffff;
`;

const GuideText = styled(motion.div)`
  position: absolute;
  top: 150px;
  margin: 1rem;
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  margin: 0 auto;
  height: 100%;
  left: 0;
  right: 0;
  pointer-events: none;
`;

const TextsContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  gap: 2rem;
`;

const TextsBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled(motion.div)<{ $fontSize: number; $fontWeight: number }>`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;

  span {
    font-size: ${(props) => `${props.$fontSize}rem`};
    font-weight: ${(props) => props.$fontWeight};
  }

  @media (max-width: 767px) {
    span {
      font-size: ${(props) =>
        props.$fontSize === 8
          ? "4rem"
          : props.$fontSize === 2.5
          ? "1.5rem"
          : props.$fontSize === 4
          ? "3rem"
          : "1.125rem"};
    }
  }
`;

export default {
  GuideText,
  ComponentOuterLayout,
  InnerContainer,
  TextsContainer,
  TextsBox,
  Text,
};
