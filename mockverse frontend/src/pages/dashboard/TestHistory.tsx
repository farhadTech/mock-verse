import { useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowUp,
  Award,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Eye,
  FileText,
  Headphones,
  History,
  Mic,
  PenLine,
  Search,
  SlidersHorizontal,
  TrendingUp,
  X,
} from "lucide-react";

/* ========================================================= */
/* Types                                                       */
/* ========================================================= */

type TestStatus = "Completed" | "In Progress";

interface TestResult {
  id: number;
  testName: string;
  testNumber: string;
  date: string;
  dateValue: string;

  listening: number;
  reading: number;
  writing: number;
  speaking: number;

  overall: number;

  duration: string;
  questions: number;

  status: TestStatus;
}

/* ========================================================= */
/* Mock Data                                                   */
/* ========================================================= */

const testHistory: TestResult[] = [
  {
    id: 1,
    testName: "Cambridge IELTS 21",
    testNumber: "Test 1",
    date: "August 15, 2026",
    dateValue: "2026-08-15",

    listening: 7.5,
    reading: 7.0,
    writing: 6.5,
    speaking: 7.0,

    overall: 7.0,

    duration: "2h 45m",
    questions: 40,

    status: "Completed",
  },

  {
    id: 2,
    testName: "Cambridge IELTS 20",
    testNumber: "Test 4",
    date: "August 10, 2026",
    dateValue: "2026-08-10",

    listening: 7.0,
    reading: 6.5,
    writing: 6.5,
    speaking: 6.5,

    overall: 6.5,

    duration: "2h 38m",
    questions: 40,

    status: "Completed",
  },

  {
    id: 3,
    testName: "Cambridge IELTS 20",
    testNumber: "Test 3",
    date: "August 5, 2026",
    dateValue: "2026-08-05",

    listening: 7.5,
    reading: 6.5,
    writing: 6.0,
    speaking: 6.5,

    overall: 6.5,

    duration: "2h 41m",
    questions: 40,

    status: "Completed",
  },

  {
    id: 4,
    testName: "Cambridge IELTS 19",
    testNumber: "Test 4",
    date: "July 28, 2026",
    dateValue: "2026-07-28",

    listening: 7.0,
    reading: 6.0,
    writing: 6.0,
    speaking: 6.5,

    overall: 6.5,

    duration: "2h 50m",
    questions: 40,

    status: "Completed",
  },

  {
    id: 5,
    testName: "Cambridge IELTS 19",
    testNumber: "Test 2",
    date: "July 20, 2026",
    dateValue: "2026-07-20",

    listening: 6.5,
    reading: 6.0,
    writing: 6.0,
    speaking: 6.0,

    overall: 6.0,

    duration: "2h 35m",
    questions: 40,

    status: "Completed",
  },

  {
    id: 6,
    testName: "Cambridge IELTS 18",
    testNumber: "Test 4",
    date: "July 12, 2026",
    dateValue: "2026-07-12",

    listening: 6.5,
    reading: 6.0,
    writing: 5.5,
    speaking: 6.0,

    overall: 6.0,

    duration: "2h 48m",
    questions: 40,

    status: "Completed",
  },

  {
    id: 7,
    testName: "Cambridge IELTS 18",
    testNumber: "Test 2",
    date: "July 4, 2026",
    dateValue: "2026-07-04",

    listening: 6.0,
    reading: 5.5,
    writing: 5.5,
    speaking: 6.0,

    overall: 5.5,

    duration: "2h 40m",
    questions: 40,

    status: "Completed",
  },

  {
    id: 8,
    testName: "Cambridge IELTS 17",
    testNumber: "Test 4",
    date: "June 27, 2026",
    dateValue: "2026-06-27",

    listening: 6.0,
    reading: 5.5,
    writing: 5.5,
    speaking: 5.5,

    overall: 5.5,

    duration: "2h 44m",
    questions: 40,

    status: "Completed",
  },
];

