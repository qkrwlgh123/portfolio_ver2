import AboutMe from "./components/aboutMe/aboutMe";
import Archiving from "./components/archiving/archiving";
import Career from "./components/career/career";
import Project from "./components/project/project";
import Skills from "./components/skills/skills";
import GlobalLayout from "./styles/layout/global/globalLayout";

const App = () => {
  return (
    <GlobalLayout>
      <AboutMe />
      <Skills />
      <Archiving />
      <Project />
      <Career />
    </GlobalLayout>
  );
};

export default App;
