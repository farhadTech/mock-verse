import {
  ArrowRight,
  BookOpen,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const WelcomeCard = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-2xl
        border
        border-emerald-100
        bg-white
        p-6
        shadow-sm
        sm:p-8
      "
    >
      {/* Decorative background */}
      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-64
          w-64
          rounded-full
          bg-emerald-100/50
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-24
          right-32
          h-48
          w-48
          rounded-full
          bg-teal-100/40
          blur-3xl
        "
      />

      <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        {/* Content */}
        <div className="max-w-2xl">

          <div className="mb-3 flex items-center gap-2">
            <div
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-lg
                bg-emerald-50
                text-emerald-600
              "
            >
              <Sparkles size={16} />
            </div>

            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-600">
              Keep progressing
            </span>
          </div>

          <h2
            className="
              text-2xl
              font-bold
              tracking-tight
              text-slate-900
              sm:text-3xl
            "
          >
            Good morning, Farhad 👋
          </h2>

          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
            Ready to continue your IELTS preparation?
            Keep practicing and turn your progress into
            your target band score.
          </p>

          {/* Actions */}
          <div className="mt-6 flex flex-wrap gap-3">

            <Link
              to="/dashboard/tests"
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-emerald-600
                px-4
                py-2.5
                text-sm
                font-semibold
                text-white
                shadow-sm
                shadow-emerald-200
                transition-all
                hover:bg-emerald-700
                hover:shadow-md
              "
            >
              <BookOpen size={17} />

              Start Practice

              <ArrowRight size={16} />
            </Link>

            <Link
              to="/dashboard/analytics"
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-slate-200
                bg-white
                px-4
                py-2.5
                text-sm
                font-semibold
                text-slate-700
                transition-colors
                hover:bg-slate-50
              "
            >
              View Progress
            </Link>

          </div>
        </div>

        {/* Current score */}
        <div
          className="
            w-full
            max-w-[220px]
            rounded-2xl
            border
            border-slate-100
            bg-slate-50/80
            p-5
          "
        >
          <p className="text-xs font-medium text-slate-400">
            Estimated overall band
          </p>

          <div className="mt-2 flex items-end gap-2">
            <span className="text-4xl font-bold tracking-tight text-slate-900">
              7.0
            </span>

            <span className="mb-1 rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-600">
              +0.5
            </span>
          </div>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200">
            <div className="h-full w-[70%] rounded-full bg-emerald-500" />
          </div>

          <p className="mt-2 text-xs text-slate-400">
            Target band: 8.0
          </p>
        </div>

      </div>
    </section>
  );
};

export default WelcomeCard;