/* ========================================================= */
/* Component                                                   */
/* ========================================================= */

const TestHistory = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [selectedModule, setSelectedModule] =
    useState("All Modules");

  const [selectedStatus, setSelectedStatus] =
    useState("All Status");

  const [sortAscending, setSortAscending] =
    useState(false);

  const [selectedTest, setSelectedTest] =
    useState<TestResult | null>(null);

  /* ======================================================= */
  /* Filter + Sort                                            */
  /* ======================================================= */

  const filteredTests = useMemo(() => {
    const result = testHistory.filter((test) => {
      const searchMatch =
        test.testName
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        test.testNumber
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const statusMatch =
        selectedStatus === "All Status" ||
        test.status === selectedStatus;

      let moduleMatch = true;

      if (selectedModule === "Listening") {
        moduleMatch = test.listening > 0;
      }

      if (selectedModule === "Reading") {
        moduleMatch = test.reading > 0;
      }

      if (selectedModule === "Writing") {
        moduleMatch = test.writing > 0;
      }

      if (selectedModule === "Speaking") {
        moduleMatch = test.speaking > 0;
      }

      return (
        searchMatch &&
        statusMatch &&
        moduleMatch
      );
    });

    return [...result].sort((a, b) => {
      const first = new Date(a.dateValue).getTime();
      const second = new Date(b.dateValue).getTime();

      return sortAscending
        ? first - second
        : second - first;
    });
  }, [
    searchTerm,
    selectedModule,
    selectedStatus,
    sortAscending,
  ]);

  /* ======================================================= */
  /* Stats                                                     */
  /* ======================================================= */

  const averageBand =
    testHistory.reduce(
      (sum, test) => sum + test.overall,
      0
    ) / testHistory.length;

  const highestBand = Math.max(
    ...testHistory.map((test) => test.overall)
  );

  /* ======================================================= */
  /* Render                                                    */
  /* ======================================================= */

  return (
    <div className="space-y-6">

      {/* ================================================= */}
      {/* Header                                             */}
      {/* ================================================= */}

      <section>
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

          <div>
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
              <History className="h-3.5 w-3.5" />

              Test History
            </div>

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
              Your Test History
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
              Review your previous mock tests, compare
              module scores, and track your IELTS progress.
            </p>
          </div>

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
              <FileText className="h-5 w-5" />
            </div>

            <div>
              <p className="text-xs text-slate-400">
                Tests completed
              </p>

              <p className="mt-0.5 text-lg font-bold text-slate-900 dark:text-white">
                {testHistory.length}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================================================= */}
      {/* Summary Cards                                      */}
      {/* ================================================= */}

      <section
        className="
          grid
          grid-cols-1
          gap-4
          sm:grid-cols-2
          xl:grid-cols-4
        "
      >
        <SummaryCard
          title="Tests Completed"
          value={testHistory.length.toString()}
          description="Mock tests"
          icon={CheckCircle2}
        />

        <SummaryCard
          title="Average Band"
          value={averageBand.toFixed(1)}
          description="Across all tests"
          icon={TrendingUp}
        />

        <SummaryCard
          title="Highest Band"
          value={highestBand.toFixed(1)}
          description="Personal best"
          icon={ArrowUp}
        />

        <SummaryCard
          title="Latest Band"
          value={testHistory[0].overall.toFixed(1)}
          description="+0.5 from previous"
          icon={Award}
        />
      </section>

      {/* ================================================= */}
      {/* Filters                                             */}
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
          sm:p-5
        "
      >
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center">

          {/* Search */}

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
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(event.target.value)
              }
              placeholder="Search tests..."
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

          <div className="flex flex-col gap-3 sm:flex-row">

            {/* Module */}

            <div className="relative">

              <SlidersHorizontal
                className="
                  pointer-events-none
                  absolute
                  left-3
                  top-1/2
                  h-4
                  w-4
                  -translate-y-1/2
                  text-slate-400
                "
              />

              <select
                value={selectedModule}
                onChange={(event) =>
                  setSelectedModule(event.target.value)
                }
                className="
                  h-11
                  w-full
                  appearance-none
                  rounded-xl
                  border
                  border-slate-200
                  bg-slate-50
                  pl-9
                  pr-9
                  text-sm
                  font-medium
                  text-slate-700
                  outline-none
                  focus:border-teal-400
                  dark:border-white/10
                  dark:bg-slate-950/50
                  dark:text-slate-300
                  sm:w-44
                "
              >
                <option>All Modules</option>
                <option>Listening</option>
                <option>Reading</option>
                <option>Writing</option>
                <option>Speaking</option>
              </select>

              <ChevronDown
                className="
                  pointer-events-none
                  absolute
                  right-3
                  top-1/2
                  h-4
                  w-4
                  -translate-y-1/2
                  text-slate-400
                "
              />

            </div>

            {/* Status */}

            <div className="relative">

              <select
                value={selectedStatus}
                onChange={(event) =>
                  setSelectedStatus(event.target.value)
                }
                className="
                  h-11
                  w-full
                  appearance-none
                  rounded-xl
                  border
                  border-slate-200
                  bg-slate-50
                  px-4
                  pr-9
                  text-sm
                  font-medium
                  text-slate-700
                  outline-none
                  focus:border-teal-400
                  dark:border-white/10
                  dark:bg-slate-950/50
                  dark:text-slate-300
                  sm:w-36
                "
              >
                <option>All Status</option>
                <option>Completed</option>
                <option>In Progress</option>
              </select>

              <ChevronDown
                className="
                  pointer-events-none
                  absolute
                  right-3
                  top-1/2
                  h-4
                  w-4
                  -translate-y-1/2
                  text-slate-400
                "
              />

            </div>

            {/* Sort */}

            <button
              type="button"
              onClick={() =>
                setSortAscending((current) => !current)
              }
              className="
                inline-flex
                h-11
                items-center
                justify-center
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
              title="Change sort order"
            >
              {sortAscending ? (
                <ArrowUp className="h-4 w-4" />
              ) : (
                <ArrowDown className="h-4 w-4" />
              )}

              Date
            </button>

          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* Desktop Table                                      */}
      {/* ================================================= */}

      <section
        className="
          hidden
          overflow-hidden
          rounded-2xl
          border
          border-slate-200
          bg-white
          shadow-sm
          dark:border-white/10
          dark:bg-slate-900/70
          lg:block
        "
      >

        {/* Table header */}

        <div
          className="
            border-b
            border-slate-200
            bg-slate-50/80
            px-5
            py-4
            dark:border-white/10
            dark:bg-slate-950/40
          "
        >
          <div className="grid grid-cols-[2fr_repeat(4,0.8fr)_0.8fr_1.1fr_0.8fr] items-center gap-4">

            <TableHeader>Test</TableHeader>

            <TableHeader>Listening</TableHeader>

            <TableHeader>Reading</TableHeader>

            <TableHeader>Writing</TableHeader>

            <TableHeader>Speaking</TableHeader>

            <TableHeader>Overall</TableHeader>

            <TableHeader>Date</TableHeader>

            <TableHeader>Action</TableHeader>

          </div>
        </div>

        {/* Table rows */}

        <div className="divide-y divide-slate-100 dark:divide-white/5">

          {filteredTests.map((test) => (
            <TestTableRow
              key={test.id}
              test={test}
              onView={() => setSelectedTest(test)}
            />
          ))}

        </div>

        {/* Empty */}

        {filteredTests.length === 0 && (
          <EmptyState />
        )}

      </section>

      {/* ================================================= */}
      {/* Mobile Cards                                       */}
      {/* ================================================= */}

      <section className="space-y-3 lg:hidden">

        {filteredTests.map((test) => (
          <MobileTestCard
            key={test.id}
            test={test}
            onView={() => setSelectedTest(test)}
          />
        ))}

        {filteredTests.length === 0 && (
          <EmptyState />
        )}

      </section>

      {/* ================================================= */}
      {/* Result Details Modal                               */}
      {/* ================================================= */}

      {selectedTest && (
        <TestDetailsModal
          test={selectedTest}
          onClose={() => setSelectedTest(null)}
        />
      )}

    </div>
  );
};

