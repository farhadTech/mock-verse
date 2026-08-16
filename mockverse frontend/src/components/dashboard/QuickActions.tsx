import {
  ArrowRight,
  BookOpen,
  Headphones,
  Mic2,
  PenLine,
} from "lucide-react";
import { Link } from "react-router-dom";

const QuickActions = () => {
  const actions = [
    {
      title: "Full Practice Test",
      description: "Simulate the real IELTS experience",
      icon: BookOpen,
      href: "/dashboard/tests",
      featured: true,
    },
    {
      title: "Reading",
      description: "Improve reading speed & accuracy",
      icon: BookOpen,
      href: "/dashboard/tests?module=reading",
      featured: false,
    },
    {
      title: "Listening",
      description: "Train your listening skills",
      icon: Headphones,
      href: "/dashboard/tests?module=listening",
      featured: false,
    },
    {
      title: "Writing",
      description: "Practice Task 1 & Task 2",
      icon: PenLine,
      href: "/dashboard/tests?module=writing",
      featured: false,
    },
    {
      title: "Speaking",
      description: "Build confidence & fluency",
      icon: Mic2,
      href: "/dashboard/tests?module=speaking",
      featured: false,
    },
  ];

  return (
    <section>
      <div className="mb-4 flex items-center justify-between">

        <div>
          <h2 className="text-base font-semibold text-slate-900">
            Quick Practice
          </h2>

          <p className="mt-1 text-xs text-slate-400">
            Choose what you want to practice today
          </p>
        </div>

        <Link
          to="/dashboard/tests"
          className="
            hidden
            items-center
            gap-1
            text-xs
            font-semibold
            text-emerald-600
            hover:text-emerald-700
            sm:flex
          "
        >
          View all
          <ArrowRight size={14} />
        </Link>
      </div>

      <div
        className="
          grid
          grid-cols-1
          gap-3
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-5
        "
      >
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              to={action.href}
              className={`
                group
                rounded-2xl
                border
                p-4
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:shadow-md
                ${
                  action.featured
                    ? "border-emerald-200 bg-emerald-600 text-white shadow-sm"
                    : "border-slate-200/80 bg-white text-slate-900"
                }
              `}
            >
              <div className="flex items-start justify-between">

                <div
                  className={`
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-xl
                    ${
                      action.featured
                        ? "bg-white/15 text-white"
                        : "bg-slate-50 text-slate-600"
                    }
                  `}
                >
                  <Icon size={18} />
                </div>

                <ArrowRight
                  size={16}
                  className={`
                    transition-transform
                    group-hover:translate-x-1
                    ${
                      action.featured
                        ? "text-white/70"
                        : "text-slate-300"
                    }
                  `}
                />
              </div>

              <h3
                className={`
                  mt-4
                  text-sm
                  font-semibold
                  ${
                    action.featured
                      ? "text-white"
                      : "text-slate-800"
                  }
                `}
              >
                {action.title}
              </h3>

              <p
                className={`
                  mt-1
                  text-xs
                  leading-5
                  ${
                    action.featured
                      ? "text-emerald-50"
                      : "text-slate-400"
                  }
                `}
              >
                {action.description}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default QuickActions;
