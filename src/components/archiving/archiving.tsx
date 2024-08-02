import { dataList } from "../../data/archiving/dataList";
import ComponentLayout from "../../styles/layout/component/componentLayout";
import { ArchivingPlatformInterface } from "../../types/archivingPlatform";
import Style from "./archiving.style";
import PlatformComponent from "./platformComponent/platformComponent";

const Archiving = () => {
  return (
    <ComponentLayout title="ARCHIVING" bgColor="#212529" isWhiteTitle={true}>
      <Style.ArchivinContentsContainer>
        <Style.ArchivingListContainer>
          {dataList.map((archivingData: ArchivingPlatformInterface) => (
            <PlatformComponent
              key={archivingData.image}
              platformComponent={{ ...archivingData }}
            />
          ))}
        </Style.ArchivingListContainer>
      </Style.ArchivinContentsContainer>
    </ComponentLayout>
  );
};

export default Archiving;
