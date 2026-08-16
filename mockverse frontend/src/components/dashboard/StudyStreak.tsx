import {
  Flame,
  Trophy,
} from "lucide-react";

const StudyStreak = () => {
  const days = [
    { day: "M", active: true },
    { day: "T", active: true },
    { day: "W", active: true },
    { day: "T", active: true },
    { day: "F", active: true },
    { day: "S", active: false },
    { day: "S", active: false },
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
      <div className="flex items-center gap-3">

        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            bg-orange-50
            text-orange-500
          "
        >
          <Flame size={20} />
        </div>

        <div>
          <h2 className="text-sm font-semibold text-slate-900">
            Study Streak
          </h2>

          <p className="mt-0.5 text-xs text-slate-400">
            Keep the momentum going
          </p>
        </div>

      </div>

      {/* Streak */}
      <div className="mt-7 text-center">

        <div className="flex items-center justify-center gap-2">

          <span className="text-4xl font-bold tracking-tight text-slate-900">
            5
          </span>

          <span className="text-sm font-medium text-slate-500">
            days
          </span>

        </div>

        <p className="mt-1 text-xs text-slate-400">
          Current streak
        </p>

      </div>

      {/* Days */}
      <div className="mt-7 flex justify-between">

        {days.map((item, index) => (
          <div
            key={`${item.day}-${index}`}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[10px] font-medium text-slate-400">
              {item.day}
            </span>

            <div
              className={`
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                text-xs
                font-semibold
                ${
                  item.active
                    ? "bg-emerald-500 text-white"
                    : "bg-slate-100 text-slate-300"
                }
              `}
            >
              {item.active ? "✓" : ""}
            </div>
          </div>
        ))}

      </div>

      {/* Best streak */}
      <div
        className="
          mt-7
          flex
          items-center
          gap-3
          rounded-xl
          bg-slate-50
          p-3
        "
      >
        <Trophy
          size={17}
          className="text-amber-500"
        />

        <div>
          <p className="text-xs font-semibold text-slate-700">
            Personal best
          </p>

          <p className="mt-0.5 text-[11px] text-slate-400">
            14 consecutive days
          </p>
        </div>

      </div>
    </section>
  );
};

export default StudyStreak;
