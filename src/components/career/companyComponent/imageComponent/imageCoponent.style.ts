import styled from "styled-components";

const ImageContainer = styled.div`
  width: 30%;
  border-right: 1px solid #ccc;
  padding: 0 4rem 4rem 0;
`;

const ImageBox = styled.div`
  width: 250px;
  height: 250px;
  img {
    width: 100%;
    height: 100%;
  }
`;

export default { ImageContainer, ImageBox };
