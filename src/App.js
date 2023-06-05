import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SocialMedia from "./components/SocialMedia";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <SocialMedia />
    </div>
  );
}

export default App;
