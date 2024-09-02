import Style from "./projectDescriptions.style";

const ProjectDescriptons = ({ descriptions }: { descriptions: string[] }) => {
  return (
    <Style.DescriptionsContainer>
      {descriptions.map((description) => (
        <div key={description}>
          <p dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      ))}
    </Style.DescriptionsContainer>
  );
};

export default ProjectDescriptons;
