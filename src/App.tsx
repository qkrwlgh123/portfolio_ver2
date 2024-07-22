import AboutMe from "./components/aboutMe/aboutMe";
import Archiving from "./components/archiving/archiving";
import Skills from "./components/skills/skills";
import GlobalLayout from "./styles/layout/global/globalLayout";

const App = () => {
  return (
    <GlobalLayout>
      <AboutMe />
      <Skills />
      <Archiving />
    </GlobalLayout>
  );
};

export default App;
