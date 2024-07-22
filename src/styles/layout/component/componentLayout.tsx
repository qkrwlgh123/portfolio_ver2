import Style from "./componentLayout.style";

const ComponentLayout = ({
  title,
  bgColor,
  children,
  isWhiteTitle,
}: {
  title: string;
  bgColor: string;
  children: React.ReactNode;
  isWhiteTitle?: boolean;
}) => {
  return (
    <Style.LayoutContainer $bgColor={bgColor}>
      <Style.TitleContainer
        {...(isWhiteTitle && { $isWhiteTitle: isWhiteTitle })}
      >
        <h1>{title}</h1>
      </Style.TitleContainer>
      <div>{children}</div>
    </Style.LayoutContainer>
  );
};

export default ComponentLayout;