export default TestHistory;

/* ========================================================= */
/* Summary Card                                                */
/* ========================================================= */

interface SummaryCardProps {
  title: string;
  value: string;
  description: string;
  icon: typeof CheckCircle2;
}

const SummaryCard = ({
  title,
  value,
  description,
  icon: Icon,
}: SummaryCardProps) => {
  return (
    <article
      className="
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-5
        shadow-sm
        dark:border-white/10
        dark:bg-slate-900/70
      "
    >
      <div className="flex items-start justify-between">

        <div>
          <p className="text-xs font-medium text-slate-400">
            {title}
          </p>

          <p className="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            {value}
          </p>

          <p className="mt-1 text-[11px] text-slate-400">
            {description}
          </p>
        </div>

        <div
          className="
            flex
            h-9
            w-9
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

      </div>
    </article>
  );
};

/* ========================================================= */
/* Table Header                                                */
/* ========================================================= */

const TableHeader = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <span
      className="
        text-[10px]
        font-semibold
        uppercase
        tracking-wider
        text-slate-400
      "
    >
      {children}
    </span>
  );
};

/* ========================================================= */
/* Table Row                                                    */
/* ========================================================= */

interface TestTableRowProps {
  test: TestResult;
  onView: () => void;
}

const TestTableRow = ({
  test,
  onView,
}: TestTableRowProps) => {
  return (
    <div
      className="
        grid
        grid-cols-[2fr_repeat(4,0.8fr)_0.8fr_1.1fr_0.8fr]
        items-center
        gap-4
        px-5
        py-5
        transition
        hover:bg-slate-50
        dark:hover:bg-slate-950/40
      "
    >

      {/* Test */}

      <div className="min-w-0">

        <div className="flex items-center gap-3">

          <div
            className="
              flex
              h-10
              w-10
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
            <FileText className="h-4 w-4" />
          </div>

          <div className="min-w-0">

            <p className="truncate text-sm font-semibold text-slate-900 dark:text-white">
              {test.testName}
            </p>

            <p className="mt-0.5 text-xs text-slate-400">
              {test.testNumber}
            </p>

          </div>

        </div>

      </div>

      <ScoreValue score={test.listening} />

      <ScoreValue score={test.reading} />

      <ScoreValue score={test.writing} />

      <ScoreValue score={test.speaking} />

      {/* Overall */}

      <div>
        <span
          className="
            inline-flex
            min-w-12
            items-center
            justify-center
            rounded-lg
            bg-teal-50
            px-2
            py-1.5
            text-sm
            font-bold
            text-teal-700
            dark:bg-teal-500/10
            dark:text-teal-400
          "
        >
          {test.overall.toFixed(1)}
        </span>
      </div>

      {/* Date */}

      <div>
        <p className="text-xs font-medium text-slate-600 dark:text-slate-300">
          {test.date}
        </p>

        <p className="mt-1 flex items-center gap-1 text-[10px] text-slate-400">
          <Clock3 className="h-3 w-3" />
          {test.duration}
        </p>
      </div>

      {/* Action */}

      <button
        type="button"
        onClick={onView}
        className="
          inline-flex
          h-9
          w-9
          items-center
          justify-center
          rounded-lg
          border
          border-slate-200
          bg-white
          text-slate-500
          transition
          hover:border-teal-200
          hover:bg-teal-50
          hover:text-teal-600
          dark:border-white/10
          dark:bg-slate-900
          dark:text-slate-400
          dark:hover:bg-teal-500/10
          dark:hover:text-teal-400
        "
        title="View test details"
      >
        <Eye className="h-4 w-4" />
      </button>

    </div>
  );
};

