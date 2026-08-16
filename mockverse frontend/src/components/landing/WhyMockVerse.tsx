import {
  BarChart3,
  Clock3,
  MonitorCheck,
  Target,
  ArrowUpRight,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor: string;
  iconBackground: string;
}

const features: Feature[] = [
  {
    title: "Realistic Exam Experience",
    description:
      "Practice in a computer-based environment designed to feel familiar when you sit for the real examination.",
    icon: MonitorCheck,
    iconColor: "text-indigo-600",
    iconBackground: "bg-indigo-50",
  },
  {
    title: "Practice Under Time",
    description:
      "Train yourself to manage time effectively with realistic section timers and focused practice sessions.",
    icon: Clock3,
    iconColor: "text-purple-600",
    iconBackground: "bg-purple-50",
  },
  {
    title: "Know Your Performance",
    description:
      "See how you perform across different skills and identify the areas that need more attention.",
    icon: BarChart3,
    iconColor: "text-violet-600",
    iconBackground: "bg-violet-50",
  },
  {
    title: "Focus on Improvement",
    description:
      "Turn every practice session into a learning opportunity and work consistently toward your target score.",
    icon: Target,
    iconColor: "text-orange-500",
    iconBackground: "bg-orange-50",
  },
];

const WhyMockVerse = () => {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-slate-50 py-24 sm:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-0 top-0 h-96 w-96 rounded-full bg-indigo-100/40 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-100/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white px-4 py-2 shadow-sm">
              <Sparkles className="h-4 w-4 text-orange-500" />

              <span className="text-xs font-bold uppercase tracking-[0.15em] text-purple-700">
                Why MockVerse
              </span>
            </div>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.03em] text-slate-950 sm:text-5xl">
              More than just
              <br />

              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
                practice tests.
              </span>
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-slate-600 lg:ml-auto lg:text-lg">
            MockVerse is designed to help you understand the exam,
            practice under realistic conditions, and turn your results
            into meaningful progress.
          </p>
        </div>

        {/* Features */}
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              index={index}
            />
          ))}
        </div>

        {/* Bottom highlight */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-950">
          <div className="grid lg:grid-cols-[1fr_auto] lg:items-center">

            <div className="p-7 sm:p-9">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/10">
                  <Target className="h-4 w-4 text-purple-400" />
                </div>

                <span className="text-xs font-bold uppercase tracking-[0.15em] text-purple-400">
                  Built for progress
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Every attempt should teach you something.
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
                Practice, review your performance, identify weak areas,
                and come back stronger for your next attempt.
              </p>
            </div>

            {/* Decorative score visualization */}
            <div className="hidden px-10 lg:block">
              <ProgressVisual />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

const FeatureCard = ({
  feature,
  index,
}: FeatureCardProps) => {
  const Icon = feature.icon;

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 sm:p-8">

      {/* Number */}
      <div className="absolute right-7 top-7 text-5xl font-black tracking-tight text-slate-100 transition-colors duration-300 group-hover:text-purple-50">
        0{index + 1}
      </div>

      {/* Icon */}
      <div
        className={`relative flex h-12 w-12 items-center justify-center rounded-xl ${feature.iconBackground}`}
      >
        <Icon
          className={`h-6 w-6 ${feature.iconColor}`}
          strokeWidth={2}
        />
      </div>

      {/* Content */}
      <div className="relative mt-7 max-w-md">
        <h3 className="text-xl font-extrabold tracking-tight text-slate-950">
          {feature.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-500">
          {feature.description}
        </p>
      </div>

      {/* Bottom link */}
      <div className="mt-7 flex items-center gap-2 text-sm font-bold text-slate-400 transition-colors group-hover:text-purple-600">
        <span>Learn more</span>

        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </div>

      {/* Hover glow */}
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-purple-500/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
    </article>
  );
};

const ProgressVisual = () => {
  const scores = [
    {
      label: "Listening",
      value: "7.5",
      width: "90%",
    },
    {
      label: "Reading",
      value: "7.0",
      width: "82%",
    },
    {
      label: "Writing",
      value: "6.5",
      width: "72%",
    },
    {
      label: "Speaking",
      value: "7.0",
      width: "82%",
    },
  ];

  return (
    <div className="w-72 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
      <div className="mb-5 flex items-center justify-between">
        <span className="text-xs font-semibold text-slate-400">
          Latest Practice
        </span>

        <span className="text-xs font-bold text-emerald-400">
          +0.5
        </span>
      </div>

      <div className="space-y-4">
        {scores.map((score) => (
          <div key={score.label}>
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-400">
                {score.label}
              </span>

              <span className="text-xs font-bold text-white">
                {score.value}
              </span>
            </div>

            <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-purple-500 to-orange-400"
                style={{ width: score.width }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyMockVerse;
