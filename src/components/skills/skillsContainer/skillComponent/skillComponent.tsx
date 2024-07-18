import Style from "./skillComponent.style";

const SkillComponent = ({ image }: { image: string }) => {
  return (
    <Style.Container>
      <Style.ImageBox>
        <img src={image} />
      </Style.ImageBox>
    </Style.Container>
  );
};

export default SkillComponent;
