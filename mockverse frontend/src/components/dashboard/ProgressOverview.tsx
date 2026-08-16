import {
  ArrowUpRight,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";

import ProgressChart from "./ProgressChart";

const ProgressOverview = () => {
  const progressData = [
    {
      test: "T1",
      score: 6.0,
    },
    {
      test: "T2",
      score: 6.5,
    },
    {
      test: "T3",
      score: 6.5,
    },
    {
      test: "T4",
      score: 7.0,
    },
    {
      test: "T5",
      score: 6.5,
    },
    {
      test: "T6",
      score: 7.0,
    },
    {
      test: "T7",
      score: 7.0,
    },
    {
      test: "T8",
      score: 7.5,
    },
  ];

  return (
    <section
      className="
        rounded-2xl
        border
        border-slate-200/80
        bg-white/95
        p-5
        shadow-sm
        backdrop-blur-sm
        sm:p-6
      "
    >
      {/* Header */}

      <div className="flex items-start justify-between">

        <div className="flex items-center gap-3">

          <div
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-xl
              bg-emerald-50
              text-emerald-600
            "
          >
            <BarChart3 size={18} />
          </div>

          <div>
            <h2 className="text-sm font-semibold text-slate-900">
              Progress Overview
            </h2>

            <p className="mt-1 text-xs text-slate-400">
              Your recent band score progression
            </p>
          </div>

        </div>

        <Link
          to="/dashboard/analytics"
          className="
            inline-flex
            items-center
            gap-1
            text-xs
            font-semibold
            text-emerald-600
            transition-colors
            hover:text-emerald-700
          "
        >
          Details
          <ArrowUpRight size={14} />
        </Link>

      </div>

      {/* Score */}

      <div className="mt-6 flex items-end gap-2">

        <span
          className="
            text-3xl
            font-bold
            tracking-tight
            text-slate-900
          "
        >
          7.0
        </span>

        <span
          className="
            mb-1
            rounded-full
            bg-emerald-50
            px-2
            py-1
            text-[11px]
            font-semibold
            text-emerald-600
          "
        >
          +0.5
        </span>

        <span className="mb-1 text-xs text-slate-400">
          overall
        </span>

      </div>

      {/* D3 Chart */}

      <div className="mt-4">
        <ProgressChart
          data={progressData}
        />
      </div>

      {/* Footer */}

      <div
        className="
          mt-3
          flex
          items-center
          justify-between
          border-t
          border-slate-100
          pt-4
        "
      >
        <div>
          <p className="text-xs text-slate-400">
            Target band
          </p>

          <p className="mt-1 text-sm font-semibold text-slate-700">
            8.0
          </p>
        </div>

        <div className="text-right">
          <p className="text-xs text-slate-400">
            Improvement
          </p>

          <p className="mt-1 text-sm font-semibold text-emerald-600">
            +1.5 bands
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProgressOverview;

