import { StackInfoInterface } from "../../../../../../types/project";
import Style from "./projectStackInfos.style";

const ProjectStackInfos = ({
  stacksInfos,
}: {
  stacksInfos: StackInfoInterface;
}) => {
  return (
    <Style.StacksInfosContainer>
      <Style.StackInfoBox>
        <Style.SubtitleBox>
          <span>주요 기능</span>
        </Style.SubtitleBox>
        <Style.MainFeatureList>
          {stacksInfos.mainFeature.map((feature, index) => (
            <span key={feature}>
              {feature}
              {index < stacksInfos.mainFeature.length - 1 && ","}&nbsp;
            </span>
          ))}
        </Style.MainFeatureList>
      </Style.StackInfoBox>
      <Style.StackInfoBox>
        <Style.SubtitleBox>
          <span>URL</span>
        </Style.SubtitleBox>
        <Style.LinkListContainer>
          {stacksInfos.URLs.map((url) => (
            <Style.LinkText key={url.link} href={url.link} target="_blank">
              {url.text}
            </Style.LinkText>
          ))}
        </Style.LinkListContainer>
      </Style.StackInfoBox>

      <Style.StackInfoBox>
        <Style.SubtitleBox>
          <span>기술 스택</span>
        </Style.SubtitleBox>

        <Style.TeckStackList>
          {stacksInfos.stacksList.map((stack) => (
            <Style.TechStack key={stack}>{stack}</Style.TechStack>
          ))}
        </Style.TeckStackList>
      </Style.StackInfoBox>
    </Style.StacksInfosContainer>
  );
};

export default ProjectStackInfos;
