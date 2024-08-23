import { ForwardedRef, forwardRef } from "react";

import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import Style from "./intro.style";
import MoreViewButton from "./moreViewButton/moreViewButton";

const Intro = forwardRef(
  (
    { moveToComponent }: { moveToComponent: (index: number) => void },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    /** Intro 컴포넌트의 전체 Offset */
    const { scrollY, scrollYProgress } = useScroll({
      offset: ["0px", "4000px"],
    });

    /** Intro 컴포넌트 내 텍스트의 translateY 값 */
    const tranlateyValueOfText = useMotionValue(0);

    /** 상단 가이드 텍스트의 display [flex / none] 값 */
    const guideTextDisplayState = useMotionValue("flex");

    /** 현재 스크롤 위치가 Intro 컴포넌트 전체 Offset의 80%만큼 내려왔을 때 이벤트
     * ex) Intro 컴포넌트가 완벽하게 위로 올라갔으면 latest = 1
     */
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
      if (latest >= 0.8) {
        tranlateyValueOfText.set(-(scrollY.get() - 3200));
        guideTextDisplayState.set("none");
      } else {
        tranlateyValueOfText.set(0);
        guideTextDisplayState.set("flex");
      }
    });

    /** 첫 번째 영역
     * 1. 안녕하세요.
     * 2. FE 개발자 박지호입니다.
     * ====================================
     */

    /** 첫 번째 영역 text들의 scale */
    const firstTextscale = useTransform(scrollYProgress, [0, 0.15], [1, 1.2]);

    /** 첫 번째 영역의 첫 번째 문장 opacity */
    const firstSentenceOpacity = useTransform(
      scrollYProgress,
      [0.18, 0.19],
      [1, 0]
    );

    /** 첫 번째 영역의 두 번째 문장 opacity */
    const secondSentenceOpacity = useTransform(
      scrollYProgress,
      [0.13, 0.15],
      [1, 0]
    );

    /**
     * ====================================
     */

    /** 두 번째 영역
     * 1. FE 개발자 박지호
     * 2. 항상 주도적으로 임하는 개발자입니다.
     * 2-1. 더 나은 개발자가 되기 위한 열망이 강합니다.
     * ====================================
     */

    /** 두 번째 영역의 첫 번째 문장 opacity */
    const thirdSentencesOpacity = useTransform(
      scrollYProgress,
      [0.23, 0.3],
      [0, 1]
    );

    /** 두 번째 영역의 첫 번째 문장 translateY */
    const thirdSentenceTranslateY = useTransform(
      scrollYProgress,
      [0.23, 0.34],
      [0, -10]
    );

    /** 두 번째 영역의 두 번째 문장 opacity */
    const fourthSentenceOpacity = useTransform(
      scrollYProgress,
      [0.3, 0.31],
      [0, 1]
    );

    /**
     * ====================================
     */

    /** 더 알아보기 버튼 opacity */
    const moreViewButtonOpacity = useTransform(
      scrollYProgress,
      [0.5, 0.6],
      [0, 1]
    );

    /** 더 알아보기 버튼 translateY */
    const moreVIewButtonTranslateY = useTransform(
      scrollYProgress,
      [0.5, 0.6],
      [0, -10]
    );

    return (
      <Style.ComponentOuterLayout ref={ref}>
        <Style.InnerContainer>
          <Style.GuideText
            style={{ display: guideTextDisplayState }}
            animate={{ y: [0, 10] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            ↓ 스크롤하여 진행해주세요!
          </Style.GuideText>

          <Style.TextsContainer>
            <Style.TextsBox style={{ scale: firstTextscale }}>
              <Style.Text
                $fontSize={8}
                $fontWeight={400}
                style={{ opacity: firstSentenceOpacity }}
              >
                <span>안녕하세요.</span>
              </Style.Text>
              <Style.Text
                $fontSize={2.5}
                $fontWeight={400}
                style={{ opacity: secondSentenceOpacity }}
              >
                <span>FE개발자 박지호입니다.</span>
              </Style.Text>
            </Style.TextsBox>
          </Style.TextsContainer>
        </Style.InnerContainer>

        <Style.InnerContainer>
          <Style.TextsContainer>
            <Style.TextsBox
              style={{ translateY: tranlateyValueOfText, marginTop: "4rem" }}
            >
              <Style.Text
                $fontSize={4}
                $fontWeight={400}
                style={{
                  opacity: thirdSentencesOpacity,
                  translateY: thirdSentenceTranslateY,
                }}
              >
                <span>FE 개발자 박지호</span>
              </Style.Text>
              <Style.Text
                $fontSize={2}
                $fontWeight={400}
                style={{ opacity: fourthSentenceOpacity }}
              >
                <span>항상 주도적으로 임하는 개발자입니다.</span>
                <span>더 나은 개발자가 되기 위한 열망이 강합니다.</span>
              </Style.Text>

              <motion.div
                style={{
                  opacity: moreViewButtonOpacity,
                  translateY: moreVIewButtonTranslateY,
                  marginTop: "4rem",
                }}
              >
                <MoreViewButton moveToComponent={moveToComponent} />
              </motion.div>
            </Style.TextsBox>
          </Style.TextsContainer>
        </Style.InnerContainer>
      </Style.ComponentOuterLayout>
    );
  }
);

export default Intro;
