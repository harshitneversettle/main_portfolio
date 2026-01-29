import { useState } from "react";
import { musicTrack } from "../data/portfolioData";
import { FaGithub, FaPause, FaPlay } from "react-icons/fa";
import { FiMoon, FiSun } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

export default function Navbar({ darkMode, setDarkMode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(musicTrack.url));

  const toggleMusic = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 z-50 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <a
          href="/"
          className="text-lg sm:text-xl font-bold text-black dark:text-white hover:opacity-70 transition-opacity"
        >
          Harshit
        </a>

        <div className="flex items-center gap-2 sm:gap-4 md:gap-8">
          <a
            href="https://drive.google.com/file/d/1RRkcw3WzGq3wbWT2xgR3kBKCXZvdbmgk/view?usp=sharing"
            target="_blank"
            className="hidden md:block text-md md:text-md text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            resume
          </a>
          <a
            href="#proof-of-work"
            className="hidden md:block text-md md:text-md text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            proof-of-work
          </a>
          <a
            href="https://x.com/Harshit_yad4v"
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="text-base sm:text-lg md:text-xl" />
          </a>
          <a
            href="https://github.com/harshitneversettle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            <FaGithub className="text-base sm:text-lg md:text-xl" />
          </a>

          <button
            onClick={toggleMusic}
            className="px-2 sm:px-3 flex gap-1 sm:gap-2 py-1 sm:py-1.5 rounded text-black items-center dark:text-white transition-colors text-xs sm:text-sm"
          >
            {isPlaying ? (
              <FaPause className="text-xs sm:text-sm" />
            ) : (
              <FaPlay className="text-xs sm:text-sm" />
            )}
            <span className="hidden sm:inline">listening</span>
          </button>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-1.5 sm:p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-900 text-black dark:text-white transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <FiSun className="text-base sm:text-lg" />
            ) : (
              <FiMoon className="text-base sm:text-lg" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
