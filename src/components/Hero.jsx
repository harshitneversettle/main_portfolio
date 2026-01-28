import { profile } from "../data/portfolioData";
import {
  FaRust,
  FaNodeJs,
  FaReact,
  FaGithub,
  FaAws,
  FaPython,
  FaGit,
  FaCode,
} from "react-icons/fa";
import {
  SiSolana,
  //   SiAnchor,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiCplusplus,
  SiSelenium,
} from "react-icons/si";

export default function Hero() {
  const icon_map = {
    solana: <SiSolana />,
    rust: <FaRust />,
    anchor: <FaRust />,
    code: <FaCode />,
    javascript: <SiJavascript />,
    typescript: <SiTypescript />,
    next: <SiNextdotjs />,
    react: <FaReact />,
    node: <FaNodeJs />,
    express: <SiExpress />,
    python: <FaPython />,
    cplusplus: <SiCplusplus />,
    selenium: <SiSelenium />,
    git: <FaGit />,
    github: <FaGithub />,
    aws: <FaAws />,
  };

  return (
    <section className="mb-20 pb-10 border-b border-gray-700 ">
      <h1 className="text-5xl font-bold mb-8 text-black dark:text-white">
        Harshit
      </h1>

      <div className="space-y-4 text-md leading-relaxed text-black dark:text-white">
        <p>
          hi, i'm <span className="font-semibold">{profile.name}</span>.
        </p>

        <p>
          a <span className="font-semibold">{profile.title}</span> based in{" "}
          {profile.location} working across{" "}
          <span className="font-semibold">{profile.focus[0]}</span> and{" "}
          <span className="font-semibold">{profile.focus[1]}</span>.
        </p>

        <p>{profile.description}</p>

        <p>
          i've worked with{" "}
          <span className="font-semibold">{profile.environments[0]}</span>{" "}
          <span className="font-semibold">{profile.environments[1]}</span>{" "}
          environment, and i enjoy understanding how things work under the hood
          from program runtimes to transaction flows.
        </p>
      </div>

      <div className="mt-12">
        <p className="text-sm mb-4 text-black dark:text-white">
          you will find me working with
        </p>
        <div className="flex flex-wrap gap-3">
          {profile.technologies.map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-3 py-1 border border-gray-300 dark:border-gray-700 rounded-md text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <span className="text-md">{icon_map[tech.icon]}</span>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
