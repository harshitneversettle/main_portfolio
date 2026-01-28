import { experiences } from "../data/portfolioData";

export default function Experience() {
  return (
    <section className="mb-20">
      <h2 className="text-xl font-semibold mb-8 text-gray-900 dark:text-gray-100 ">
        Experience
      </h2>

      <div className="space-y-10 border-b border-gray-700 pb-10">
        {experiences.map((exp, i) => (
          <div key={i}>
            <div className="flex justify-between items-baseline mb-3">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                  {exp.company}
                </h3>
                <p className="text-md text-gray-600 dark:text-gray-400">
                  {exp.role}
                </p>
              </div>
              <span className="text-md text-gray-500 dark:text-gray-500 whitespace-nowrap ml-4">
                {exp.period}
              </span>
            </div>

            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {exp.achievements.map((achievement, j) => (
                <span key={j}>
                  {achievement.text}
                  {achievement.highlight && (
                    <span className="font-semibold text-gray-900 dark:text-gray-100">
                      {" "}
                      {achievement.highlight}
                    </span>
                  )}
                  {j < exp.achievements.length - 1 ? " " : ""}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
