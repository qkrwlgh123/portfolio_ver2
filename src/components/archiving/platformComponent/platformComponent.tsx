import { ArchivingPlatformInterface } from "../../../types/archivingPlatform";
import Style from "./platformComponent.style";

const PlatformComponent = ({
  title,
  link,
  subtitle,
  description,
}: ArchivingPlatformInterface) => {
  return (
    <Style.ConponentContainer>
      <h4>{title}</h4>
      <Style.LinkTextBox>
        <a href={link}>{link}</a>
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
