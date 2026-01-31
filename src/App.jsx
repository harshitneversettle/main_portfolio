import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ProofOfWork from "./components/ProofOfWork";
import GitHubActivity from "./components/GitHubActivity";
import { FaRobot, FaSkull } from "react-icons/fa";

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
          <FaRobot
            onClick={() =>
              window.open("https://bot.harshityad4v.in/", "_blank")
            }
            className="fixed bottom-6 right-8 dark:text-white text-black text-6xl dark:hover:text-gray-500 duration-100 cursor-pointer animate-bounce rounded-full z-50"
          />
        </main>
      </div>
    </div>
  );
}

export default App;
