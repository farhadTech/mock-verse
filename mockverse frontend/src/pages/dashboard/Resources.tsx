import {
  useMemo,
  useState,
} from "react";

import {
  ArrowRight,
  BookOpen,
  Clock3,
  FileText,
  Lightbulb,
  Search,
  Sparkles,
  Star,
  X,
} from "lucide-react";

import ResourceCard from "../../components/resources/ResourceCard";
import ResourceCategory from "../../components/resources/ResourceCategory";
import ResourceFilters from "../../components/resources/ResourceFilter";
import ResourceSearch from "../../components/resources/ResourceSearch";

import {
  resources,
  type Resource,
} from "../../data/resources";

/* ========================================================= */
/* Resources Page                                              */
/* ========================================================= */

const Resources = () => {
  /* ======================================================= */
  /* State                                                     */
  /* ======================================================= */

  const [search, setSearch] =
    useState("");

  const [activeCategory, setActiveCategory] =
    useState("All");

  const [activeType, setActiveType] =
    useState("All Types");

  const [showFilters, setShowFilters] =
    useState(false);

  const [bookmarked, setBookmarked] =
    useState<number[]>([]);

  const [selectedResource, setSelectedResource] =
    useState<Resource | null>(null);

  /* ======================================================= */
  /* Filter                                                    */
  /* ======================================================= */

  const filteredResources = useMemo(() => {
    const normalizedSearch =
      search.trim().toLowerCase();

    return resources.filter(
      (resource) => {
        const matchesSearch =
          normalizedSearch === "" ||
          resource.title
            .toLowerCase()
            .includes(normalizedSearch) ||
          resource.description
            .toLowerCase()
            .includes(normalizedSearch) ||
          resource.module
            .toLowerCase()
            .includes(normalizedSearch);

        const matchesCategory =
          activeCategory === "All" ||
          resource.module ===
            activeCategory;

        const matchesType =
          activeType === "All Types" ||
          resource.type === activeType;

        return (
          matchesSearch &&
          matchesCategory &&
          matchesType
        );
      }
    );
  }, [
    search,
    activeCategory,
    activeType,
  ]);

  /* ======================================================= */
  /* Sections                                                  */
  /* ======================================================= */

  const featuredResources =
    filteredResources.filter(
      (resource) =>
        resource.featured
    );

  const recommendedResources =
    filteredResources.filter(
      (resource) =>
        resource.recommended
    );

  /*
   * Avoid displaying the same resource again
   * inside the "All Resources" section.
   */

  const displayedResourceIds =
    new Set([
      ...featuredResources.map(
        (resource) => resource.id
      ),
      ...recommendedResources.map(
        (resource) => resource.id
      ),
    ]);

  const allResources =
    filteredResources.filter(
      (resource) =>
        !displayedResourceIds.has(
          resource.id
        )
    );

  /* ======================================================= */
  /* Bookmark                                                  */
  /* ======================================================= */

  const toggleBookmark = (
    id: number
  ) => {
    setBookmarked((current) =>
      current.includes(id)
        ? current.filter(
            (resourceId) =>
              resourceId !== id
          )
        : [...current, id]
    );
  };

  /* ======================================================= */
  /* Clear filters                                             */
  /* ======================================================= */

  const clearFilters = () => {
    setSearch("");
    setActiveCategory("All");
    setActiveType("All Types");
  };

  const hasActiveFilters =
    search.trim() !== "" ||
    activeCategory !== "All" ||
    activeType !== "All Types";

  /* ======================================================= */
  /* Render                                                    */
  /* ======================================================= */

  return (
    <div className="space-y-7">
      {/* ================================================= */}
      {/* Header                                             */}
      {/* ================================================= */}

      <section>
        <div
          className="
            flex
            flex-col
            gap-5
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div>
            {/* Badge */}

            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-teal-100
                bg-teal-50
                px-3
                py-1.5
                text-xs
                font-semibold
                text-teal-700
                dark:border-teal-500/20
                dark:bg-teal-500/10
                dark:text-teal-400
              "
            >
              <Sparkles className="h-3.5 w-3.5" />

              Learning Library
            </div>

            {/* Heading */}

            <h1
              className="
                mt-3
                text-2xl
                font-bold
                tracking-tight
                text-slate-900
                sm:text-3xl
                dark:text-white
              "
            >
              IELTS Resources
            </h1>

            <p
              className="
                mt-2
                max-w-2xl
                text-sm
                leading-6
                text-slate-500
                dark:text-slate-400
              "
            >
              Explore lessons, strategies,
              practice materials and learning
              resources to improve every IELTS
              skill.
            </p>
          </div>

          {/* Resource count */}

          <div
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-slate-200
              bg-white
              px-4
              py-3
              shadow-sm
              dark:border-white/10
              dark:bg-slate-900/70
            "
          >
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-teal-50
                text-teal-600
                dark:bg-teal-500/10
                dark:text-teal-400
              "
            >
              <BookOpen className="h-5 w-5" />
            </div>

            <div>
              <p className="text-xs text-slate-400">
                Available resources
              </p>

              <p className="mt-0.5 text-lg font-bold text-slate-900 dark:text-white">
                {resources.length}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* Search / Filters                                   */}
      {/* ================================================= */}

      <section
        className="
          rounded-2xl
          border
          border-slate-200
          bg-white
          p-4
          shadow-sm
          dark:border-white/10
          dark:bg-slate-900/70
        "
      >
        <div className="flex flex-col gap-4">
          <ResourceSearch
            value={search}
            onChange={setSearch}
            onToggleFilters={() =>
              setShowFilters(
                (value) => !value
              )
            }
            filtersOpen={showFilters}
          />

          <ResourceCategory
            categories={[
              "All",
              "Listening",
              "Reading",
              "Writing",
              "Speaking",
              "Grammar",
              "Vocabulary",
              "Strategy",
            ]}
            activeCategory={
              activeCategory
            }
            onCategoryChange={(
              category
            ) =>
              setActiveCategory(
                category
              )
            }
          />

          {showFilters && (
            <ResourceFilters
              types={[
                "All Types",
                "PDF",
                "Audio",
                "Video",
                "Practice",
              ]}
              activeType={activeType}
              onTypeChange={setActiveType}
            />
          )}
        </div>
      </section>

      {/* ================================================= */}
      {/* Active filter summary                              */}
      {/* ================================================= */}

      {hasActiveFilters && (
        <div className="flex items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            Showing{" "}
            <span className="font-semibold text-slate-700 dark:text-slate-200">
              {filteredResources.length}
            </span>{" "}
            matching resources
          </p>

          <button
            type="button"
            onClick={clearFilters}
            className="
              inline-flex
              items-center
              gap-1.5
              text-xs
              font-semibold
              text-teal-600
              hover:text-teal-700
              dark:text-teal-400
            "
          >
            Clear filters

            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      )}

      {/* ================================================= */}
      {/* No results                                         */}
      {/* ================================================= */}

      {filteredResources.length === 0 && (
        <EmptyResources
          onClear={clearFilters}
        />
      )}

      {/* ================================================= */}
      {/* Featured                                           */}
      {/* ================================================= */}

      {featuredResources.length > 0 && (
        <section>
          <SectionHeading
            icon={Sparkles}
            title="Featured Resources"
            description="Hand-picked materials to help you study smarter."
          />

          <div
            className="
              mt-4
              grid
              grid-cols-1
              gap-4
              md:grid-cols-2
              xl:grid-cols-3
            "
          >
            {featuredResources.map(
              (resource) => (
                <ResourceCard
                  key={resource.id}
                  resource={resource}
                  bookmarked={bookmarked.includes(
                    resource.id
                  )}
                  onBookmark={() =>
                    toggleBookmark(
                      resource.id
                    )
                  }
                  onOpen={() =>
                    setSelectedResource(
                      resource
                    )
                  }
                />
              )
            )}
          </div>
        </section>
      )}

      {/* ================================================= */}
      {/* Recommended                                        */}
      {/* ================================================= */}

      {recommendedResources.length > 0 && (
        <section>
          <SectionHeading
            icon={Lightbulb}
            title="Recommended for You"
            description="Resources selected based on your current learning needs."
          />

          <div
            className="
              mt-4
              grid
              grid-cols-1
              gap-4
              md:grid-cols-2
              xl:grid-cols-3
            "
          >
            {recommendedResources.map(
              (resource) => (
                <ResourceCard
                  key={resource.id}
                  resource={resource}
                  bookmarked={bookmarked.includes(
                    resource.id
                  )}
                  onBookmark={() =>
                    toggleBookmark(
                      resource.id
                    )
                  }
                  onOpen={() =>
                    setSelectedResource(
                      resource
                    )
                  }
                />
              )
            )}
          </div>
        </section>
      )}

      {/* ================================================= */}
      {/* All Resources                                      */}
      {/* ================================================= */}

      {allResources.length > 0 && (
        <section>
          <SectionHeading
            icon={BookOpen}
            title="More Resources"
            description={`${allResources.length} additional resources available`}
          />

          <div
            className="
              mt-4
              grid
              grid-cols-1
              gap-4
              md:grid-cols-2
              xl:grid-cols-3
            "
          >
            {allResources.map(
              (resource) => (
                <ResourceCard
                  key={resource.id}
                  resource={resource}
                  bookmarked={bookmarked.includes(
                    resource.id
                  )}
                  onBookmark={() =>
                    toggleBookmark(
                      resource.id
                    )
                  }
                  onOpen={() =>
                    setSelectedResource(
                      resource
                    )
                  }
                />
              )
            )}
          </div>
        </section>
      )}

      {/* ================================================= */}
      {/* Resource Modal                                     */}
      {/* ================================================= */}

      {selectedResource && (
        <ResourceModal
          resource={selectedResource}
          onClose={() =>
            setSelectedResource(null)
          }
        />
      )}
    </div>
  );
};

