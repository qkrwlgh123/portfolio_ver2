import { dataList } from "../../data/career/dataList";
import ComponentLayout from "../../styles/layout/component/componentLayout";
import { CompanyComponentInterface } from "../../types/career";
import Style from "./career.style";
import CompanyComponent from "./companyComponent/companyComponent";

const Career = () => {
  return (
    <ComponentLayout title="CAREER" bgColor="#f5f5f5">
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
};

export default Career;
