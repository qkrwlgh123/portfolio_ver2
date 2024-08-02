import Style from "./imageCoponent.style";

const ImageComponent = ({ image }: { image: string }) => {
  return (
    <Style.ImageContainer>
      <Style.ImageBox>
        <img src={image} />
      </Style.ImageBox>
    </Style.ImageContainer>
  );
};

export default ImageComponent;
