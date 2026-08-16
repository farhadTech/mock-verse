import {
  ArrowRight,
  BookOpen,
  Headphones,
  Mic,
  PenLine,
  Target,
} from "lucide-react";

type PracticeType = "listening" | "reading" | "writing" | "speaking";

interface PracticeRecommendation {
  id: number;
  title: string;
  description: string;
  type: PracticeType;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  reason: string;
}

const recommendations: PracticeRecommendation[] = [
  {
    id: 1,
    title: "Writing Task 2 — Opinion Essays",
    description:
      "Practice building clear arguments and stronger topic sentences.",
    type: "writing",
    difficulty: "Advanced",
    duration: "40 min",
    reason: "Improve your lowest skill",
  },
  {
    id: 2,
    title: "Listening — Multiple Choice",
    description:
      "Train your ability to identify key details in academic conversations.",
    type: "listening",
    difficulty: "Intermediate",
    duration: "25 min",
    reason: "Based on recent mistakes",
  },
  {
    id: 3,
    title: "Reading — Matching Headings",
    description:
      "Practice identifying the main idea and structure of paragraphs.",
    type: "reading",
    difficulty: "Advanced",
    duration: "30 min",
    reason: "Recommended for your target band",
  },
  {
    id: 4,
    title: "Speaking Part 2 — Long Turn",
    description:
      "Practice speaking continuously and organizing your response.",
    type: "speaking",
    difficulty: "Intermediate",
    duration: "15 min",
    reason: "Keep your speaking progress",
  },
];

const typeConfig: Record<
  PracticeType,
  {
    icon: typeof Headphones;
  }
> = {
  listening: {
    icon: Headphones,
  },
  reading: {
    icon: BookOpen,
  },
  writing: {
    icon: PenLine,
  },
  speaking: {
    icon: Mic,
  },
};

const difficultyStyles: Record<
  PracticeRecommendation["difficulty"],
  string
> = {
  Beginner:
    "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400",

  Intermediate:
    "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400",

  Advanced:
    "bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-400",
};

const RecommendedPractice = () => {
  return (
    <section
      className="
        rounded-2xl
        border border-slate-200
        bg-white
        p-5
        shadow-sm
        dark:border-white/10
        dark:bg-slate-900/70
      "
    >
      {/* Header */}
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <div
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-lg
                bg-teal-100
                text-teal-700
                dark:bg-teal-500/10
                dark:text-teal-400
              "
            >
              <Target className="h-4 w-4" />
            </div>

            <p className="text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
              Personalized for you
            </p>
          </div>

          <h2 className="mt-2 text-lg font-bold text-slate-900 dark:text-white">
            Recommended Practice
          </h2>

          <p className="mt-1 max-w-2xl text-sm text-slate-500 dark:text-slate-400">
            Focused exercises based on your recent performance and target band.
          </p>
        </div>

        <button
          type="button"
          className="
            inline-flex
            shrink-0
            items-center
            gap-1
            text-sm
            font-semibold
            text-teal-600
            transition
            hover:text-teal-700
            dark:text-teal-400
            dark:hover:text-teal-300
          "
        >
          View practice
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      {/* Recommendation Grid */}
      <div
        className="
          grid
          grid-cols-1
          gap-4
          md:grid-cols-2
        "
      >
        {recommendations.map((item) => {
          const config = typeConfig[item.type];
          const Icon = config.icon;

          return (
            <article
              key={item.id}
              className="
                group
                relative
                overflow-hidden
                rounded-xl
                border border-slate-200
                bg-slate-50
                p-4
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:border-teal-200
                hover:shadow-md
                dark:border-white/10
                dark:bg-slate-950/40
                dark:hover:border-teal-500/30
              "
            >
              {/* Top */}
              <div className="flex items-start gap-3">
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-white
                    text-teal-700
                    shadow-sm
                    dark:bg-slate-900
                    dark:text-teal-400
                  "
                >
                  <Icon className="h-5 w-5" />
                </div>

                <div className="min-w-0 flex-1">
                  <h3
                    className="
                      text-sm
                      font-semibold
                      leading-5
                      text-slate-900
                      dark:text-white
                    "
                  >
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Reason */}
              <div
                className="
                  mt-4
                  rounded-lg
                  border
                  border-teal-100
                  bg-teal-50
                  px-3
                  py-2
                  text-xs
                  text-teal-700
                  dark:border-teal-500/10
                  dark:bg-teal-500/5
                  dark:text-teal-400
                "
              >
                <span className="font-semibold">Why:</span> {item.reason}
              </div>

              {/* Footer */}
              <div className="mt-4 flex items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`
                      rounded-full
                      px-2
                      py-1
                      text-[11px]
                      font-medium
                      ${difficultyStyles[item.difficulty]}
                    `}
                  >
                    {item.difficulty}
                  </span>

                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {item.duration}
                  </span>
                </div>

                <button
                  type="button"
                  className="
                    inline-flex
                    items-center
                    gap-1
                    rounded-lg
                    px-2.5
                    py-1.5
                    text-xs
                    font-semibold
                    text-teal-700
                    transition
                    hover:bg-teal-100
                    dark:text-teal-400
                    dark:hover:bg-teal-500/10
                  "
                >
                  Practice
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default RecommendedPractice;