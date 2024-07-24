import { ArchivingPlatformInterface } from "../../../types/archivingPlatform";
import Style from "./platformComponent.style";

const PlatformComponent = ({
  image,
  link,
  subtitle,
  description,
}: ArchivingPlatformInterface) => {
  return (
    <Style.ConponentContainer
      onClick={() => {
        if (link) window.open(link, "_blank");
      }}
    >
      <Style.ImageBox>
        <img src={image} />
      </Style.ImageBox>
      <Style.LinkTextBox>
        <a href={link} target="_blank">
          {link}
        </a>
      </Style.LinkTextBox>
      <Style.SubtitleBox>
        <span>{subtitle}</span>
      </Style.SubtitleBox>
      <Style.DescriptionsContainer>
        {description?.map((sentence: string) => (
          <li key={sentence}>
            <span>{sentence}</span>
          </li>
        ))}
      </Style.DescriptionsContainer>
    </Style.ConponentContainer>
  );
};

export default PlatformComponent;
