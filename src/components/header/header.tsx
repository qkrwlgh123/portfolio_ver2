import Style from "./header.style";

const Header = ({
  headerBgColor,
  moveToComponent,
}: {
  headerBgColor: string;
  moveToComponent: (index: number) => void;
}) => {
  return (
    <Style.HeaderBox $headerBgColor={headerBgColor}>
      <Style.InnerBox>
        <div onClick={() => moveToComponent(0)}>
          <span>JH.P Portfolio</span>
        </div>
        <Style.MenusContainer>
          <div onClick={() => moveToComponent(1)}>
            <span>About Me</span>
          </div>
          <div onClick={() => moveToComponent(2)}>
            <span>Skill</span>
          </div>
          <div onClick={() => moveToComponent(3)}>
            <span>Archiving</span>
          </div>
          <div onClick={() => moveToComponent(4)}>
            <span>Project</span>
          </div>
          <div onClick={() => moveToComponent(5)}>
            <span>Career</span>
          </div>
        </Style.MenusContainer>
      </Style.InnerBox>
    </Style.HeaderBox>
  );
};

export default Header;
