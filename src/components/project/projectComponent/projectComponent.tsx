import Style from "./projectComponent.style";
import ProjectImagesContainer from "./bottomArea/projectImagesContainer/projectImagesContainer";
import ProjectContents from "./bottomArea/projectContents/projectContents";

const ProjectComponent = () => {
  return (
    <Style.ComponentContainer>
      <Style.TitleInfoBox>
        <h1>로스팅 랜드마크</h1>
        <span>2023.04 ~ 2024.06</span>
      </Style.TitleInfoBox>

      <Style.BottomAreaContainer>
        <ProjectImagesContainer />
        <ProjectContents />
      </Style.BottomAreaContainer>
    </Style.ComponentContainer>
  );
};

export default ProjectComponent;
