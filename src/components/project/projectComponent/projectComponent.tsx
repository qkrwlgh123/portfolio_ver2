import Style from "./projectComponent.style";
import ProjectImagesContainer from "./bottomArea/projectImagesContainer/projectImagesContainer";
import ProjectContents from "./bottomArea/projectContents/projectContents";
import { ProjectComponentInterface } from "../../../types/project";

const ProjectComponent = ({
  project,
}: {
  project: ProjectComponentInterface;
}) => {
  return (
    <Style.ComponentContainer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.3 }}
      viewport={{ once: true }}
    >
      <Style.TitleInfoBox>
        <h1>{project.title}</h1>
        <span>{project.date}</span>
      </Style.TitleInfoBox>

      <Style.BottomAreaContainer>
        <ProjectImagesContainer imageList={project.imageList} />
        <ProjectContents
          descriptions={project.descriptions}
          stacksInfos={project.stackInfos}
        />
      </Style.BottomAreaContainer>
    </Style.ComponentContainer>
  );
};

export default ProjectComponent;
