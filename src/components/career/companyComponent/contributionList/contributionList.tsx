import { Contribution } from "../../../../types/career";
import ContributionComponent from "./contributionComponent/contributionComponent";
import Style from "./contributionList.style";

const ContributionList = ({
  contributionList,
}: {
  contributionList: Contribution[];
}) => {
  return (
    <Style.ListContainer>
      {contributionList.map((contribution) => (
        <ContributionComponent
          key={contribution.name}
          contribution={{ ...contribution }}
        />
      ))}
    </Style.ListContainer>
  );
};

export default ContributionList;
