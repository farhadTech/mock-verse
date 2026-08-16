import {
  ArrowRight,
  BookOpen,
  Bookmark,
  Clock3,
  FileText,
  Headphones,
  PenLine,
  PlayCircle,
  Star,
} from "lucide-react";

import type {
  Resource,
  ResourceType,
} from "../../data/resources";

interface ResourceCardProps {
  resource: Resource;

  bookmarked: boolean;

  onBookmark: () => void;

  onOpen: () => void;
}

/* ========================================================= */
/* Resource Icon                                               */
/* ========================================================= */

const getResourceIcon = (
  type: ResourceType
) => {
  switch (type) {
    case "Audio":
      return Headphones;

    case "Video":
      return PlayCircle;

    case "PDF":
      return FileText;

    case "Article":
      return BookOpen;

    case "Practice":
      return PenLine;

    default:
      return FileText;
  }
};

/* ========================================================= */
/* Resource Color                                              */
/* ========================================================= */

const getResourceColor = (
  type: ResourceType
) => {
  switch (type) {
    case "Audio":
      return `
        bg-violet-50
        text-violet-600
        dark:bg-violet-500/10
        dark:text-violet-400
      `;

    case "Video":
      return `
        bg-rose-50
        text-rose-600
        dark:bg-rose-500/10
        dark:text-rose-400
      `;

    case "PDF":
      return `
        bg-blue-50
        text-blue-600
        dark:bg-blue-500/10
        dark:text-blue-400
      `;

    case "Article":
      return `
        bg-teal-50
        text-teal-600
        dark:bg-teal-500/10
        dark:text-teal-400
      `;

    case "Practice":
      return `
        bg-amber-50
        text-amber-600
        dark:bg-amber-500/10
        dark:text-amber-400
      `;

    default:
      return `
        bg-slate-100
        text-slate-600
        dark:bg-slate-800
        dark:text-slate-400
      `;
  }
};

/* ========================================================= */
/* Component                                                   */
/* ========================================================= */

const ResourceCard = ({
  resource,
  bookmarked,
  onBookmark,
  onOpen,
}: ResourceCardProps) => {
  const Icon = getResourceIcon(resource.type);

  return (
    <article
      className="
        group
        relative
        flex
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-teal-200
        hover:shadow-lg
        dark:border-white/10
        dark:bg-slate-900/70
        dark:hover:border-teal-500/30
      "
    >

      {/* ================================================= */}
      {/* Main Content                                      */}
      {/* ================================================= */}

      <div className="p-5">

        {/* Icon + Bookmark */}

        <div className="flex items-start justify-between gap-3">

          <div
            className={`
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              ${getResourceColor(resource.type)}
            `}
          >
            <Icon className="h-5 w-5" />
          </div>

          <button
            type="button"
            onClick={onBookmark}
            className={`
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-lg
              transition
              ${
                bookmarked
                  ? `
                    bg-amber-50
                    text-amber-500
                    dark:bg-amber-500/10
                  `
                  : `
                    text-slate-400
                    hover:bg-slate-100
                    hover:text-slate-600
                    dark:hover:bg-slate-800
                  `
              }
            `}
            aria-label={
              bookmarked
                ? "Remove bookmark"
                : "Bookmark resource"
            }
          >
            <Bookmark
              className="h-4 w-4"
              fill={
                bookmarked
                  ? "currentColor"
                  : "none"
              }
            />
          </button>

        </div>

        {/* Tags */}

        <div className="mt-4 flex flex-wrap gap-2">

          <span
            className="
              rounded-md
              bg-slate-100
              px-2
              py-1
              text-[10px]
              font-semibold
              text-slate-500
              dark:bg-slate-800
              dark:text-slate-400
            "
          >
            {resource.module}
          </span>

          <span
            className="
              rounded-md
              bg-teal-50
              px-2
              py-1
              text-[10px]
              font-semibold
              text-teal-700
              dark:bg-teal-500/10
              dark:text-teal-400
            "
          >
            {resource.difficulty}
          </span>

        </div>

        {/* Title */}

        <h3
          className="
            mt-4
            line-clamp-2
            text-base
            font-bold
            leading-6
            text-slate-900
            dark:text-white
          "
        >
          {resource.title}
        </h3>

        {/* Description */}

        <p
          className="
            mt-2
            line-clamp-3
            text-xs
            leading-5
            text-slate-500
            dark:text-slate-400
          "
        >
          {resource.description}
        </p>

      </div>

      {/* ================================================= */}
      {/* Footer                                             */}
      {/* ================================================= */}

      <div
        className="
          mt-auto
          border-t
          border-slate-100
          px-5
          py-4
          dark:border-white/5
        "
      >

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <span
              className="
                flex
                items-center
                gap-1
                text-[10px]
                font-medium
                text-slate-400
              "
            >
              <Clock3 className="h-3 w-3" />

              {resource.duration}
            </span>

            <span
              className="
                flex
                items-center
                gap-1
                text-[10px]
                font-medium
                text-slate-400
              "
            >
              <Star
                className="h-3 w-3 text-amber-400"
                fill="currentColor"
              />

              {resource.rating}
            </span>

          </div>

          <button
            type="button"
            onClick={onOpen}
            className="
              inline-flex
              items-center
              gap-1.5
              text-xs
              font-semibold
              text-teal-600
              transition
              hover:text-teal-700
              dark:text-teal-400
            "
          >
            Open

            <ArrowRight
              className="
                h-3.5
                w-3.5
                transition-transform
                group-hover:translate-x-0.5
              "
            />
          </button>

        </div>

      </div>

    </article>
  );
};

export default ResourceCard;