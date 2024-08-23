import Style from "./moreViewButton.style";

const MoreViewButton = ({
  moveToComponent,
}: {
  moveToComponent: (index: number) => void;
}) => {
  return (
    <Style.ButtonContainer onClick={() => moveToComponent(1)}>
      <span>저름 더 알아보고 싶나요?</span>
    </Style.ButtonContainer>
  );
};

export default MoreViewButton;
