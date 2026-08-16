import {
  BarChart3,
  BookOpenCheck,
  Clock3,
  Flame,
  TrendingUp,
} from "lucide-react";

type StatsCardType =
  | "band"
  | "tests"
  | "time"
  | "streak";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  description: string;
  type: StatsCardType;
}

const StatsCard = ({
  title,
  value,
  change,
  description,
  type,
}: StatsCardProps) => {

  const getIcon = () => {
    switch (type) {
      case "band":
        return <BarChart3 size={19} />;

      case "tests":
        return <BookOpenCheck size={19} />;

      case "time":
        return <Clock3 size={19} />;

      case "streak":
        return <Flame size={19} />;

      default:
        return <TrendingUp size={19} />;
    }
  };

  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-200/80
        bg-white
        p-5
        shadow-sm
        transition-all
        duration-200
        hover:-translate-y-0.5
        hover:shadow-md
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between">

        <p className="text-sm font-medium text-slate-500">
          {title}
        </p>

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
          {getIcon()}
        </div>

      </div>

      {/* Value */}
      <div className="mt-5 flex items-end gap-2">

        <span className="text-2xl font-bold tracking-tight text-slate-900">
          {value}
        </span>

        <span
          className="
            mb-0.5
            inline-flex
            items-center
            gap-1
            rounded-full
            bg-emerald-50
            px-2
            py-1
            text-[11px]
            font-semibold
            text-emerald-600
          "
        >
          <TrendingUp size={11} />
          {change}
        </span>

      </div>

      {/* Description */}
      <p className="mt-2 text-xs text-slate-400">
        {description}
      </p>
    </div>
  );
};

export default StatsCard;
