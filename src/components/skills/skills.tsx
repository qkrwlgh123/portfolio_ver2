import { ForwardedRef, forwardRef } from "react";
import { backendSkillsList } from "../../data/skills/backendList";
import { communitySkillsList } from "../../data/skills/communityList";
import { deploymentSkillsList } from "../../data/skills/deploymentList";
import {
  frontendSkillsList,
  frontendsmallSkillsList,
} from "../../data/skills/frontendList";
import ComponentLayout from "../../styles/layout/component/componentLayout";
import Style from "./skills.style";
import SkillsContainer from "./skillsContainer/skillsContainer";
import { motion } from "framer-motion";

const Skills = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <ComponentLayout title="SKILLS" bgColor="#ffc107" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        viewport={{ once: true }}
      >
        <Style.SkillsContentsContainer>
          <Style.SkillsListContainer>
            <Style.SkillsComponentsBox>
              <SkillsContainer
                title="FrontEnd"
                smallSkillList={frontendsmallSkillsList}
                skillList={frontendSkillsList}
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
      </motion.div>
    </ComponentLayout>
  );
});

export default Skills;
