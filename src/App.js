import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SocialMedia from "./components/SocialMedia";
import Projects from "./components/Projects";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <SocialMedia />
    </div>
  );
}

export default App;
