import type { ComponentType } from "react";
import {
  ArrowRight,
  BarChart3,
  BookOpenCheck,
  CheckCircle2,
  ClipboardCheck,
  MousePointerClick,
  Sparkles,
  Timer,
} from "lucide-react";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
  color: string;
  background: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Choose your test",
    description:
      "Select the exam module you want to practice and choose the test that matches your preparation goals.",
    icon: MousePointerClick,
    color: "text-indigo-600",
    background: "bg-indigo-50",
  },
  {
    number: "02",
    title: "Get ready",
    description:
      "Read the instructions, understand the test format, and make sure you're ready before starting the timer.",
    icon: BookOpenCheck,
    color: "text-purple-600",
    background: "bg-purple-50",
  },
  {
    number: "03",
    title: "Take the exam",
    description:
      "Complete realistic questions under timed conditions and experience a focused computer-based exam environment.",
    icon: Timer,
    color: "text-violet-600",
    background: "bg-violet-50",
  },
  {
    number: "04",
    title: "Review & improve",
    description:
      "Submit your attempt, review your performance, and use your results to decide what to practice next.",
    icon: BarChart3,
    color: "text-orange-500",
    background: "bg-orange-50",
  },
];

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-white py-24 sm:py-28"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-purple-100/30 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-indigo-100/30 blur-3xl" />

      <div className="pointer-events-none absolute -right-20 top-1/2 h-72 w-72 rounded-full bg-orange-100/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-purple-50 px-4 py-2">
            <Sparkles className="h-4 w-4 text-purple-600" />

            <span className="text-xs font-bold uppercase tracking-[0.15em] text-purple-700">
              Simple process
            </span>
          </div>

          <h2 className="text-4xl font-black tracking-[-0.03em] text-slate-950 sm:text-5xl">
            From practice to
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
              {" "}
              progress.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            MockVerse keeps your preparation simple. Choose a test,
            take it under realistic conditions, understand your results,
            and use what you learn to improve.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-16">

          {/* Desktop connecting line */}
          <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[52px] hidden h-px bg-gradient-to-r from-indigo-200 via-purple-200 to-orange-200 lg:block" />

          {/* Animated progress line */}
          <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[52px] hidden h-px origin-left animate-[growLine_2s_ease-out_forwards] bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-400 lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {steps.map((step, index) => (
              <StepCard
                key={step.number}
                step={step}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA / summary */}
        <div className="mt-16 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
          <div className="grid lg:grid-cols-[1fr_auto] lg:items-center">

            <div className="p-7 sm:p-9">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                </div>

                <span className="text-sm font-bold text-slate-900">
                  Built around your progress
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-950">
                Practice. Review. Improve. Repeat.
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                Every practice attempt gives you another opportunity
                to understand your strengths and work on your weaknesses.
              </p>
            </div>

            <div className="hidden px-10 lg:block">
              <ProgressSteps />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface StepCardProps {
  step: Step;
  index: number;
}

const StepCard = ({
  step,
  index,
}: StepCardProps) => {
  const Icon = step.icon;

  return (
    <article
      className="group relative"
      style={{
        animationDelay: `${index * 150}ms`,
      }}
    >
      {/* Step icon */}
      <div className="relative z-10 mx-auto flex h-[104px] w-[104px] items-center justify-center rounded-full border-8 border-white bg-white shadow-lg shadow-slate-200/70">

        <div
          className={`flex h-16 w-16 items-center justify-center rounded-2xl ${step.background} transition-transform duration-300 group-hover:scale-110`}
        >
          <Icon
            className={`h-7 w-7 ${step.color}`}
            strokeWidth={2}
          />
        </div>

        {/* Number */}
        <div className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-slate-950 text-[10px] font-black text-white shadow-md">
          {step.number}
        </div>
      </div>

      {/* Content */}
      <div className="mt-7 text-center">
        <h3 className="text-lg font-extrabold tracking-tight text-slate-950">
          {step.title}
        </h3>

        <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-slate-500">
          {step.description}
        </p>
      </div>

      {/* Arrow between cards */}
      {index < steps.length - 1 && (
        <div className="absolute -right-4 top-[42px] z-20 hidden lg:block">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm">
            <ArrowRight className="h-4 w-4 text-slate-400" />
          </div>
        </div>
      )}
    </article>
  );
};

const ProgressSteps = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-xs font-black text-indigo-700">
        01
      </div>

      <div className="h-px w-8 bg-slate-300" />

      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-xs font-black text-purple-700">
        02
      </div>

      <div className="h-px w-8 bg-slate-300" />

      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 text-xs font-black text-violet-700">
        03
      </div>

      <div className="h-px w-8 bg-slate-300" />

      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-xs font-black text-orange-700">
        04
      </div>
    </div>
  );
};

export default HowItWorks;