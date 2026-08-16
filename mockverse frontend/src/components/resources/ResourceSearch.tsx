import {
  Search,
  SlidersHorizontal,
} from "lucide-react";

interface ResourceSearchProps {
  value: string;
  onChange: (value: string) => void;
  onToggleFilters: () => void;
  filtersOpen: boolean;
}

const ResourceSearch = ({
  value,
  onChange,
  onToggleFilters,
  filtersOpen,
}: ResourceSearchProps) => {
  return (
    <div className="flex gap-3">
      {/* Search input */}
      <div className="relative min-w-0 flex-1">
        <Search
          className="
            absolute
            left-3
            top-1/2
            h-4
            w-4
            -translate-y-1/2
            text-slate-400
          "
        />

        <input
          type="text"
          value={value}
          onChange={(event) =>
            onChange(event.target.value)
          }
          placeholder="Search IELTS resources..."
          className="
            h-11
            w-full
            rounded-xl
            border
            border-slate-200
            bg-slate-50
            pl-10
            pr-4
            text-sm
            text-slate-900
            outline-none
            transition
            placeholder:text-slate-400
            focus:border-teal-400
            focus:ring-4
            focus:ring-teal-500/10
            dark:border-white/10
            dark:bg-slate-950/50
            dark:text-white
          "
        />
      </div>

      {/* Filter button */}
      <button
        type="button"
        onClick={onToggleFilters}
        aria-expanded={filtersOpen}
        className="
          inline-flex
          h-11
          shrink-0
          items-center
          gap-2
          rounded-xl
          border
          border-slate-200
          bg-white
          px-4
          text-sm
          font-semibold
          text-slate-600
          transition
          hover:border-teal-200
          hover:bg-teal-50
          hover:text-teal-700
          dark:border-white/10
          dark:bg-slate-950/50
          dark:text-slate-300
          dark:hover:bg-teal-500/10
          dark:hover:text-teal-400
        "
      >
        <SlidersHorizontal className="h-4 w-4" />

        <span className="hidden sm:inline">
          Filters
        </span>
      </button>
    </div>
  );
};

export default ResourceSearch;