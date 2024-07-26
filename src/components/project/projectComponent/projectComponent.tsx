import Style from "./projectComponent.style";
import ProjectImagesContainer from "./bottomArea/projectImagesContainer/projectImagesContainer";
import ProjectContents from "./bottomArea/projectContents/projectContents";

const ProjectComponent = ({
  title,
  date,
  imageList,
  descriptions,
  stacksInfos,
}: {
  title: string;
  date: string;
  imageList?: string[];
  descriptions: string[];
  stacksInfos?: { mainFeature: string[]; URL: string; stacksList: string[] };
}) => {
  return (
    <Style.ComponentContainer>
      <Style.TitleInfoBox>
        <h1>{title}</h1>
        <span>{date}</span>
      </Style.TitleInfoBox>

      <Style.BottomAreaContainer>
        <ProjectImagesContainer imageList={imageList} />
        <ProjectContents
          descriptions={descriptions}
          stacksInfos={stacksInfos}
        />
      </Style.BottomAreaContainer>
    </Style.ComponentContainer>
  );
};

export default ProjectComponent;
