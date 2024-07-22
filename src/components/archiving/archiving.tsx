import ComponentLayout from "../../styles/layout/component/componentLayout";
import Style from "./archiving.style";
import PlatformComponent from "./platformComponent/platformComponent";

const Archiving = () => {
  return (
    <ComponentLayout title="ARCHIVING" bgColor="#212529" isWhiteTitle={true}>
      <Style.ArchivingListContainer>
        <PlatformComponent title="Github" />
        <PlatformComponent title="velog" />
      </Style.ArchivingListContainer>
    </ComponentLayout>
  );
};

export default Archiving;
