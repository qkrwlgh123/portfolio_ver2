import Style from "./projectContents.style";
import ProjectDescriptons from "./projectDescriptions/projectDescriptions";
import ProjectStackInfos from "./projectStackInfos/projectStackInfos";

const ProjectContents = () => {
  return (
    <Style.ContentsContainer>
      <ProjectDescriptons />
      <ProjectStackInfos />
    </Style.ContentsContainer>
  );
};

export default ProjectContents;
