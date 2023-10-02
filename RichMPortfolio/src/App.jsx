import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import { useState, useRef, useEffect } from "react";
import FadeInSection from "./components/FadeInSection";
function App() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  return (
    <div className="App">
      <FadeInSection>
        <Header />
      </FadeInSection>
      <FadeInSection>
        <Tech />
      </FadeInSection>
      <FadeInSection>
        <Projects />
      </FadeInSection>
    </div>
  );
}

export default App;
