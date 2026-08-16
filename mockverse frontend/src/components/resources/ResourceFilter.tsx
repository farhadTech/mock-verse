import {
  FileText,
  Headphones,
  PenLine,
  PlayCircle,
  SlidersHorizontal,
} from "lucide-react";

interface ResourceFiltersProps {
  types: string[];

  activeType: string;

  onTypeChange: (
    type: string
  ) => void;
}

const getTypeIcon = (
  type: string
) => {
  switch (type) {
    case "PDF":
      return FileText;

    case "Audio":
      return Headphones;

    case "Video":
      return PlayCircle;

    case "Practice":
      return PenLine;

    default:
      return SlidersHorizontal;
  }
};

const ResourceFilters = ({
  types,
  activeType,
  onTypeChange,
}: ResourceFiltersProps) => {
  return (
    <div
      className="
        flex
        flex-wrap
        items-center
        gap-2
        border-t
        border-slate-100
        pt-4
        dark:border-white/5
      "
    >

      <div
        className="
          mr-1
          flex
          items-center
          gap-1.5
          text-xs
          font-semibold
          text-slate-400
        "
      >
        <SlidersHorizontal className="h-3.5 w-3.5" />

        Type
      </div>

      {types.map((type) => {
        const active =
          activeType === type;

        const Icon =
          getTypeIcon(type);

        return (
          <button
            key={type}
            type="button"
            onClick={() =>
              onTypeChange(type)
            }
            className={`
              inline-flex
              items-center
              gap-1.5
              rounded-lg
              border
              px-3
              py-1.5
              text-xs
              font-medium
              transition
              ${
                active
                  ? `
                    border-teal-500
                    bg-teal-50
                    text-teal-700
                    dark:border-teal-500/30
                    dark:bg-teal-500/10
                    dark:text-teal-400
                  `
                  : `
                    border-slate-200
                    bg-white
                    text-slate-500
                    hover:border-teal-200
                    hover:text-teal-600
                    dark:border-white/10
                    dark:bg-slate-950/40
                    dark:text-slate-400
                  `
              }
            `}
          >
            {type !== "All Types" && (
              <Icon className="h-3.5 w-3.5" />
            )}

            {type}
          </button>
        );
      })}

    </div>
  );
};

export default ResourceFilters;