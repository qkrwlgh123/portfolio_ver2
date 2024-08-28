import { ArchivingPlatformInterface } from "../../../types/archivingPlatform";
import Style from "./platformComponent.style";

const LongPlatformComponent = ({
  platformComponent,
}: {
  platformComponent: ArchivingPlatformInterface<
    { link: string; text: string }[]
  >;
}) => {
  return (
    <Style.LongComponentContainer>
      <Style.ImageBox $isVelogImage={platformComponent.image.endsWith("svg")}>
        <img src={platformComponent.image} />
      </Style.ImageBox>

      <Style.LinkTextBox>
        {platformComponent.link.map((linkItem) => (
          <a key={linkItem.link} href={linkItem.link} target="_blank">
            {linkItem.text}
          </a>
        ))}
      </Style.LinkTextBox>

      <Style.SubtitleBox>
        <span>{platformComponent.subtitle}</span>
      </Style.SubtitleBox>
    </Style.LongComponentContainer>
  );
};

export default LongPlatformComponent;
