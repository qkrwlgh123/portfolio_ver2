import Style from "./projectDescriptions.style";

const ProjectDescriptons = ({ descriptions }: { descriptions: string[] }) => {
  return (
    <Style.DescriptionsContainer>
      {descriptions.map((description) => (
        <div key={description}>
          <p>{description}</p>
        </div>
      ))}
    </Style.DescriptionsContainer>
  );
};

export default ProjectDescriptons;
