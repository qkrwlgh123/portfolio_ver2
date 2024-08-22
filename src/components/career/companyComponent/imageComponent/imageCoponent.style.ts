import styled from "styled-components";

const ImageContainer = styled.div`
  border-right: 1px solid #ccc;

  width: fit-content;
  padding-right: 4rem;

  @media (max-width: 799px) {
    width: 100%;
    display: flex;
    justify-content: center;

    border-right: none;
    border-bottom: 1px solid #ccc;

    padding-right: 0;
    padding-bottom: 4rem;
  }
`;

const ImageBox = styled.div`
  width: 250px;
  height: 250px;
  border: 1px solid #ccc;
  border-radius: 100%;
  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 80%;
    height: 80%;
    object-fit: contain;
  }
`;

export default { ImageContainer, ImageBox };
