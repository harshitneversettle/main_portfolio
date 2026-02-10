import { useState } from "react";
import { proofOfWork } from "../data/portfolioData";
import { FaGithub } from "react-icons/fa";

export default function ProofOfWork() {
  const [filter, setFilter] = useState("all");

  const categories = ["all", "web3", "web2", "contribution", ";)"];

  let filteredWork = proofOfWork;
  if (filter !== "all") {
    filteredWork = proofOfWork.filter((i) => i.category.includes(filter));
  }

  return (
    <section id="proof-of-work" className="mb-24">
      <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">
        proof of work
      </h2>

      <div className="flex gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-3 py-1 border rounded text-sm ${
              filter === cat
                ? "bg-black dark:bg-white text-white dark:text-black border-black dark:border-white"
                : "border-gray-300 dark:border-gray-700 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filteredWork.map((work, i) => (
          <div
            key={i}
            className="border border-gray-200 dark:border-gray-800 rounded p-4"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-black dark:text-white">
                {work.title}
                {work.badge && (
                  <span className="ml-2 px-2 py-0.5 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">
                    {work.badge}
                  </span>
                )}
              </h3>
              <span className="text-sm text-gray-500 dark:text-gray-500">
                {work.date}
              </span>
            </div>
            <div className="flex justify-between">
              {work.title ? (
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {work.description}
                </p>
              ) : (
                <p className="text-sm italic text-gray-700 dark:text-gray-300">
                  ~ {work.description}
                </p>
              )}
              <p className="text-white  bottom-6 right-6">
                <a
                  href={work.github}
                  className="ml-1 text-gray-800 hover:text-gray-400 dark:text-gray-100 dark:hover:text-gray-800 transition "
                  target="_blank"
                >
                  {work.github ? <FaGithub className="text-xl" /> : ""}
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
