import { useState, useEffect } from "react";

export default function GitHubActivity() {
  const harshitneversettle = "harshitneversettle";
  const [contributions, setContributions] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContributions();
  }, []);

  const fetchContributions = async () => {
    try {
      const response = await fetch(
        `https://github-contributions-api.jogruber.de/v4/${harshitneversettle}?y=last`,
      );
      const data = await response.json();

      if (data.total) {
        const currentYear = new Date().getFullYear();
        setTotalCount(data.total[currentYear] || Object.values(data.total)[0]);
        setContributions(data.contributions || []);
      }
    } catch (error) {
      console.error("Failed to fetch GitHub contributions:", error);
    } finally {
      setLoading(false);
    }
  };

  const getColor = (count) => {
    if (count === 0) return "bg-[#161b22] dark:bg-[#161b22]";
    if (count <= 3) return "bg-[#0e4429] dark:bg-[#0e4429]";
    if (count <= 6) return "bg-[#006d32] dark:bg-[#006d32]";
    if (count <= 9) return "bg-[#26a641] dark:bg-[#26a641]";
    return "bg-[#39d353] dark:bg-[#39d353]";
  };

  const organizeIntoWeeks = () => {
    if (contributions.length === 0) return [];

    const weeks = [];
    const today = new Date();
    const oneYearAgo = new Date(today);
    oneYearAgo.setFullYear(today.getFullYear() - 1);
    oneYearAgo.setDate(oneYearAgo.getDate() - oneYearAgo.getDay());

    let currentWeek = [];
    let currentDate = new Date(oneYearAgo);

    const contribMap = {};
    contributions.forEach((c) => {
      contribMap[c.date] = c.count;
    });

    while (currentDate <= today) {
      const dateStr = currentDate.toISOString().split("T")[0];
      currentWeek.push({
        date: dateStr,
        count: contribMap[dateStr] || 0,
        day: currentDate.getDay(),
      });

      if (currentWeek.length === 7) {
        weeks.push(currentWeek);
        currentWeek = [];
      }

      currentDate.setDate(currentDate.getDate() + 1);
    }

    if (currentWeek.length > 0) {
      while (currentWeek.length < 7) {
        currentWeek.push({ date: "", count: -1, day: currentWeek.length });
      }
      weeks.push(currentWeek);
    }

    return weeks;
  };

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const weeks = organizeIntoWeeks();

  if (loading) {
    return (
      <section className="mb-12 sm:mb-16 md:mb-20">
        <div className="bg-white dark:bg-[#0d1117] border border-gray-200 dark:border-[#30363d] rounded-md p-3 sm:p-4">
          <div className="animate-pulse h-24 sm:h-32 bg-gray-200 dark:bg-[#161b22] rounded"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="mb-12 sm:mb-16 md:mb-20">
      <div className="bg-white dark:bg-[#0d1117] border border-gray-200 dark:border-[#30363d] rounded-md p-3 sm:p-4">
        <div className="mb-3">
          <div className="flex justify-between items-center mb-2">
            <div className="hidden sm:flex gap-2 text-xs text-gray-500 dark:text-[#7d8590]">
              {months.map((month, i) => (
                <span key={i} style={{ width: "40px" }}>
                  {month}
                </span>
              ))}
            </div>
          </div>

          <div className="overflow-x-auto pb-2 -mx-1 px-1">
            <div className="flex gap-[2px] sm:gap-[3px] min-w-max">
              {weeks.map((week, weekIndex) => (
                <div
                  key={weekIndex}
                  className="flex flex-col gap-[2px] sm:gap-[3px]"
                >
                  {week.map((day, dayIndex) =>
                    day.count === -1 ? (
                      <div
                        key={dayIndex}
                        className="w-[8px] h-[8px] sm:w-[10px] sm:h-[10px]"
                      />
                    ) : (
                      <div
                        key={dayIndex}
                        className={`w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] rounded-sm ${getColor(day.count)} hover:ring-1 hover:ring-gray-400 dark:hover:ring-gray-500 transition-all cursor-pointer`}
                        title={`${day.date}: ${day.count} contributions`}
                      />
                    ),
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 text-xs text-gray-600 dark:text-[#7d8590] mt-3">
          <span className="text-xs sm:text-sm">
            <span className="font-semibold text-gray-900 dark:text-[#e6edf3]">
              {totalCount.toLocaleString()}
            </span>{" "}
            contributions in the last year
          </span>
          <div className="flex items-center gap-1">
            <span className="text-xs">Less</span>
            <div className="flex gap-1 mx-1">
              <div className="w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] bg-[#161b22] rounded-sm" />
              <div className="w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] bg-[#0e4429] rounded-sm" />
              <div className="w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] bg-[#006d32] rounded-sm" />
              <div className="w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] bg-[#26a641] rounded-sm" />
              <div className="w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] bg-[#39d353] rounded-sm" />
            </div>
            <span className="text-xs">More</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 text-xs">
          {["2026", "2025", "2024", "2023", "2022"].map((year, i) => (
            <button
              key={i}
              className="px-2 sm:px-3 py-1 rounded-md text-gray-700 dark:text-[#7d8590] hover:bg-gray-100 dark:hover:bg-[#161b22] transition-colors"
            >
              {year}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
