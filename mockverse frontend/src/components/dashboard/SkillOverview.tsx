import {
  ArrowRight,
  Headphones,
  Mic2,
  PenLine,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";

const SkillOverview = () => {
  const skills = [
    {
      name: "Listening",
      score: "7.5",
      percentage: 75,
      icon: Headphones,
    },
    {
      name: "Reading",
      score: "7.0",
      percentage: 70,
      icon: BookOpen,
    },
    {
      name: "Writing",
      score: "6.5",
      percentage: 65,
      icon: PenLine,
    },
    {
      name: "Speaking",
      score: "7.0",
      percentage: 70,
      icon: Mic2,
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
      <div className="flex items-start justify-between">

        <div>
          <h2 className="text-sm font-semibold text-slate-900">
            Skill Overview
          </h2>

          <p className="mt-1 text-xs text-slate-400">
            Your current performance
          </p>
        </div>

        <Link
          to="/dashboard/analytics"
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
          Details
          <ArrowRight size={13} />
        </Link>

      </div>

      {/* Skills */}
      <div className="mt-6 space-y-5">

        {skills.map((skill) => {
          const Icon = skill.icon;

          return (
            <div key={skill.name}>

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-2">

                  <div
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-lg
                      bg-slate-50
                      text-slate-500
                    "
                  >
                    <Icon size={15} />
                  </div>

                  <span className="text-xs font-medium text-slate-600">
                    {skill.name}
                  </span>

                </div>

                <span className="text-sm font-semibold text-slate-800">
                  {skill.score}
                </span>

              </div>

              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">

                <div
                  className="
                    h-full
                    rounded-full
                    bg-emerald-500
                    transition-all
                    duration-500
                  "
                  style={{
                    width: `${skill.percentage}%`,
                  }}
                />

              </div>

            </div>
          );
        })}

      </div>

      {/* Recommendation */}
      <div
        className="
          mt-6
          rounded-xl
          border
          border-amber-100
          bg-amber-50/60
          p-4
        "
      >
        <p className="text-xs font-semibold text-amber-800">
          Focus area
        </p>

        <p className="mt-1 text-xs leading-5 text-amber-700">
          Writing is currently your lowest-scoring
          skill. A little extra practice could make
          the biggest difference.
        </p>
      </div>
    </section>
  );
};

export default SkillOverview;
