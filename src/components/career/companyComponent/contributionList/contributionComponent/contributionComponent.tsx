import { Contribution } from "../../../../../types/career";
import Style from "./contributionComponent.style";

const ContributionComponent = ({
  contribution,
}: {
  contribution: Contribution;
}) => {
  return (
    <Style.Container>
      <Style.TitleContainer>
        <h2>▎ {contribution.name}</h2>
      </Style.TitleContainer>
      <Style.DateContainer>
        <span>{contribution.date}</span>
      </Style.DateContainer>
      <Style.DescriptionsContainer>
        {contribution.descriptions.map((description) => (
          <li key={description}>
            <span>{description}</span>
          </li>
        ))}
      </Style.DescriptionsContainer>
    </Style.Container>
  );
};

export default ContributionComponent;
