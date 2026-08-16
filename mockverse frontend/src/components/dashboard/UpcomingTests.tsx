import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Headphones,
  BookOpen,
  PenLine,
  Mic,
} from "lucide-react";

type TestType = "full" | "listening" | "reading" | "writing" | "speaking";

interface UpcomingTest {
  id: number;
  title: string;
  type: TestType;
  date: string;
  time: string;
  duration: string;
}

const upcomingTests: UpcomingTest[] = [
  {
    id: 1,
    title: "IELTS Academic Mock Test 03",
    type: "full",
    date: "Aug 18, 2026",
    time: "10:00 AM",
    duration: "2h 50m",
  },
  {
    id: 2,
    title: "Listening Practice — Section 3",
    type: "listening",
    date: "Aug 20, 2026",
    time: "7:30 PM",
    duration: "30 min",
  },
  {
    id: 3,
    title: "Writing Task 2 Practice",
    type: "writing",
    date: "Aug 22, 2026",
    time: "8:00 PM",
    duration: "40 min",
  },
];

const typeConfig: Record<
  TestType,
  {
    label: string;
    icon: typeof Headphones;
  }
> = {
  full: {
    label: "Full Mock",
    icon: BookOpen,
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

const UpcomingTests = () => {
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
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
            Your schedule
          </p>

          <h2 className="mt-1 text-lg font-bold text-slate-900 dark:text-white">
            Upcoming Tests
          </h2>
        </div>

        <button
          type="button"
          className="
            inline-flex
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
          View all
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      {/* Tests */}
      <div className="space-y-3">
        {upcomingTests.map((test) => {
          const config = typeConfig[test.type];
          const Icon = config.icon;

          return (
            <article
              key={test.id}
              className="
                group
                rounded-xl
                border border-slate-200
                bg-slate-50
                p-4
                transition
                hover:border-teal-200
                hover:bg-teal-50/40
                dark:border-white/10
                dark:bg-slate-950/40
                dark:hover:border-teal-500/30
                dark:hover:bg-teal-500/5
              "
            >
              <div className="flex gap-3">
                {/* Icon */}
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-teal-100
                    text-teal-700
                    dark:bg-teal-500/10
                    dark:text-teal-400
                  "
                >
                  <Icon className="h-5 w-5" />
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <h3
                        className="
                          truncate
                          text-sm
                          font-semibold
                          text-slate-900
                          dark:text-white
                        "
                      >
                        {test.title}
                      </h3>

                      <span
                        className="
                          mt-1
                          inline-flex
                          rounded-full
                          bg-teal-100
                          px-2
                          py-0.5
                          text-[11px]
                          font-medium
                          text-teal-700
                          dark:bg-teal-500/10
                          dark:text-teal-400
                        "
                      >
                        {config.label}
                      </span>
                    </div>

                    <button
                      type="button"
                      aria-label={`Start ${test.title}`}
                      className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        border border-slate-200
                        bg-white
                        text-slate-500
                        transition
                        hover:border-teal-300
                        hover:bg-teal-600
                        hover:text-white
                        dark:border-white/10
                        dark:bg-slate-900
                        dark:text-slate-400
                        dark:hover:border-teal-500
                        dark:hover:bg-teal-500
                      "
                    >
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Meta */}
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-500 dark:text-slate-400">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {test.date}
                    </span>

                    <span className="inline-flex items-center gap-1.5">
                      <Clock3 className="h-3.5 w-3.5" />
                      {test.time}
                    </span>

                    <span>{test.duration}</span>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default UpcomingTests;