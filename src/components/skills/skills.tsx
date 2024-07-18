import { backendSkillsList } from "../../data/skills/backendList";
import { communitySkillsList } from "../../data/skills/communityList";
import { deploymentSkillsList } from "../../data/skills/deploymentList";
import { frontendsmallSkillsList } from "../../data/skills/frontendList";
import ComponentLayout from "../../styles/layout/component/componentLayout";
import Style from "./skills.style";
import SkillsContainer from "./skillsContainer/skillsContainer";

const Skills = () => {
  return (
    <ComponentLayout title="SKILLS" bgColor="#ffc107">
      <Style.SkillsContentsContainer>
        <Style.SkillsListContainer>
          <Style.SkillsComponentsBox>
            <SkillsContainer
              title="FrontEnd"
              smallSkillList={frontendsmallSkillsList}
              skillList={[]}
            />
          </Style.SkillsComponentsBox>

          <Style.SkillsComponentsBox>
            <SkillsContainer
              title="Backend"
              smallSkillList={[]}
              skillList={backendSkillsList}
            />
            <SkillsContainer
              title="Deployment"
              skillList={deploymentSkillsList}
            />
          </Style.SkillsComponentsBox>

          <Style.SkillsComponentsBox>
            <SkillsContainer
              title="Community"
              skillList={communitySkillsList}
            />
          </Style.SkillsComponentsBox>
        </Style.SkillsListContainer>
      </Style.SkillsContentsContainer>
    </ComponentLayout>
  );
};

export default Skills;
