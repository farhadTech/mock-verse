import {
  BookOpen,
  Headphones,
  Lightbulb,
  Mic,
  PenLine,
  SpellCheck,
  Target,
} from "lucide-react";

interface ResourceCategoryProps {
  categories: string[];

  activeCategory: string;

  onCategoryChange: (
    category: string
  ) => void;
}

const getCategoryIcon = (
  category: string
) => {
  switch (category) {
    case "Listening":
      return Headphones;

    case "Reading":
      return BookOpen;

    case "Writing":
      return PenLine;

    case "Speaking":
      return Mic;

    case "Grammar":
      return SpellCheck;

    case "Vocabulary":
      return BookOpen;

    case "Strategy":
      return Lightbulb;

    default:
      return Target;
  }
};

const ResourceCategory = ({
  categories,
  activeCategory,
  onCategoryChange,
}: ResourceCategoryProps) => {
  return (
    <div
      className="
        flex
        gap-2
        overflow-x-auto
        pb-1
        scrollbar-none
      "
    >
      {categories.map((category) => {
        const active =
          activeCategory === category;

        const Icon =
          getCategoryIcon(category);

        return (
          <button
            key={category}
            type="button"
            onClick={() =>
              onCategoryChange(category)
            }
            className={`
              inline-flex
              shrink-0
              items-center
              gap-1.5
              rounded-lg
              px-3.5
              py-2
              text-xs
              font-semibold
              transition
              ${
                active
                  ? `
                    bg-teal-600
                    text-white
                    shadow-sm
                  `
                  : `
                    bg-slate-50
                    text-slate-500
                    hover:bg-teal-50
                    hover:text-teal-700
                    dark:bg-slate-950/50
                    dark:text-slate-400
                    dark:hover:bg-teal-500/10
                    dark:hover:text-teal-400
                  `
              }
            `}
          >
            <Icon className="h-3.5 w-3.5" />

            {category}
          </button>
        );
      })}
    </div>
  );
};

export default ResourceCategory;