/* ========================================================= */
/* Score Value                                                 */
/* ========================================================= */

const ScoreValue = ({
  score,
}: {
  score: number;
}) => {
  return (
    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
      {score.toFixed(1)}
    </span>
  );
};

/* ========================================================= */
/* Mobile Test Card                                           */
/* ========================================================= */

interface MobileTestCardProps {
  test: TestResult;
  onView: () => void;
}

const MobileTestCard = ({
  test,
  onView,
}: MobileTestCardProps) => {
  return (
    <article
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

      <div className="flex items-start justify-between gap-4">

        <div className="flex min-w-0 items-center gap-3">

          <div
            className="
              flex
              h-10
              w-10
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
            <FileText className="h-4 w-4" />
          </div>

          <div className="min-w-0">

            <h3 className="truncate text-sm font-semibold text-slate-900 dark:text-white">
              {test.testName}
            </h3>

            <p className="mt-0.5 text-xs text-slate-400">
              {test.testNumber}
            </p>

          </div>

        </div>

        <div className="text-right">

          <p className="text-xl font-bold text-teal-600 dark:text-teal-400">
            {test.overall.toFixed(1)}
          </p>

          <p className="text-[10px] text-slate-400">
            Overall
          </p>

        </div>

      </div>

      {/* Module Scores */}

      <div className="mt-5 grid grid-cols-4 gap-2">

        <MobileScore
          label="L"
          score={test.listening}
          icon={Headphones}
        />

        <MobileScore
          label="R"
          score={test.reading}
          icon={BookOpen}
        />

        <MobileScore
          label="W"
          score={test.writing}
          icon={PenLine}
        />

        <MobileScore
          label="S"
          score={test.speaking}
          icon={Mic}
        />

      </div>

      {/* Bottom */}

      <div
        className="
          mt-4
          flex
          items-center
          justify-between
          border-t
          border-slate-100
          pt-4
          dark:border-white/5
        "
      >

        <div className="flex items-center gap-3">

          <span className="flex items-center gap-1 text-[11px] text-slate-400">
            <CalendarDays className="h-3 w-3" />
            {test.date}
          </span>

          <span className="flex items-center gap-1 text-[11px] text-slate-400">
            <Clock3 className="h-3 w-3" />
            {test.duration}
          </span>

        </div>

        <button
          type="button"
          onClick={onView}
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
          View
          <Eye className="h-3.5 w-3.5" />
        </button>

      </div>

    </article>
  );
};

