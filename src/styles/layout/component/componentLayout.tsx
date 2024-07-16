import Style from "./componentLayout.style";

const ComponentLayout = ({
  title,
  bgColor,
  children,
}: {
  title: string;
  bgColor: string;
  children: React.ReactNode;
}) => {
  return (
    <Style.LayoutContainer>
      <Style.TitleContainer>
        <h1>{title}</h1>
      </Style.TitleContainer>
      <div>{children}</div>
    </Style.LayoutContainer>
  );
};

export default ComponentLayout;
