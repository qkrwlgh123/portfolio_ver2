import styled from "styled-components";

const Container = styled.div`
  border: 2px solid #eeeeee;
  cursor: pointer;
  border-radius: 1rem;
  user-select: none;
  width: 280px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const ImageBox = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 60%;
  }
`;

const SmallContainer = styled(Container)`
  width: 88px;
`;

const SmallImageBox = styled(ImageBox)`
  img {
    width: 85%;
  }
`;

export default { Container, ImageBox, SmallContainer, SmallImageBox };