/* ========================================================= */
/* Mobile Score                                                */
/* ========================================================= */

interface MobileScoreProps {
  label: string;
  score: number;
  icon: typeof Headphones;
}

const MobileScore = ({
  label,
  score,
  icon: Icon,
}: MobileScoreProps) => {
  return (
    <div
      className="
        rounded-xl
        bg-slate-50
        p-2.5
        text-center
        dark:bg-slate-950/50
      "
    >
      <div className="flex items-center justify-center gap-1 text-[10px] font-semibold text-slate-400">

        <Icon className="h-3 w-3" />

        {label}

      </div>

      <p className="mt-1 text-sm font-bold text-slate-800 dark:text-slate-200">
        {score.toFixed(1)}
      </p>
    </div>
  );
};

/* ========================================================= */
/* Empty State                                                  */
/* ========================================================= */

const EmptyState = () => {
  return (
    <div
      className="
        flex
        min-h-56
        flex-col
        items-center
        justify-center
        px-6
        py-12
        text-center
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
        No tests found
      </h3>

      <p className="mt-1 max-w-sm text-xs leading-5 text-slate-400">
        Try changing your search or filter settings.
      </p>
    </div>
  );
};

/* ========================================================= */
/* Test Details Modal                                          */
/* ========================================================= */

interface TestDetailsModalProps {
  test: TestResult;
  onClose: () => void;
}

