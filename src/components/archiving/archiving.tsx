import { ForwardedRef, forwardRef } from "react";
import { dataList } from "../../data/archiving/dataList";
import ComponentLayout from "../../styles/layout/component/componentLayout";
import { ArchivingPlatformInterface } from "../../types/archivingPlatform";
import Style from "./archiving.style";
import PlatformComponent from "./platformComponent/platformComponent";
import { motion } from "framer-motion";

const Archiving = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <ComponentLayout
      title="ARCHIVING"
      bgColor="#212529"
      isWhiteTitle={true}
      ref={ref}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        viewport={{ once: true }}
      >
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
      </motion.div>
    </ComponentLayout>
  );
});

export default Archiving;
