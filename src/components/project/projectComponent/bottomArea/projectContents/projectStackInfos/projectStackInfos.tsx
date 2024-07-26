import Style from "./projectStackInfos.style";

const ProjectStackInfos = ({
  stacksInfos,
}: {
  stacksInfos?: { mainFeature: string[]; URL: string; stacksList: string[] };
}) => {
  return (
    <Style.StacksInfosContainer>
      <div>
        <span>주요 기능</span>
        {stacksInfos?.mainFeature.map((feature) => (
          <span key={feature}>{feature}</span>
        ))}
      </div>
      <div>
        <span>URL</span>
        <span>{stacksInfos?.URL}</span>
      </div>
      <div>
        <span>
          {stacksInfos?.stacksList.map((stack) => (
            <span key={stack}>{stack}</span>
          ))}
        </span>
      </div>
    </Style.StacksInfosContainer>
  );
};

export default ProjectStackInfos;
