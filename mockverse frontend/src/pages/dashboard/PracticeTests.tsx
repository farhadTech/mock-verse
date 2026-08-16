import { useMemo, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock3,
  Headphones,
  Mic,
  PenLine,
  Search,
  SlidersHorizontal,
  Target,
} from "lucide-react";

type TestCategory =
  | "all"
  | "full"
  | "listening"
  | "reading"
  | "writing"
  | "speaking";

type Difficulty =
  | "Beginner"
  | "Intermediate"
  | "Advanced";

interface PracticeTest {
  id: number;
  title: string;
  description: string;
  category: Exclude<TestCategory, "all">;
  difficulty: Difficulty;
  duration: string;
  questions: number;
  progress: number;
  completed: boolean;
  badge?: string;
}

const practiceTests: PracticeTest[] = [
  {
    id: 1,
    title: "IELTS Academic Mock Test 01",
    description:
      "Complete Academic IELTS simulation covering all four modules.",
    category: "full",
    difficulty: "Advanced",
    duration: "2h 50m",
    questions: 80,
    progress: 100,
    completed: true,
    badge: "Completed",
  },
  {
    id: 2,
    title: "IELTS Academic Mock Test 02",
    description:
      "A complete mock examination designed to simulate the real test experience.",
    category: "full",
    difficulty: "Advanced",
    duration: "2h 50m",
    questions: 80,
    progress: 35,
    completed: false,
    badge: "In Progress",
  },
  {
    id: 3,
    title: "IELTS Academic Mock Test 03",
    description:
      "Test your current level with a complete four-module examination.",
    category: "full",
    difficulty: "Advanced",
    duration: "2h 50m",
    questions: 80,
    progress: 0,
    completed: false,
  },
  {
    id: 4,
    title: "Listening Practice — Multiple Choice",
    description:
      "Improve your ability to identify key information in conversations and lectures.",
    category: "listening",
    difficulty: "Intermediate",
    duration: "25 min",
    questions: 20,
    progress: 0,
    completed: false,
  },
  {
    id: 5,
    title: "Listening Practice — Maps & Labelling",
    description:
      "Practice following directions and identifying locations accurately.",
    category: "listening",
    difficulty: "Intermediate",
    duration: "20 min",
    questions: 15,
    progress: 60,
    completed: false,
  },
  {
    id: 6,
    title: "Reading Practice — Matching Headings",
    description:
      "Develop your ability to identify the main ideas of paragraphs.",
    category: "reading",
    difficulty: "Advanced",
    duration: "30 min",
    questions: 15,
    progress: 0,
    completed: false,
  },
  {
    id: 7,
    title: "Reading Practice — True / False / Not Given",
    description:
      "Improve your accuracy when identifying information and claims in texts.",
    category: "reading",
    difficulty: "Intermediate",
    duration: "25 min",
    questions: 15,
    progress: 100,
    completed: true,
    badge: "Completed",
  },
  {
    id: 8,
    title: "Writing Task 1 — Academic",
    description:
      "Practice describing graphs, charts, tables, and diagrams.",
    category: "writing",
    difficulty: "Intermediate",
    duration: "20 min",
    questions: 1,
    progress: 0,
    completed: false,
  },
  {
    id: 9,
    title: "Writing Task 2 — Opinion Essay",
    description:
      "Practice developing clear arguments and supporting your ideas.",
    category: "writing",
    difficulty: "Advanced",
    duration: "40 min",
    questions: 1,
    progress: 0,
    completed: false,
  },
  {
    id: 10,
    title: "Speaking Part 2 — Long Turn",
    description:
      "Practice speaking continuously and organizing your response.",
    category: "speaking",
    difficulty: "Intermediate",
    duration: "15 min",
    questions: 3,
    progress: 0,
    completed: false,
  },
];

const categoryConfig: Record<
  Exclude<TestCategory, "all">,
  {
    label: string;
    icon: typeof BookOpen;
  }
> = {
  full: {
    label: "Full Mock",
    icon: Target,
  },
  listening: {
    label: "Listening",
    icon: Headphones,
  },
  reading: {
    label: "Reading",
    icon: BookOpen,
  },
  writing: {
    label: "Writing",
    icon: PenLine,
  },
  speaking: {
    label: "Speaking",
    icon: Mic,
  },
};

const difficultyStyles: Record<Difficulty, string> = {
  Beginner:
    "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400",

  Intermediate:
    "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400",

  Advanced:
    "bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-400",
};

const categories: {
  value: TestCategory;
  label: string;
}[] = [
  {
    value: "all",
    label: "All Practice",
  },
  {
    value: "full",
    label: "Full Mock Tests",
  },
  {
    value: "listening",
    label: "Listening",
  },
  {
    value: "reading",
    label: "Reading",
  },
  {
    value: "writing",
    label: "Writing",
  },
  {
    value: "speaking",
    label: "Speaking",
  },
];

