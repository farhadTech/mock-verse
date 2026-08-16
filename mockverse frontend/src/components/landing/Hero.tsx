import {
  ArrowRight,
  Play,
  Sparkles,
  TrendingUp,
} from "lucide-react";

import HeroScene from "./HeroScene";
import DailyQuote from "./DailyQuote";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-50"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-[-20%] h-[500px] w-[500px] rounded-full bg-purple-200/30 blur-3xl" />

        <div className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-orange-100/40 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#475569 1px, transparent 1px), linear-gradient(90deg, #475569 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Main Hero */}
      <div className="relative mx-auto max-w-7xl px-5 pb-0 pt-20 sm:px-6 lg:px-8 lg:pt-28">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">

          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4 text-orange-500" />

              <span className="text-sm font-semibold text-purple-700">
                Smarter exam preparation
              </span>
            </div>

            <h1 className="mt-7 max-w-3xl text-5xl font-black tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl">
              Master your
              <br />

              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
                next exam.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              Practice in a realistic computer-based environment,
              track your performance, and build the confidence you
              need before the real examination.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <button
                type="button"
                className="group inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-slate-300 transition-all hover:-translate-y-0.5 hover:bg-purple-700"
              >
                Start Practicing

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition hover:border-purple-300 hover:text-purple-700"
              >
                <Play className="h-4 w-4 fill-current" />

                See how it works
              </button>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-500" />
                Realistic mock tests
              </div>

              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-purple-500" />
                Instant results
              </div>

              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-orange-500" />
                Progress tracking
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="relative min-h-[500px]">
            {/* Three.js */}
            <HeroScene />

            {/* Score card */}
            <div className="absolute left-1/2 top-1/2 w-[310px] -translate-x-1/2 -translate-y-1/2 sm:w-[360px]">

              <div className="rounded-3xl border border-white/70 bg-white/90 p-6 shadow-2xl shadow-purple-200/50 backdrop-blur-xl">

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-purple-600">
                      Academic Assessment
                    </p>

                    <h3 className="mt-1 text-lg font-bold text-slate-900">
                      Practice Result
                    </h3>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50">
                    <TrendingUp className="h-5 w-5 text-purple-600" />
                  </div>
                </div>

                <div className="mt-7 flex items-center gap-5">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border-[8px] border-purple-100">
                    <div className="text-center">
                      <div className="text-2xl font-black text-slate-950">
                        7.0
                      </div>

                      <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                        Band
                      </div>
                    </div>
                  </div>

                  <div className="flex-1">
                    <ScoreRow
                      label="Listening"
                      score="7.5"
                      width="90%"
                    />

                    <ScoreRow
                      label="Reading"
                      score="7.0"
                      width="82%"
                    />

                    <ScoreRow
                      label="Writing"
                      score="6.5"
                      width="72%"
                    />

                    <ScoreRow
                      label="Speaking"
                      score="7.0"
                      width="82%"
                    />
                  </div>
                </div>

                <div className="mt-6 rounded-xl bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500">
                      Overall performance
                    </span>

                    <span className="text-xs font-bold text-emerald-600">
                      +12%
                    </span>
                  </div>

                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200">
                    <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-purple-600 to-orange-500" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Daily Quote */}
      <DailyQuote />
    </section>
  );
};

interface ScoreRowProps {
  label: string;
  score: string;
  width: string;
}

const ScoreRow = ({
  label,
  score,
  width,
}: ScoreRowProps) => {
  return (
    <div className="mb-2 last:mb-0">
      <div className="mb-1 flex items-center justify-between">
        <span className="text-[10px] font-semibold text-slate-500">
          {label}
        </span>

        <span className="text-[10px] font-bold text-slate-800">
          {score}
        </span>
      </div>

      <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"
          style={{ width }}
        />
      </div>
    </div>
  );
};

export default Hero;