import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Zap,
} from "lucide-react";

const CTA = () => {
  return (
    <section
      id="start"
      className="relative overflow-hidden bg-white py-24 sm:py-28"
    >
      {/* Main CTA container */}
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-16 shadow-2xl shadow-purple-200/30 sm:px-10 sm:py-20 lg:px-20">

          {/* Background glow */}
          <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-purple-600/30 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-40 -right-20 h-[450px] w-[450px] rounded-full bg-orange-500/20 blur-3xl" />

          {/* Grid pattern */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Decorative circles */}
          <div className="pointer-events-none absolute right-10 top-10 hidden h-32 w-32 rounded-full border border-purple-400/20 lg:block" />

          <div className="pointer-events-none absolute bottom-8 right-28 hidden h-20 w-20 rounded-full border border-orange-400/20 lg:block" />

          {/* Content */}
          <div className="relative mx-auto max-w-3xl text-center">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
              <Sparkles className="h-4 w-4 text-orange-400" />

              <span className="text-xs font-bold uppercase tracking-[0.15em] text-purple-200">
                Your preparation starts here
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Ready to take your
              <span className="block bg-gradient-to-r from-purple-400 via-violet-300 to-orange-400 bg-clip-text text-transparent">
                next step?
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              Stop wondering if you're ready. Start practicing with
              realistic mock exams and build the confidence you need
              for test day.
            </p>

            {/* CTA button */}
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">

              <button
                type="button"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-slate-950 shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-purple-50 hover:shadow-purple-500/20 sm:w-auto"
              >
                Start Practicing

                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <button
                type="button"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition-all duration-300 hover:border-white/25 hover:bg-white/10 sm:w-auto"
              >
                <Zap className="h-4 w-4 text-orange-400" />

                Explore Mock Tests
              </button>
            </div>

            {/* Benefits */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
              <Benefit text="Realistic practice" />

              <Benefit text="Timed exams" />

              <Benefit text="Performance tracking" />
            </div>
          </div>

          {/* Bottom decorative glow */}
          <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />
        </div>
      </div>
    </section>
  );
};

interface BenefitProps {
  text: string;
}

const Benefit = ({ text }: BenefitProps) => {
  return (
    <div className="flex items-center gap-2 text-sm text-slate-400">
      <CheckCircle2 className="h-4 w-4 text-emerald-400" />

      <span>{text}</span>
    </div>
  );
};

export default CTA;
