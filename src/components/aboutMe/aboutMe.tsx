import { ForwardedRef, forwardRef } from "react";
import ComponentLayout from "../../styles/layout/component/componentLayout";
import Style from "./aboutMe.style";

const AboutMe = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <ComponentLayout title="ABOUT ME" bgColor="#ffffff" ref={ref}>
      <Style.Container>
        <Style.ContentBox>
          <h3>이름</h3>
          <Style.ContentText>박지호</Style.ContentText>
        </Style.ContentBox>
        <Style.CenterContentBox>
          <h3>생년월일</h3>
          <Style.ContentText>1993.10.24</Style.ContentText>
        </Style.CenterContentBox>
        <Style.RightContentBox>
          <h3>연락처</h3>
          <Style.ContentText>010-6809-4428</Style.ContentText>
          <Style.ContentText>jiho1024@naver.com</Style.ContentText>
        </Style.RightContentBox>
      </Style.Container>
    </ComponentLayout>
  );
});

export default AboutMe;
