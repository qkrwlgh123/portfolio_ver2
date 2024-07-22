import Style from "./platformComponent.style";

const PlatformComponent = ({
  title,
  link,
  subtitle,
  description,
}: {
  title: any;
  link?: string;
  subtitle?: string;
  description?: string[];
}) => {
  return (
    <Style.ConponentContainer>
      <h4>{title}</h4>
    </Style.ConponentContainer>
  );
};

export default PlatformComponent;
