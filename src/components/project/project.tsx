import { ForwardedRef, forwardRef } from "react";
import { dataList } from "../../data/project/dataList";
import ComponentLayout from "../../styles/layout/component/componentLayout";
import { ProjectComponentInterface } from "../../types/project";
import Style from "./project.style";
import ProjectComponent from "./projectComponent/projectComponent";

const Project = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <ComponentLayout
      title="PROJECT"
      bgColor="#4244ff"
      isWhiteTitle={true}
      ref={ref}
    >
      <Style.ContentsContainer>
        {dataList.map((project: ProjectComponentInterface) => (
          <ProjectComponent key={project.title} project={{ ...project }} />
        ))}
      </Style.ContentsContainer>
    </ComponentLayout>
  );
});

export default Project;
