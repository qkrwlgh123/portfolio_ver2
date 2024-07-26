import { dataList } from "../../data/project/dataList";
import ComponentLayout from "../../styles/layout/component/componentLayout";
import Style from "./project.style";
import ProjectComponent from "./projectComponent/projectComponent";

const Project = () => {
  return (
    <ComponentLayout title="PROJECT" bgColor="#4244ff" isWhiteTitle={true}>
      <Style.ContentsContainer>
        {dataList.map((project) => (
          <ProjectComponent
            key={project.title}
            title={project.title}
            date={project.date}
            imageList={project.imageList}
            descriptions={project.descriptions}
            stacksInfos={project.stacksInfos}
          />
        ))}
      </Style.ContentsContainer>
    </ComponentLayout>
  );
};

export default Project;
