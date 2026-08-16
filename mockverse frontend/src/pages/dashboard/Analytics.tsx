import {
  ArrowDownRight,
  ArrowUpRight,
  Award,
  BarChart3,
  BookOpen,
  CheckCircle2,
  Clock3,
  Headphones,
  Mic,
  PenLine,
  Target,
  TrendingUp,
} from "lucide-react";

import ProgressChart from "../../components/dashboard/ProgressChart";

interface ProgressData {
  test: string;
  score: number;
}

const progressData: ProgressData[] = [
  {
    test: "Test 1",
    score: 6.0,
  },
  {
    test: "Test 2",
    score: 6.5,
  },
  {
    test: "Test 3",
    score: 6.5,
  },
  {
    test: "Test 4",
    score: 7.0,
  },
  {
    test: "Test 5",
    score: 6.5,
  },
  {
    test: "Test 6",
    score: 7.0,
  },
  {
    test: "Test 7",
    score: 7.5,
  },
];

type ModuleName =
  | "Listening"
  | "Reading"
  | "Writing"
  | "Speaking";

interface ModulePerformance {
  name: ModuleName;
  score: number;
  previousScore: number;
  accuracy: number;
  icon: typeof Headphones;
}

const modulePerformance: ModulePerformance[] = [
  {
    name: "Listening",
    score: 7.5,
    previousScore: 7.0,
    accuracy: 82,
    icon: Headphones,
  },
  {
    name: "Reading",
    score: 7.0,
    previousScore: 6.5,
    accuracy: 76,
    icon: BookOpen,
  },
  {
    name: "Writing",
    score: 6.5,
    previousScore: 6.0,
    accuracy: 68,
    icon: PenLine,
  },
  {
    name: "Speaking",
    score: 7.0,
    previousScore: 6.5,
    accuracy: 74,
    icon: Mic,
  },
];

const weakAreas = [
  {
    title: "Writing Task 2",
    description: "Argument development and supporting examples",
    score: "6.5",
    priority: "High",
  },
  {
    title: "Reading — Matching Headings",
    description: "Identifying the main idea of paragraphs",
    score: "68%",
    priority: "Medium",
  },
  {
    title: "Speaking Part 2",
    description: "Fluency and maintaining a long response",
    score: "7.0",
    priority: "Medium",
  },
];

