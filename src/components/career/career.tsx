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
          <CompanyComponent
            key={companyData.title}
            companyData={{ ...companyData }}
          />
        ))}
      </Style.ContentsContainer>
    </ComponentLayout>
  );
});

export default Career;
