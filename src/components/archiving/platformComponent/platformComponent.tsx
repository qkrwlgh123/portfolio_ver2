import { ArchivingPlatformInterface } from "../../../types/archivingPlatform";
import Style from "./platformComponent.style";

const PlatformComponent = ({
  platformComponent,
}: {
  platformComponent: ArchivingPlatformInterface<string>;
}) => {
  return (
    <Style.ComponentContainer
      onClick={() => {
        if (platformComponent.link)
          window.open(platformComponent.link, "_blank");
      }}
    >
      <Style.ImageBox $isVelogImage={platformComponent.image.endsWith("svg")}>
        <img src={platformComponent.image} />
      </Style.ImageBox>
      <Style.LinkTextBox>
        <a href={platformComponent.link} target="_blank">
          {platformComponent.link ? platformComponent.link : ""}
        </a>
      </Style.LinkTextBox>
      <Style.SubtitleBox>
        <span>{platformComponent.subtitle}</span>
      </Style.SubtitleBox>
      <Style.DescriptionsContainer>
        {platformComponent.description?.map((sentence: string) => (
          <li key={sentence}>
            <span>{sentence}</span>
          </li>
        ))}
      </Style.DescriptionsContainer>
    </Style.ComponentContainer>
  );
};

export default PlatformComponent;
