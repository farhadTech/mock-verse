import { GraduationCap } from "lucide-react";

interface LogoProps {
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
}

const Logo = ({
  showTagline = false,
  size = "md",
}: LogoProps) => {
  const sizes = {
    sm: {
      icon: "h-8 w-8",
      iconText: "text-sm",
      brand: "text-lg",
      tagline: "text-[7px]",
    },
    md: {
      icon: "h-10 w-10",
      iconText: "text-base",
      brand: "text-xl",
      tagline: "text-[8px]",
    },
    lg: {
      icon: "h-12 w-12",
      iconText: "text-lg",
      brand: "text-2xl",
      tagline: "text-[9px]",
    },
  };

  const current = sizes[size];

  return (
    <div className="flex items-center gap-3">
      {/* Logo Icon */}
      <div
        className={`relative flex ${current.icon} shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-indigo-700 via-indigo-800 to-purple-800 shadow-sm`}
      >
        {/* Decorative glow */}
        <div className="absolute -right-3 -top-3 h-8 w-8 rounded-full bg-purple-500/20 blur-md" />

        {/* Graduation cap */}
        <GraduationCap
          className="absolute right-1 top-1 h-3.5 w-3.5 text-orange-400"
          strokeWidth={2.2}
        />

        {/* M mark */}
        <div className="relative flex items-center">
          <div className="h-5 w-2.5 -skew-y-12 rounded-sm bg-white" />

          <div className="mx-[-1px] h-2 w-5 rotate-[-35deg] rounded-full bg-gradient-to-r from-purple-400 to-orange-400" />

          <div className="h-5 w-2.5 skew-y-12 rounded-sm bg-gradient-to-b from-orange-400 to-purple-500" />
        </div>
      </div>

      {/* Wordmark */}
      <div className="flex flex-col">
        <div
          className={`${current.brand} leading-none tracking-tight font-extrabold`}
        >
          <span className="text-slate-950">Mock</span>
          <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-orange-500 bg-clip-text text-transparent">
            Verse
          </span>
        </div>

        {showTagline && (
          <div
            className={`mt-1 flex items-center gap-1.5 font-semibold uppercase tracking-[0.22em] text-slate-400 ${current.tagline}`}
          >
            <span className="h-px w-4 bg-orange-400" />
            <span>Practice</span>
            <span className="text-orange-400">•</span>
            <span>Assess</span>
            <span className="text-purple-500">•</span>
            <span>Achieve</span>
            <span className="h-px w-4 bg-purple-500" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Logo;