export default Resources;

/* ========================================================= */
/* Section Heading                                             */
/* ========================================================= */

interface SectionHeadingProps {
  icon: typeof BookOpen;
  title: string;
  description: string;
}

const SectionHeading = ({
  icon: Icon,
  title,
  description,
}: SectionHeadingProps) => {
  return (
    <div className="flex items-center gap-3">
      <div
        className="
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-teal-50
          text-teal-600
          dark:bg-teal-500/10
          dark:text-teal-400
        "
      >
        <Icon className="h-4 w-4" />
      </div>

      <div>
        <h2 className="text-sm font-bold text-slate-900 dark:text-white">
          {title}
        </h2>

        <p className="mt-0.5 text-xs text-slate-400">
          {description}
        </p>
      </div>
    </div>
  );
};

/* ========================================================= */
/* Resource Modal                                               */
/* ========================================================= */

interface ResourceModalProps {
  resource: Resource;
  onClose: () => void;
}

const ResourceModal = ({
  resource,
  onClose,
}: ResourceModalProps) => {
  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-slate-950/50
        p-4
        backdrop-blur-sm
      "
      onMouseDown={onClose}
    >
      <div
        className="
          w-full
          max-w-lg
          overflow-hidden
          rounded-2xl
          border
          border-slate-200
          bg-white
          shadow-2xl
          dark:border-white/10
          dark:bg-slate-900
        "
        onMouseDown={(event) =>
          event.stopPropagation()
        }
      >
        {/* Header */}

        <div
          className="
            flex
            items-start
            justify-between
            border-b
            border-slate-100
            p-5
            dark:border-white/10
          "
        >
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400">
              {resource.type}
            </p>

            <h2 className="mt-1 text-lg font-bold text-slate-900 dark:text-white">
              {resource.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close resource"
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-lg
              text-slate-400
              hover:bg-slate-100
              hover:text-slate-700
              dark:hover:bg-slate-800
              dark:hover:text-white
            "
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Content */}

        <div className="p-5">
          <p className="text-sm leading-6 text-slate-500 dark:text-slate-400">
            {resource.description}
          </p>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <InfoItem
              label="Module"
              value={resource.module}
            />

            <InfoItem
              label="Difficulty"
              value={resource.difficulty}
            />

            <InfoItem
              label="Duration"
              value={resource.duration}
            />

            <InfoItem
              label="Rating"
              value={`${resource.rating} / 5`}
            />
          </div>
        </div>

        {/* Footer */}

        <div
          className="
            flex
            justify-end
            gap-3
            border-t
            border-slate-100
            px-5
            py-4
            dark:border-white/10
          "
        >
          <button
            type="button"
            onClick={onClose}
            className="
              rounded-xl
              border
              border-slate-200
              px-4
              py-2.5
              text-xs
              font-semibold
              text-slate-600
              dark:border-white/10
              dark:text-slate-300
            "
          >
            Close
          </button>

          <button
            type="button"
            onClick={() => {
              console.log(
                "Starting resource:",
                resource.title
              );
            }}
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-teal-600
              px-4
              py-2.5
              text-xs
              font-semibold
              text-white
              shadow-sm
              transition
              hover:bg-teal-700
            "
          >
            Start Resource

            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

/* ========================================================= */
/* Info Item                                                    */
/* ========================================================= */

const InfoItem = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => {
  return (
    <div
      className="
        rounded-xl
        bg-slate-50
        p-3
        dark:bg-slate-950/50
      "
    >
      <p className="text-[10px] uppercase tracking-wider text-slate-400">
        {label}
      </p>

      <p className="mt-1 text-xs font-semibold text-slate-700 dark:text-slate-300">
        {value}
      </p>
    </div>
  );
};

/* ========================================================= */
/* Empty Resources                                             */
/* ========================================================= */

const EmptyResources = ({
  onClear,
}: {
  onClear: () => void;
}) => {
  return (
    <div
      className="
        flex
        min-h-60
        flex-col
        items-center
        justify-center
        rounded-2xl
        border
        border-dashed
        border-slate-200
        bg-white
        px-6
        text-center
        dark:border-white/10
        dark:bg-slate-900/50
      "
    >
      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-2xl
          bg-slate-100
          text-slate-400
          dark:bg-slate-800
        "
      >
        <Search className="h-5 w-5" />
      </div>

      <h3 className="mt-4 text-sm font-semibold text-slate-800 dark:text-slate-200">
        No resources found
      </h3>

      <p className="mt-1 max-w-sm text-xs leading-5 text-slate-400">
        Try another search term, category or
        resource type.
      </p>

      <button
        type="button"
        onClick={onClear}
        className="
          mt-4
          rounded-xl
          bg-teal-600
          px-4
          py-2.5
          text-xs
          font-semibold
          text-white
          transition
          hover:bg-teal-700
        "
      >
        Clear filters
      </button>
    </div>
  );
};