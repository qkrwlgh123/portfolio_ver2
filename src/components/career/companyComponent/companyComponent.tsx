import { CompanyComponentInterface } from "../../../types/career";
import Style from "./companyComponent.style";
import ContributionList from "./contributionList/contributionList";
import ImageComponent from "./imageComponent/imageComponent";

const CompanyComponent = ({
  companyData,
}: {
  companyData: CompanyComponentInterface;
}) => {
  return (
    <Style.ComponentContainer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.3 }}
      viewport={{ once: true }}
    >
      <ImageComponent image={companyData.image} />
      <Style.CompanyDescriptionsContainer>
        <Style.TitleContainer>
          <h1>{companyData.title}</h1>
        </Style.TitleContainer>

        <Style.DateContainer>
          <span>{companyData.date}</span>
        </Style.DateContainer>

        <Style.DescriptionsContainer>
          {companyData.descriptions.map((description) => (
            <li key={description}>
              <span>{description}</span>
            </li>
          ))}
        </Style.DescriptionsContainer>

        <ContributionList contributionList={companyData.contributionList} />
      </Style.CompanyDescriptionsContainer>
    </Style.ComponentContainer>
  );
};

export default CompanyComponent;
