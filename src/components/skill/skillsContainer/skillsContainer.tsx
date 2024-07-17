import SkillComponent from "./skillComponent/skillComponent";
import Style from "./skillsContainer.style";

const SkillsContainer = ({
  title,
  imgList,
}: {
  title: string;
  imgList?: string[];
}) => {
  return (
    <Style.Container>
      <Style.Title>{title}</Style.Title>
      <div>
        <SkillComponent />
      </div>
    </Style.Container>
  );
};

export default SkillsContainer;
