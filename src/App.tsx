import AboutMe from "./components/aboutMe/aboutMe";
import Skill from "./components/skill/skill";
import GlobalLayout from "./styles/layout/global/globalLayout";

const App = () => {
  return (
    <GlobalLayout>
      <AboutMe />
      <Skill />
    </GlobalLayout>
  );
};

export default App;
