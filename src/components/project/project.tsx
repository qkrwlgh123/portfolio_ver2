import ComponentLayout from "../../styles/layout/component/componentLayout";
import Style from "./project.style";
import ProjectComponent from "./projectComponent/projectComponent";

const Project = () => {
  return (
    <ComponentLayout title="PROJECT" bgColor="#4244ff" isWhiteTitle={true}>
      <Style.ContentsContainer>
        <ProjectComponent />
      </Style.ContentsContainer>
    </ComponentLayout>
  );
};

export default Project;
