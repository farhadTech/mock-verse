import {
  ArrowRight,
  BookOpen,
  Headphones,
  Mic,
  PenLine,
  Sparkles,
  Clock3,
  CircleCheck,
  type LucideIcon,
} from "lucide-react";

interface Module {
  title: string;
  description: string;
  questions: string;
  duration: string;
  icon: LucideIcon;
  gradient: string;
  iconBackground: string;
  iconColor: string;
  available: boolean;
  accent: string;
}

const modules: Module[] = [
  {
    title: "Listening",
    description:
      "Practice conversations, monologues, and academic listening tasks in a realistic exam environment.",
    questions: "40 Questions",
    duration: "30 Minutes",
    icon: Headphones,
    gradient: "from-indigo-500 to-purple-600",
    iconBackground: "bg-indigo-50",
    iconColor: "text-indigo-600",
    available: true,
    accent: "bg-indigo-500",
  },
  {
    title: "Reading",
    description:
      "Improve your reading speed and comprehension with academic passages and realistic question types.",
    questions: "40 Questions",
    duration: "60 Minutes",
    icon: BookOpen,
    gradient: "from-purple-500 to-violet-600",
    iconBackground: "bg-purple-50",
    iconColor: "text-purple-600",
    available: true,
    accent: "bg-purple-500",
  },
  {
    title: "Writing",
    description:
      "Practice structured academic writing with realistic Task 1 and Task 2 prompts.",
    questions: "2 Tasks",
    duration: "60 Minutes",
    icon: PenLine,
    gradient: "from-violet-500 to-fuchsia-600",
    iconBackground: "bg-violet-50",
    iconColor: "text-violet-600",
    available: true,
    accent: "bg-violet-500",
  },
  {
    title: "Speaking",
    description:
      "Prepare for structured speaking tasks and build confidence for your real examination.",
    questions: "3 Parts",
    duration: "11–14 Minutes",
    icon: Mic,
    gradient: "from-orange-400 to-orange-600",
    iconBackground: "bg-orange-50",
    iconColor: "text-orange-500",
    available: false,
    accent: "bg-orange-500",
  },
];

const ExamModules = () => {
  return (
    <section
      id="practice"
      className="relative overflow-hidden bg-white py-24 sm:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-purple-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-orange-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2">
            <Sparkles className="h-4 w-4 text-purple-600" />

            <span className="text-xs font-bold uppercase tracking-[0.15em] text-purple-700">
              Practice your way
            </span>
          </div>

          <h2 className="text-4xl font-black tracking-[-0.03em] text-slate-950 sm:text-5xl">
            Practice every part of
            <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
              {" "}
              the exam.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Build your skills with realistic practice modules designed
            to help you become faster, more confident, and better
            prepared for test day.
          </p>
        </div>

        {/* Module Cards */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {modules.map((module) => (
            <ModuleCard
              key={module.title}
              module={module}
            />
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <CircleCheck className="h-4 w-4 text-emerald-500" />
            Realistic question formats
          </div>

          <div className="flex items-center gap-2">
            <CircleCheck className="h-4 w-4 text-emerald-500" />
            Timed practice
          </div>

          <div className="flex items-center gap-2">
            <CircleCheck className="h-4 w-4 text-emerald-500" />
            Instant performance tracking
          </div>
        </div>
      </div>
    </section>
  );
};

interface ModuleCardProps {
  module: Module;
}

const ModuleCard = ({ module }: ModuleCardProps) => {
  const Icon = module.icon;

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 ${
        module.available
          ? "hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/60"
          : "opacity-90"
      }`}
    >
      {/* Top accent */}
      <div
        className={`absolute left-0 right-0 top-0 h-1 ${module.accent}`}
      />

      {/* Coming Soon */}
      {!module.available && (
        <div className="absolute right-4 top-5 rounded-full bg-orange-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-orange-600">
          Coming Soon
        </div>
      )}

      {/* Icon */}
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-xl ${module.iconBackground}`}
      >
        <Icon
          className={`h-6 w-6 ${module.iconColor}`}
          strokeWidth={2}
        />
      </div>

      {/* Title */}
      <h3 className="mt-6 text-xl font-extrabold text-slate-950">
        {module.title}
      </h3>

      {/* Description */}
      <p className="mt-3 min-h-[96px] text-sm leading-6 text-slate-500">
        {module.description}
      </p>

      {/* Metadata */}
      <div className="mt-5 space-y-2 border-t border-slate-100 pt-5">
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
          <CircleCheck className="h-3.5 w-3.5 text-slate-400" />
          {module.questions}
        </div>

        <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
          <Clock3 className="h-3.5 w-3.5 text-slate-400" />
          {module.duration}
        </div>
      </div>

      {/* Action */}
      <button
        type="button"
        disabled={!module.available}
        className={`group/button mt-6 flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-bold transition-all ${
          module.available
            ? `bg-gradient-to-r ${module.gradient} text-white shadow-sm hover:shadow-md`
            : "cursor-not-allowed bg-slate-100 text-slate-400"
        }`}
      >
        <span>
          {module.available ? "Start Practice" : "Coming Soon"}
        </span>

        {module.available && (
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/button:translate-x-1" />
        )}
      </button>

      {/* Hover decoration */}
      {module.available && (
        <div
          className={`pointer-events-none absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-gradient-to-br ${module.gradient} opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-10`}
        />
      )}
    </article>
  );
};

export default ExamModules;