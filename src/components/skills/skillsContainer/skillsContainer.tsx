import { SkillInterface } from "../../../types/skills";
import SkillComponent from "./skillComponent/skillComponent";
import SmallSkillComponent from "./skillComponent/smallSkillComponent";
import Style from "./skillsContainer.style";

const SkillsContainer = ({
  title,
  skillList,
  smallSkillList,
}: {
  title: string;
  skillList: SkillInterface[];
  smallSkillList?: SkillInterface[];
}) => {
  return (
    <Style.Container>
      <Style.Title>{title}</Style.Title>
      <div>
        {title === "FrontEnd" && (
          <div>
            {smallSkillList?.map((skill) => (
              <SmallSkillComponent key={skill.value} image={skill.image} />
            ))}
          </div>
        )}
        {skillList.map((skill) => (
          <SkillComponent key={skill.value} image={skill.image} />
        ))}
        {title === "Backend" && (
          <div>
            {smallSkillList?.map((skill) => (
              <SmallSkillComponent key={skill.value} image={skill.image} />
            ))}
          </div>
        )}
      </div>
    </Style.Container>
  );
};

export default SkillsContainer;
