import { recentProjects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section className="mb-24">
      <h2 className="text-2xl font-bold mb-8 text-black dark:text-white">
        projects i built recently
      </h2>

      <div className="space-y-10">
        {recentProjects.map((project, i) => (
          <div key={i} className="flex gap-6 flex-wrap ">
            <div className="w-60 h-32 rounded overflow-hidden flex-shrink-0">
              <div className="w-full h-full flex flex-wrap items-center justify-center text-gray-600">
                <img src={project.image} alt="" />
              </div>
            </div>

            <div className="flex flex-wrap ">
              <h3 className="font-bold text-lg mb-2 text-black dark:text-white">
                {project.title}
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                {project.description}
              </p>
              <div className="flex gap-3">
                {project.links.map((link, j) => (
                  <a
                    key={j}
                    href={link.url}
                    className="text-md text-gray-600 dark:text-gray-400 underline hover:text-black dark:hover:text-white"
                  >
                    {link.type}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <a
          href="#"
          className="text-sm text-gray-600 dark:text-gray-400 italic hover:text-black dark:hover:text-white"
        >
          if you want to see more, check here →
        </a>
      </div>
    </section>
  );
}
