import { useEffect, useRef, useState } from "react";
import AboutMe from "./components/aboutMe/aboutMe";
import Archiving from "./components/archiving/archiving";
import Career from "./components/career/career";
import Header from "./components/header/header";
import Intro from "./components/intro/intro";
import Project from "./components/project/project";
import Skills from "./components/skills/skills";
import GlobalLayout from "./styles/layout/global/globalLayout";

const App = () => {
  /** 최상위에 렌더링된 각 컴포넌트 들의 DOM 요소를 가져오기 위한 ref들을 담은 배열 */
  const divRefArr = useRef<HTMLDivElement[]>([]);

  const [headerBgColor, setHeaderBgColor] = useState("black");

  /** 헤더바 색상 변경을 위한 스크롤 이벤트 함수 */
  const handleScrollToChangeHeader = () => {
    if (divRefArr.current[1]) {
      const currentTopofAboutMeComponent =
        divRefArr.current[1].getBoundingClientRect().top;

      const viewPortHeight = 0;
      if (currentTopofAboutMeComponent <= viewPortHeight) {
        setHeaderBgColor("white");
      } else {
        setHeaderBgColor("black");
      }
    }
  };

  /** 메뉴 클릭시 해당 컴포넌트로 스크롤 이동 */
  const moveToComponent = (index: number) => {
    divRefArr.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  /** 스크롤 이벤트 리스너 등록을 위한 Effect */
  useEffect(() => {
    window.addEventListener("scroll", handleScrollToChangeHeader);

    return () => {
      window.removeEventListener("scroll", handleScrollToChangeHeader);
    };
  }, []);

  return (
    <GlobalLayout>
      <Header headerBgColor={headerBgColor} moveToComponent={moveToComponent} />
      <Intro
        ref={(el: HTMLDivElement) => (divRefArr.current![0] = el)}
        moveToComponent={moveToComponent}
      />
      <AboutMe ref={(el: HTMLDivElement) => (divRefArr.current![1] = el)} />
      <Skills ref={(el: HTMLDivElement) => (divRefArr.current![2] = el)} />
      <Archiving ref={(el: HTMLDivElement) => (divRefArr.current![3] = el)} />
      <Project ref={(el: HTMLDivElement) => (divRefArr.current![4] = el)} />
      <Career ref={(el: HTMLDivElement) => (divRefArr.current![5] = el)} />
    </GlobalLayout>
  );
};

export default App;
