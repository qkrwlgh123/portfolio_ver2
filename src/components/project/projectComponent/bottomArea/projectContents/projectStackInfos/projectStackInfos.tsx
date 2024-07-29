import Style from "./projectStackInfos.style";

const ProjectStackInfos = ({
  stacksInfos,
}: {
  stacksInfos?: { mainFeature: string[]; URLs: string[]; stacksList: string[] };
}) => {
  return (
    <Style.StacksInfosContainer>
      <Style.StackInfoBox>
        <Style.SubtitleBox>
          <span>주요 기능</span>
        </Style.SubtitleBox>

        {stacksInfos?.mainFeature.map((feature) => (
          <span key={feature}>{feature}</span>
        ))}
      </Style.StackInfoBox>
      <Style.StackInfoBox>
        <Style.SubtitleBox>
          <span>URL</span>
        </Style.SubtitleBox>
        <Style.LinkListContainer>
          {stacksInfos?.URLs.map((url) => (
            <Style.LinkText key={url} href={url} target="_blank">
              {url}
            </Style.LinkText>
          ))}
        </Style.LinkListContainer>
      </Style.StackInfoBox>

      <Style.StackInfoBox>
        <Style.SubtitleBox>
          <span>기술 스택</span>
        </Style.SubtitleBox>

        {stacksInfos?.stacksList.map((stack) => (
          <Style.TeckStack key={stack}>{stack}</Style.TeckStack>
        ))}
      </Style.StackInfoBox>
    </Style.StacksInfosContainer>
  );
};

export default ProjectStackInfos;