const Analytics = () => {
  return (
    <div className="space-y-6">

      {/* ================================================= */}
      {/* Header                                             */}
      {/* ================================================= */}

      <section>
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

          <div>
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-teal-100
                bg-teal-50
                px-3
                py-1.5
                text-xs
                font-semibold
                text-teal-700
                dark:border-teal-500/20
                dark:bg-teal-500/10
                dark:text-teal-400
              "
            >
              <BarChart3 className="h-3.5 w-3.5" />
              Performance Analytics
            </div>

            <h1
              className="
                mt-3
                text-2xl
                font-bold
                tracking-tight
                text-slate-900
                sm:text-3xl
                dark:text-white
              "
            >
              Your Progress
            </h1>

            <p
              className="
                mt-2
                max-w-2xl
                text-sm
                leading-6
                text-slate-500
                dark:text-slate-400
              "
            >
              Understand your IELTS performance, track your
              improvement, and identify the areas that need
              more practice.
            </p>
          </div>

          {/* Target */}

          <div
            className="
              flex
              items-center
              gap-4
              rounded-2xl
              border
              border-slate-200
              bg-white
              px-4
              py-3
              shadow-sm
              dark:border-white/10
              dark:bg-slate-900/70
            "
          >
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-teal-50
                text-teal-600
                dark:bg-teal-500/10
                dark:text-teal-400
              "
            >
              <Target className="h-5 w-5" />
            </div>

            <div>
              <p className="text-xs text-slate-400">
                Target band
              </p>

              <p className="mt-0.5 text-lg font-bold text-slate-900 dark:text-white">
                8.0
              </p>
            </div>

            <div className="h-8 w-px bg-slate-200 dark:bg-white/10" />

            <div>
              <p className="text-xs text-slate-400">
                Current
              </p>

              <p className="mt-0.5 text-lg font-bold text-teal-600 dark:text-teal-400">
                7.0
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================================================= */}
      {/* KPI Cards                                          */}
      {/* ================================================= */}

      <section
        className="
          grid
          grid-cols-1
          gap-4
          sm:grid-cols-2
          xl:grid-cols-4
        "
      >
        <AnalyticsStat
          title="Overall Band"
          value="7.0"
          change="+0.5"
          description="since your previous test"
          icon={Award}
          positive
        />

        <AnalyticsStat
          title="Tests Completed"
          value="12"
          change="+3"
          description="this month"
          icon={CheckCircle2}
          positive
        />

        <AnalyticsStat
          title="Average Accuracy"
          value="75%"
          change="+6%"
          description="across all modules"
          icon={Target}
          positive
        />

        <AnalyticsStat
          title="Study Time"
          value="18.5h"
          change="+4.2h"
          description="compared with last month"
          icon={Clock3}
          positive
        />
      </section>

      {/* ================================================= */}
      {/* Progress Chart                                     */}
      {/* ================================================= */}

      <section
        className="
          rounded-2xl
          border
          border-slate-200
          bg-white
          p-5
          shadow-sm
          sm:p-6
          dark:border-white/10
          dark:bg-slate-900/70
        "
      >
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
              Score progression
            </p>

            <h2 className="mt-1 text-lg font-bold text-slate-900 dark:text-white">
              Band Score Over Time
            </h2>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Your overall IELTS band across recent mock tests.
            </p>
          </div>

          <div
            className="
              inline-flex
              w-fit
              items-center
              gap-2
              rounded-lg
              bg-emerald-50
              px-3
              py-2
              text-xs
              font-semibold
              text-emerald-700
              dark:bg-emerald-500/10
              dark:text-emerald-400
            "
          >
            <TrendingUp className="h-3.5 w-3.5" />
            +0.5 overall
          </div>

        </div>

        <div className="mt-6">
          <ProgressChart data={progressData} />
        </div>
      </section>

      {/* ================================================= */}
      {/* Module Performance                                 */}
      {/* ================================================= */}

      <section
        className="
          rounded-2xl
          border
          border-slate-200
          bg-white
          p-5
          shadow-sm
          sm:p-6
          dark:border-white/10
          dark:bg-slate-900/70
        "
      >
        <div className="mb-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
            Module breakdown
          </p>

          <h2 className="mt-1 text-lg font-bold text-slate-900 dark:text-white">
            Module Performance
          </h2>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Compare your performance across the four IELTS modules.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {modulePerformance.map((module) => (
            <ModuleCard
              key={module.name}
              module={module}
            />
          ))}
        </div>
      </section>

      {/* ================================================= */}
      {/* Accuracy + Target                                  */}
      {/* ================================================= */}

      <section
        className="
          grid
          grid-cols-1
          gap-6
          xl:grid-cols-[minmax(0,1.3fr)_minmax(320px,0.7fr)]
        "
      >
        {/* Accuracy */}

        <section
          className="
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-5
            shadow-sm
            sm:p-6
            dark:border-white/10
            dark:bg-slate-900/70
          "
        >
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
              Accuracy
            </p>

            <h2 className="mt-1 text-lg font-bold text-slate-900 dark:text-white">
              Module Accuracy
            </h2>
          </div>

          <div className="space-y-5">
            {modulePerformance.map((module) => {
              const Icon = module.icon;

              return (
                <div key={module.name}>

                  <div className="mb-2 flex items-center justify-between">

                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-teal-500" />

                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {module.name}
                      </span>
                    </div>

                    <span className="text-sm font-bold text-slate-900 dark:text-white">
                      {module.accuracy}%
                    </span>

                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                    <div
                      className="
                        h-full
                        rounded-full
                        bg-teal-500
                        transition-all
                      "
                      style={{
                        width: `${module.accuracy}%`,
                      }}
                    />
                  </div>

                </div>
              );
            })}
          </div>
        </section>

        {/* Target Progress */}

        <section
          className="
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-5
            shadow-sm
            sm:p-6
            dark:border-white/10
            dark:bg-slate-900/70
          "
        >
          <div className="flex items-center gap-3">

            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-teal-50
                text-teal-600
                dark:bg-teal-500/10
                dark:text-teal-400
              "
            >
              <Target className="h-5 w-5" />
            </div>

            <div>
              <p className="text-xs text-slate-400">
                Target progress
              </p>

              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                Band 8.0
              </h2>
            </div>

          </div>

          <div className="mt-7 text-center">

            <div className="relative mx-auto flex h-36 w-36 items-center justify-center">

              <div
                className="
                  absolute
                  inset-0
                  rounded-full
                  border-[10px]
                  border-slate-100
                  dark:border-slate-800
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  rounded-full
                  border-[10px]
                  border-transparent
                  border-t-teal-500
                  border-r-teal-500
                  -rotate-45
                "
              />

              <div>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">
                  70%
                </p>

                <p className="mt-0.5 text-xs text-slate-400">
                  of target
                </p>
              </div>

            </div>

            <p className="mt-5 text-sm text-slate-500 dark:text-slate-400">
              You are{" "}
              <span className="font-semibold text-slate-700 dark:text-slate-200">
                1.0 band
              </span>{" "}
              away from your target.
            </p>

          </div>

          <div
            className="
              mt-6
              rounded-xl
              bg-teal-50
              p-3
              text-xs
              leading-5
              text-teal-700
              dark:bg-teal-500/5
              dark:text-teal-400
            "
          >
            Keep practicing consistently. Your score
            has improved by 0.5 bands recently.
          </div>
        </section>
      </section>

      {/* ================================================= */}
      {/* Weak Areas                                        */}
      {/* ================================================= */}

      <section
        className="
          rounded-2xl
          border
          border-slate-200
          bg-white
          p-5
          shadow-sm
          sm:p-6
          dark:border-white/10
          dark:bg-slate-900/70
        "
      >
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
              Personalized insights
            </p>

            <h2 className="mt-1 text-lg font-bold text-slate-900 dark:text-white">
              Areas to Improve
            </h2>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Focus your next practice sessions on these areas.
            </p>
          </div>

          <button
            type="button"
            className="
              inline-flex
              items-center
              gap-1.5
              text-sm
              font-semibold
              text-teal-600
              hover:text-teal-700
              dark:text-teal-400
              dark:hover:text-teal-300
            "
          >
            Practice now
            <ArrowUpRight className="h-4 w-4" />
          </button>

        </div>

        <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">

          {weakAreas.map((area) => (
            <div
              key={area.title}
              className="
                rounded-xl
                border
                border-slate-200
                bg-slate-50
                p-4
                dark:border-white/10
                dark:bg-slate-950/40
              "
            >
              <div className="flex items-start justify-between gap-3">

                <div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                    {area.title}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                    {area.description}
                  </p>
                </div>

                <span
                  className={`
                    shrink-0
                    rounded-full
                    px-2
                    py-1
                    text-[10px]
                    font-semibold
                    ${
                      area.priority === "High"
                        ? "bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-400"
                        : "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400"
                    }
                  `}
                >
                  {area.priority}
                </span>

              </div>

              <div className="mt-4 flex items-center justify-between">

                <span className="text-xs text-slate-400">
                  Current performance
                </span>

                <span className="text-sm font-bold text-slate-900 dark:text-white">
                  {area.score}
                </span>

              </div>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
};

export default Analytics;

/* ========================================================= */
/* Analytics Stat                                             */
/* ========================================================= */

interface AnalyticsStatProps {
  title: string;
  value: string;
  change: string;
  description: string;
  icon: typeof Award;
  positive?: boolean;
}

const AnalyticsStat = ({
  title,
  value,
  change,
  description,
  icon: Icon,
  positive = true,
}: AnalyticsStatProps) => {
  return (
    <article
      className="
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-5
        shadow-sm
        dark:border-white/10
        dark:bg-slate-900/70
      "
    >
      <div className="flex items-start justify-between">

        <div>
          <p className="text-xs font-medium text-slate-400">
            {title}
          </p>

          <p className="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            {value}
          </p>
        </div>

        <div
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-xl
            bg-teal-50
            text-teal-600
            dark:bg-teal-500/10
            dark:text-teal-400
          "
        >
          <Icon className="h-4 w-4" />
        </div>

      </div>

      <div className="mt-4 flex items-center gap-2">

        <span
          className={`
            inline-flex
            items-center
            gap-0.5
            text-xs
            font-semibold
            ${
              positive
                ? "text-emerald-600 dark:text-emerald-400"
                : "text-rose-600 dark:text-rose-400"
            }
          `}
        >
          {positive ? (
            <ArrowUpRight className="h-3.5 w-3.5" />
          ) : (
            <ArrowDownRight className="h-3.5 w-3.5" />
          )}

          {change}
        </span>

        <span className="text-[11px] text-slate-400">
          {description}
        </span>

      </div>
    </article>
  );
};

/* ========================================================= */
/* Module Card                                                 */
/* ========================================================= */

interface ModuleCardProps {
  module: ModulePerformance;
}

const ModuleCard = ({
  module,
}: ModuleCardProps) => {
  const Icon = module.icon;

  const difference =
    module.score - module.previousScore;

  return (
    <article
      className="
        rounded-xl
        border
        border-slate-200
        bg-slate-50
        p-4
        dark:border-white/10
        dark:bg-slate-950/40
      "
    >
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-2.5">

          <div
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-lg
              bg-white
              text-teal-600
              shadow-sm
              dark:bg-slate-900
              dark:text-teal-400
            "
          >
            <Icon className="h-4 w-4" />
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
              {module.name}
            </p>

            <p className="text-[11px] text-slate-400">
              Accuracy {module.accuracy}%
            </p>
          </div>

        </div>

        <div className="text-right">

          <p className="text-xl font-bold text-slate-900 dark:text-white">
            {module.score.toFixed(1)}
          </p>

          <div className="flex items-center justify-end gap-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
            <ArrowUpRight className="h-3 w-3" />
            +{difference.toFixed(1)}
          </div>

        </div>

      </div>

      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
        <div
          className="h-full rounded-full bg-teal-500"
          style={{
            width: `${(module.score / 9) * 100}%`,
          }}
        />
      </div>
    </article>
  );
};