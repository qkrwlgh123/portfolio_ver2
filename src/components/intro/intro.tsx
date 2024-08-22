import { ForwardedRef, forwardRef } from "react";
import ComponentLayout from "../../styles/layout/component/componentLayout";
import Style from "./intro.style";

const Intro = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <ComponentLayout title="" bgColor="#000000" isNoPadding={true} ref={ref}>
      <Style.ContentsContainer></Style.ContentsContainer>
    </ComponentLayout>
  );
});

export default Intro;
