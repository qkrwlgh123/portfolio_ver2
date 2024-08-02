import { StackInfoInterface } from "../../../../../types/project";
import Style from "./projectContents.style";
import ProjectDescriptons from "./projectDescriptions/projectDescriptions";
import ProjectStackInfos from "./projectStackInfos/projectStackInfos";

const ProjectContents = ({
  descriptions,
  stacksInfos,
}: {
  descriptions: string[];
  stacksInfos: StackInfoInterface;
}) => {
  return (
    <Style.ContentsContainer>
      <ProjectDescriptons descriptions={descriptions} />
      <ProjectStackInfos stacksInfos={stacksInfos} />
    </Style.ContentsContainer>
  );
};

export default ProjectContents;
