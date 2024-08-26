import { ForwardedRef, forwardRef } from "react";
import { dataList } from "../../data/career/dataList";
import ComponentLayout from "../../styles/layout/component/componentLayout";
import { CompanyComponentInterface } from "../../types/career";
import Style from "./career.style";
import CompanyComponent from "./companyComponent/companyComponent";
import { motion } from "framer-motion";

const Career = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <ComponentLayout title="CAREER" bgColor="#f5f5f5" ref={ref}>
      <Style.ContentsContainer>
        {dataList.map((companyData: CompanyComponentInterface) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            viewport={{ once: true }}
          >
            <CompanyComponent
              key={companyData.title}
              companyData={{ ...companyData }}
            />
          </motion.div>
        ))}
      </Style.ContentsContainer>
    </ComponentLayout>
  );
});

export default Career;
