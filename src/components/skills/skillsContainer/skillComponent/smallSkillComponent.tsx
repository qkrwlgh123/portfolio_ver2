import Style from "./skillComponent.style";

const SmallSkillComponent = ({ image }: { image: string }) => {
  return (
    <Style.SmallContainer>
      <Style.SmallImageBox>
        <img src={image} />
      </Style.SmallImageBox>
    </Style.SmallContainer>
  );
};

export default SmallSkillComponent;
