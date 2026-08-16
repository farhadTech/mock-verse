import {
  BarChart3,
  BookOpen,
  Clock3,
  LayoutDashboard,
  Settings,
  User,
  X,
  BookMarked,
} from "lucide-react";
import { NavLink } from "react-router-dom";

interface SidebarProps {
  mobile?: boolean;
  onClose?: () => void;
}

const Sidebar = ({
  mobile = false,
  onClose,
}: SidebarProps) => {
  const navigation = [
    {
      label: "Overview",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      label: "Practice Tests",
      path: "/dashboard/tests",
      icon: BookOpen,
    },
    {
      label: "Test History",
      path: "/dashboard/history",
      icon: Clock3,
    },
    {
      label: "Analytics",
      path: "/dashboard/analytics",
      icon: BarChart3,
    },
    {
      label: "Study Resources",
      path: "/dashboard/resources",
      icon: BookMarked,
    },
  ];

  const accountNavigation = [
    {
      label: "Profile",
      path: "/dashboard/profile",
      icon: User,
    },
    {
      label: "Settings",
      path: "/dashboard/settings",
      icon: Settings,
    },
  ];

  return (
    <aside
      className={`
        flex
        h-screen
        w-64
        shrink-0
        flex-col
        border-r
        border-slate-200
        bg-white
        ${mobile ? "shadow-2xl" : ""}
      `}
    >
      {/* ================================================= */}
      {/* Logo / Header                                     */}
      {/* ================================================= */}

      <div
        className="
          flex
          h-16
          shrink-0
          items-center
          justify-between
          border-b
          border-slate-100
          px-5
        "
      >
        {/* Logo */}
        <NavLink
          to="/dashboard"
          onClick={onClose}
          className="flex items-center gap-3"
        >
          <div
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-xl
              bg-emerald-600
              text-sm
              font-bold
              text-white
              shadow-sm
              shadow-emerald-200
            "
          >
            M
          </div>

          <div>
            <p className="text-sm font-bold tracking-tight text-slate-900">
              MockVerse
            </p>

            <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
              IELTS Platform
            </p>
          </div>
        </NavLink>

        {/* Mobile close */}
        {mobile && (
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
              transition-colors
              hover:bg-slate-100
              hover:text-slate-700
              lg:hidden
            "
            aria-label="Close navigation"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* ================================================= */}
      {/* Navigation                                        */}
      {/* ================================================= */}

      <nav className="flex-1 overflow-y-auto px-3 py-5">

        {/* Main */}
        <div>
          <p
            className="
              mb-2
              px-3
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.14em]
              text-slate-400
            "
          >
            Workspace
          </p>

          <div className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/dashboard"}
                  onClick={mobile ? onClose : undefined}
                  className={({ isActive }) =>
                    `
                      group
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      px-3
                      py-2.5
                      text-sm
                      font-medium
                      transition-all
                      ${
                        isActive
                          ? "bg-emerald-50 text-emerald-700"
                          : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                      }
                    `
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon
                        size={18}
                        className={`
                          shrink-0
                          transition-colors
                          ${
                            isActive
                              ? "text-emerald-600"
                              : "text-slate-400 group-hover:text-slate-600"
                          }
                        `}
                      />

                      <span>{item.label}</span>

                      {isActive && (
                        <span
                          className="
                            ml-auto
                            h-1.5
                            w-1.5
                            rounded-full
                            bg-emerald-500
                          "
                        />
                      )}
                    </>
                  )}
                </NavLink>
              );
            })}
          </div>
        </div>

        {/* Account */}
        <div className="mt-8">

          <p
            className="
              mb-2
              px-3
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.14em]
              text-slate-400
            "
          >
            Account
          </p>

          <div className="space-y-1">
            {accountNavigation.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={mobile ? onClose : undefined}
                  className={({ isActive }) =>
                    `
                      group
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      px-3
                      py-2.5
                      text-sm
                      font-medium
                      transition-all
                      ${
                        isActive
                          ? "bg-emerald-50 text-emerald-700"
                          : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                      }
                    `
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon
                        size={18}
                        className={
                          isActive
                            ? "text-emerald-600"
                            : "text-slate-400"
                        }
                      />

                      <span>{item.label}</span>
                    </>
                  )}
                </NavLink>
              );
            })}
          </div>
        </div>

        {/* ================================================= */}
        {/* Practice Reminder                                 */}
        {/* ================================================= */}

        <div
          className="
            mt-8
            rounded-2xl
            border
            border-emerald-100
            bg-emerald-50/60
            p-4
          "
        >
          <div
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-lg
              bg-emerald-100
              text-emerald-600
            "
          >
            <BookOpen size={16} />
          </div>

          <p className="mt-3 text-xs font-semibold text-slate-800">
            Keep practicing
          </p>

          <p className="mt-1 text-[11px] leading-5 text-slate-500">
            You're on a 5-day study streak. Don't break it!
          </p>

          <NavLink
            to="/dashboard/tests"
            onClick={mobile ? onClose : undefined}
            className="
              mt-3
              inline-flex
              text-[11px]
              font-semibold
              text-emerald-600
              hover:text-emerald-700
            "
          >
            Start a test →
          </NavLink>
        </div>
      </nav>

      {/* ================================================= */}
      {/* Student Profile                                   */}
      {/* ================================================= */}

      <div
        className="
          shrink-0
          border-t
          border-slate-100
          p-3
        "
      >
        <NavLink
          to="/dashboard/profile"
          onClick={mobile ? onClose : undefined}
          className="
            flex
            items-center
            gap-3
            rounded-xl
            p-2
            transition-colors
            hover:bg-slate-50
          "
        >
          <div
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-emerald-100
              text-xs
              font-bold
              text-emerald-700
            "
          >
            FR
          </div>

          <div className="min-w-0">
            <p className="truncate text-xs font-semibold text-slate-800">
              Farhad Rahman
            </p>

            <p className="truncate text-[10px] text-slate-400">
              Student
            </p>
          </div>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;