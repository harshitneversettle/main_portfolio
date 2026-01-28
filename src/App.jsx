import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ProofOfWork from "./components/ProofOfWork";
import GitHubActivity from "./components/GitHubActivity";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="max-w-4xl mx-auto px-6 py-20">
          <Hero />
          <Experience />
          <Projects />
          <ProofOfWork />
          <GitHubActivity />
        </main>
      </div>
    </div>
  );
}

export default App;
