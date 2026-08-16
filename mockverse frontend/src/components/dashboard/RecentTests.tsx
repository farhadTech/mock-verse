import {
  ArrowRight,
  CheckCircle2,
  Clock3,
} from "lucide-react";
import { Link } from "react-router-dom";

const RecentTests = () => {
  const tests = [
    {
      name: "Cambridge IELTS 21 — Test 1",
      type: "Academic",
      date: "16 Aug 2026",
      score: "7.0",
      duration: "2h 45m",
    },
    {
      name: "Cambridge IELTS 20 — Test 4",
      type: "Academic",
      date: "12 Aug 2026",
      score: "6.5",
      duration: "2h 38m",
    },
    {
      name: "Cambridge IELTS 20 — Test 3",
      type: "Academic",
      date: "09 Aug 2026",
      score: "7.0",
      duration: "2h 41m",
    },
  ];

  return (
    <section
      className="
        rounded-2xl
        border
        border-slate-200/80
        bg-white
        p-5
        shadow-sm
        sm:p-6
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-sm font-semibold text-slate-900">
            Recent Tests
          </h2>

          <p className="mt-1 text-xs text-slate-400">
            Your latest practice sessions
          </p>
        </div>

        <Link
          to="/dashboard/history"
          className="
            flex
            items-center
            gap-1
            text-xs
            font-semibold
            text-emerald-600
            hover:text-emerald-700
          "
        >
          View all
          <ArrowRight size={13} />
        </Link>

      </div>

      {/* Tests */}
      <div className="mt-5 divide-y divide-slate-100">

        {tests.map((test) => (
          <div
            key={test.name}
            className="
              flex
              flex-col
              gap-3
              py-4
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >

            {/* Test information */}
            <div className="flex min-w-0 items-center gap-3">

              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-emerald-50
                  text-emerald-600
                "
              >
                <CheckCircle2 size={18} />
              </div>

              <div className="min-w-0">

                <p className="truncate text-sm font-semibold text-slate-800">
                  {test.name}
                </p>

                <div className="mt-1 flex flex-wrap items-center gap-2">

                  <span className="text-xs text-slate-400">
                    {test.type}
                  </span>

                  <span className="h-1 w-1 rounded-full bg-slate-300" />

                  <span className="text-xs text-slate-400">
                    {test.date}
                  </span>

                </div>

              </div>
            </div>

            {/* Score */}
            <div className="flex items-center gap-5 sm:shrink-0">

              <div className="hidden items-center gap-1.5 text-xs text-slate-400 sm:flex">
                <Clock3 size={13} />
                {test.duration}
              </div>

              <div className="text-right">
                <p className="text-xs text-slate-400">
                  Overall
                </p>

                <p className="text-base font-bold text-slate-800">
                  {test.score}
                </p>
              </div>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default RecentTests;
