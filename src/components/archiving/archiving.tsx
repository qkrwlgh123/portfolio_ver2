import { dataList } from "../../data/archiving/dataList";
import ComponentLayout from "../../styles/layout/component/componentLayout";
import { ArchivingPlatformInterface } from "../../types/archivingPlatform";
import Style from "./archiving.style";
import PlatformComponent from "./platformComponent/platformComponent";

const Archiving = () => {
  return (
    <ComponentLayout title="ARCHIVING" bgColor="#212529" isWhiteTitle={true}>
      <Style.ArchivingListContainer>
        {dataList.map((data: ArchivingPlatformInterface) => (
          <PlatformComponent
            key={data.title}
            title={data.title}
            link={data.link ? data.link : ""}
            subtitle={data.subtitle}
            description={data.description}
          />
        ))}
      </Style.ArchivingListContainer>
    </ComponentLayout>
  );
};

export default Archiving;
