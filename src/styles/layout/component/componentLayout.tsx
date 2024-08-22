import { ForwardedRef, forwardRef } from "react";
import Style from "./componentLayout.style";

const ComponentLayout = forwardRef(
  (
    {
      title,
      bgColor,
      children,
      isWhiteTitle,
      isNoPadding,
    }: {
      title: string;
      bgColor: string;
      children: React.ReactNode;
      isWhiteTitle?: boolean;
      isNoPadding?: boolean;
    },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <Style.LayoutContainer
        $bgColor={bgColor}
        $isNoPadding={isNoPadding}
        {...(isNoPadding && { $isNoPadding: isNoPadding })}
        ref={ref}
      >
        <Style.TitleContainer
          {...(isWhiteTitle && { $isWhiteTitle: isWhiteTitle })}
        >
          <h1>{title}</h1>
        </Style.TitleContainer>
        <div>{children}</div>
      </Style.LayoutContainer>
    );
  }
);

export default ComponentLayout;