const PracticeTests = () => {
  const [activeCategory, setActiveCategory] =
    useState<TestCategory>("all");

  const [searchQuery, setSearchQuery] =
    useState("");

  const [showCompleted, setShowCompleted] =
    useState(true);

  const filteredTests = useMemo(() => {
    return practiceTests.filter((test) => {
      const matchesCategory =
        activeCategory === "all" ||
        test.category === activeCategory;

      const matchesSearch =
        test.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        test.description
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

      const matchesCompleted =
        showCompleted || !test.completed;

      return (
        matchesCategory &&
        matchesSearch &&
        matchesCompleted
      );
    });
  }, [
    activeCategory,
    searchQuery,
    showCompleted,
  ]);

  return (
    <div className="space-y-6">

      {/* ================================================= */}
      {/* Page Header                                       */}
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
              <Target className="h-3.5 w-3.5" />
              IELTS Practice
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
              Practice Tests
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
              Build your IELTS skills with realistic mock
              tests and focused module practice.
            </p>
          </div>

          {/* Target Band */}

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
      {/* Quick Statistics                                  */}
      {/* ================================================= */}

      <section
        className="
          grid
          grid-cols-2
          gap-3
          sm:grid-cols-4
        "
      >
        <PracticeSummary
          label="Total Tests"
          value="10"
        />

        <PracticeSummary
          label="Completed"
          value="2"
        />

        <PracticeSummary
          label="In Progress"
          value="2"
        />

        <PracticeSummary
          label="Available"
          value="6"
        />
      </section>

      {/* ================================================= */}
      {/* Search + Filters                                  */}
      {/* ================================================= */}

      <section
        className="
          rounded-2xl
          border
          border-slate-200
          bg-white
          p-4
          shadow-sm
          dark:border-white/10
          dark:bg-slate-900/70
          sm:p-5
        "
      >
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">

          {/* Search */}

          <div className="relative w-full xl:max-w-sm">
            <Search
              className="
                absolute
                left-3
                top-1/2
                h-4
                w-4
                -translate-y-1/2
                text-slate-400
              "
            />

            <input
              type="text"
              value={searchQuery}
              onChange={(event) =>
                setSearchQuery(event.target.value)
              }
              placeholder="Search practice tests..."
              className="
                h-10
                w-full
                rounded-xl
                border
                border-slate-200
                bg-slate-50
                pl-9
                pr-3
                text-sm
                text-slate-900
                outline-none
                transition
                placeholder:text-slate-400
                focus:border-teal-400
                focus:ring-2
                focus:ring-teal-100
                dark:border-white/10
                dark:bg-slate-950/50
                dark:text-white
                dark:focus:border-teal-500
                dark:focus:ring-teal-500/10
              "
            />
          </div>

          {/* Completed Toggle */}

          <button
            type="button"
            onClick={() =>
              setShowCompleted(
                (current) => !current
              )
            }
            className="
              inline-flex
              h-10
              items-center
              gap-2
              rounded-xl
              border
              border-slate-200
              px-3
              text-sm
              font-medium
              text-slate-600
              transition
              hover:border-teal-200
              hover:text-teal-700
              dark:border-white/10
              dark:text-slate-300
              dark:hover:border-teal-500/30
              dark:hover:text-teal-400
            "
          >
            <SlidersHorizontal className="h-4 w-4" />

            {showCompleted
              ? "Showing completed"
              : "Hide completed"}
          </button>

        </div>

        {/* Category tabs */}

        <div
          className="
            mt-4
            flex
            gap-2
            overflow-x-auto
            pb-1
          "
        >
          {categories.map((category) => {
            const active =
              activeCategory ===
              category.value;

            return (
              <button
                key={category.value}
                type="button"
                onClick={() =>
                  setActiveCategory(
                    category.value
                  )
                }
                className={`
                  whitespace-nowrap
                  rounded-lg
                  px-3
                  py-2
                  text-xs
                  font-semibold
                  transition
                  ${
                    active
                      ? "bg-teal-600 text-white shadow-sm"
                      : "bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-slate-200"
                  }
                `}
              >
                {category.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* ================================================= */}
      {/* Test Grid                                         */}
      {/* ================================================= */}

      <section>

        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              {activeCategory === "all"
                ? "All Practice"
                : categories.find(
                    (category) =>
                      category.value ===
                      activeCategory
                  )?.label}
            </h2>

            <p className="mt-1 text-xs text-slate-400">
              {filteredTests.length} practice{" "}
              {filteredTests.length === 1
                ? "test"
                : "tests"}{" "}
              available
            </p>
          </div>
        </div>

        {filteredTests.length > 0 ? (
          <div
            className="
              grid
              grid-cols-1
              gap-5
              lg:grid-cols-2
            "
          >
            {filteredTests.map((test) => (
              <PracticeTestCard
                key={test.id}
                test={test}
              />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}

      </section>
    </div>
  );
};

export default PracticeTests;

/* ========================================================= */
/* Practice Summary                                           */
/* ========================================================= */

interface PracticeSummaryProps {
  label: string;
  value: string;
}

const PracticeSummary = ({
  label,
  value,
}: PracticeSummaryProps) => {
  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-4
        shadow-sm
        dark:border-white/10
        dark:bg-slate-900/70
      "
    >
      <p className="text-xs text-slate-400">
        {label}
      </p>

      <p className="mt-1 text-xl font-bold text-slate-900 dark:text-white">
        {value}
      </p>
    </div>
  );
};

/* ========================================================= */
/* Practice Test Card                                         */
/* ========================================================= */

interface PracticeTestCardProps {
  test: PracticeTest;
}

const PracticeTestCard = ({
  test,
}: PracticeTestCardProps) => {
  const config =
    categoryConfig[test.category];

  const Icon = config.icon;

  return (
    <article
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-200
        hover:-translate-y-0.5
        hover:border-teal-200
        hover:shadow-md
        dark:border-white/10
        dark:bg-slate-900/70
        dark:hover:border-teal-500/30
      "
    >
      {/* Card top */}

      <div className="p-5">

        <div className="flex items-start gap-4">

          {/* Icon */}

          <div
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-teal-50
              text-teal-600
              dark:bg-teal-500/10
              dark:text-teal-400
            "
          >
            <Icon className="h-5 w-5" />
          </div>

          {/* Title */}

          <div className="min-w-0 flex-1">

            <div className="flex flex-wrap items-center gap-2">

              <span
                className="
                  rounded-full
                  bg-slate-100
                  px-2
                  py-1
                  text-[10px]
                  font-semibold
                  text-slate-500
                  dark:bg-slate-800
                  dark:text-slate-400
                "
              >
                {config.label}
              </span>

              {test.badge && (
                <span
                  className={`
                    rounded-full
                    px-2
                    py-1
                    text-[10px]
                    font-semibold
                    ${
                      test.completed
                        ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400"
                        : "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400"
                    }
                  `}
                >
                  {test.badge}
                </span>
              )}

            </div>

            <h3
              className="
                mt-2
                text-base
                font-bold
                leading-6
                text-slate-900
                dark:text-white
              "
            >
              {test.title}
            </h3>

            <p
              className="
                mt-1
                text-xs
                leading-5
                text-slate-500
                dark:text-slate-400
              "
            >
              {test.description}
            </p>

          </div>
        </div>

        {/* Meta */}

        <div
          className="
            mt-5
            flex
            flex-wrap
            gap-3
            text-xs
            text-slate-500
            dark:text-slate-400
          "
        >
          <span className="inline-flex items-center gap-1.5">
            <Clock3 className="h-3.5 w-3.5" />
            {test.duration}
          </span>

          <span className="inline-flex items-center gap-1.5">
            <BookOpen className="h-3.5 w-3.5" />
            {test.questions}{" "}
            {test.questions === 1
              ? "task"
              : "questions"}
          </span>

          <span
            className={`
              rounded-full
              px-2
              py-1
              ${difficultyStyles[test.difficulty]}
            `}
          >
            {test.difficulty}
          </span>
        </div>

        {/* Progress */}

        {test.progress > 0 &&
          !test.completed && (
            <div className="mt-5">

              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  Progress
                </span>

                <span className="text-xs font-semibold text-teal-600 dark:text-teal-400">
                  {test.progress}%
                </span>
              </div>

              <div className="h-1.5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                <div
                  className="
                    h-full
                    rounded-full
                    bg-teal-500
                    transition-all
                  "
                  style={{
                    width: `${test.progress}%`,
                  }}
                />
              </div>

            </div>
          )}

      </div>

      {/* Footer */}

      <div
        className="
          flex
          items-center
          justify-between
          border-t
          border-slate-100
          bg-slate-50/70
          px-5
          py-3
          dark:border-white/10
          dark:bg-slate-950/30
        "
      >
        <div className="flex items-center gap-2">
          {test.completed ? (
            <>
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />

              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Completed
              </span>
            </>
          ) : (
            <>
              <Clock3 className="h-4 w-4 text-slate-400" />

              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Ready to practice
              </span>
            </>
          )}
        </div>

        <button
          type="button"
          className="
            inline-flex
            items-center
            gap-1.5
            rounded-lg
            bg-teal-600
            px-3
            py-2
            text-xs
            font-semibold
            text-white
            shadow-sm
            transition
            hover:bg-teal-700
            focus:outline-none
            focus:ring-2
            focus:ring-teal-500/30
            dark:bg-teal-500
            dark:hover:bg-teal-400
          "
        >
          {test.completed
            ? "Review"
            : test.progress > 0
              ? "Continue"
              : "Start Test"}

          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </article>
  );
};

/* ========================================================= */
/* Empty State                                                 */
/* ========================================================= */

const EmptyState = () => {
  return (
    <div
      className="
        flex
        min-h-[280px]
        flex-col
        items-center
        justify-center
        rounded-2xl
        border
        border-dashed
        border-slate-200
        bg-white
        px-6
        text-center
        dark:border-white/10
        dark:bg-slate-900/50
      "
    >
      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          bg-slate-100
          text-slate-400
          dark:bg-slate-800
        "
      >
        <Search className="h-5 w-5" />
      </div>

      <h3 className="mt-4 text-sm font-semibold text-slate-900 dark:text-white">
        No practice tests found
      </h3>

      <p className="mt-1 max-w-sm text-xs leading-5 text-slate-400">
        Try changing your search or selecting a
        different practice category.
      </p>
    </div>
  );
};