const TestDetailsModal = ({
  test,
  onClose,
}: TestDetailsModalProps) => {
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

        {/* Modal header */}

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

          <div className="flex items-center gap-3">

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
              <FileText className="h-5 w-5" />
            </div>

            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                {test.testName}
              </h2>

              <p className="mt-0.5 text-xs text-slate-400">
                {test.testNumber}
              </p>
            </div>

          </div>

          <button
            type="button"
            onClick={onClose}
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-lg
              text-slate-400
              transition
              hover:bg-slate-100
              hover:text-slate-700
              dark:hover:bg-slate-800
              dark:hover:text-slate-200
            "
          >
            <X className="h-4 w-4" />
          </button>

        </div>

        {/* Overall */}

        <div className="p-5">

          <div
            className="
              rounded-2xl
              bg-teal-50
              p-5
              text-center
              dark:bg-teal-500/10
            "
          >

            <p className="text-xs font-medium text-teal-600 dark:text-teal-400">
              Overall Band
            </p>

            <p className="mt-1 text-4xl font-bold text-teal-700 dark:text-teal-300">
              {test.overall.toFixed(1)}
            </p>

          </div>

          {/* Scores */}

          <div className="mt-5 grid grid-cols-2 gap-3">

            <DetailScore
              label="Listening"
              score={test.listening}
              icon={Headphones}
            />

            <DetailScore
              label="Reading"
              score={test.reading}
              icon={BookOpen}
            />

            <DetailScore
              label="Writing"
              score={test.writing}
              icon={PenLine}
            />

            <DetailScore
              label="Speaking"
              score={test.speaking}
              icon={Mic}
            />

          </div>

          {/* Metadata */}

          <div
            className="
              mt-5
              grid
              grid-cols-2
              gap-3
              rounded-xl
              bg-slate-50
              p-4
              dark:bg-slate-950/50
            "
          >

            <div>
              <p className="text-[10px] uppercase tracking-wider text-slate-400">
                Date
              </p>

              <p className="mt-1 text-xs font-semibold text-slate-700 dark:text-slate-300">
                {test.date}
              </p>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-wider text-slate-400">
                Duration
              </p>

              <p className="mt-1 text-xs font-semibold text-slate-700 dark:text-slate-300">
                {test.duration}
              </p>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-wider text-slate-400">
                Questions
              </p>

              <p className="mt-1 text-xs font-semibold text-slate-700 dark:text-slate-300">
                {test.questions}
              </p>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-wider text-slate-400">
                Status
              </p>

              <p className="mt-1 flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="h-3.5 w-3.5" />
                {test.status}
              </p>
            </div>

          </div>

        </div>

        {/* Footer */}

        <div
          className="
            flex
            justify-end
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
              bg-slate-900
              px-4
              py-2.5
              text-xs
              font-semibold
              text-white
              transition
              hover:bg-slate-800
              dark:bg-white
              dark:text-slate-900
              dark:hover:bg-slate-200
            "
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
};

/* ========================================================= */
/* Detail Score                                                */
/* ========================================================= */

interface DetailScoreProps {
  label: string;
  score: number;
  icon: typeof Headphones;
}

const DetailScore = ({
  label,
  score,
  icon: Icon,
}: DetailScoreProps) => {
  return (
    <div
      className="
        rounded-xl
        border
        border-slate-200
        p-3
        dark:border-white/10
      "
    >
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4 text-teal-500" />

        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
          {label}
        </span>
      </div>

      <p className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
        {score.toFixed(1)}
      </p>
    </div>
  );
};

/* ========================================================= */
/* Award Icon Helper                                           */
/* ========================================================= */

const AwardIcon = AwardPlaceholder;

function AwardPlaceholder(props: React.ComponentProps<typeof AwardIconBase>) {
  return <AwardIconBase {...props} />;
}

const AwardIconBase = TrendingUp;
