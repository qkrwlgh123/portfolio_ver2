import ComponentLayout from "../../styles/layout/component/componentLayout";
import Style from "./skill.style";
import SkillsContainer from "./skillsContainer/skillsContainer";

const Skill = () => {
  return (
    <ComponentLayout title="SKILLS" bgColor="#ffc107">
      <Style.SkillsContentsContainer>
        <Style.SkillsListContainer>
          <SkillsContainer title="FrontEnd" />
          <SkillsContainer title="Backend" />
          <SkillsContainer title="Community" />
        </Style.SkillsListContainer>
      </Style.SkillsContentsContainer>
    </ComponentLayout>
  );
};

export default Skill;
