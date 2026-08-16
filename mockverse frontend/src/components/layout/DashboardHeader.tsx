import {
  Bell,
  ChevronDown,
  Menu,
  Search,
  Settings,
  User,
  LogOut,
} from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface DashboardHeaderProps {
  onMenuClick?: () => void;
}

const DashboardHeader = ({
  onMenuClick,
}: DashboardHeaderProps) => {
  const location = useLocation();

  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);

  const getPageInfo = () => {
    const path = location.pathname;

    if (path === "/dashboard") {
      return {
        title: "Overview",
        description: "Your IELTS preparation at a glance",
      };
    }

    if (path.startsWith("/dashboard/tests")) {
      return {
        title: "Practice Tests",
        description: "Practice with IELTS-style tests",
      };
    }

    if (path.startsWith("/dashboard/history")) {
      return {
        title: "Test History",
        description: "Review your previous test results",
      };
    }

    if (path.startsWith("/dashboard/analytics")) {
      return {
        title: "Analytics",
        description: "Track your IELTS performance",
      };
    }

    if (path.startsWith("/dashboard/profile")) {
      return {
        title: "Profile",
        description: "Manage your student profile",
      };
    }

    if (path.startsWith("/dashboard/settings")) {
      return {
        title: "Settings",
        description: "Manage your account preferences",
      };
    }

    return {
      title: "Dashboard",
      description: "Welcome back to MockVerse",
    };
  };

  const pageInfo = getPageInfo();

  return (
    <header
      className="
        sticky
        top-0
        z-40
        flex
        h-16
        shrink-0
        items-center
        border-b
        border-slate-200/80
        bg-white/90
        px-4
        backdrop-blur-xl
        sm:px-6
        lg:px-8
      "
    >
      <div className="flex w-full items-center justify-between gap-4">

        {/* ===================================================== */}
        {/* Left Section                                          */}
        {/* ===================================================== */}

        <div className="flex min-w-0 items-center gap-3">

          {/* Mobile Menu */}
          <button
            type="button"
            onClick={onMenuClick}
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-lg
              border
              border-slate-200
              text-slate-600
              transition-colors
              hover:bg-slate-50
              hover:text-slate-900
              lg:hidden
            "
            aria-label="Open navigation menu"
          >
            <Menu size={19} />
          </button>

          {/* Page Information */}
          <div className="min-w-0">
            <h1 className="truncate text-sm font-semibold text-slate-900 sm:text-base">
              {pageInfo.title}
            </h1>

            <p className="hidden truncate text-xs text-slate-400 sm:block">
              {pageInfo.description}
            </p>
          </div>
        </div>

        {/* ===================================================== */}
        {/* Right Section                                         */}
        {/* ===================================================== */}

        <div className="flex items-center gap-2 sm:gap-3">

          {/* =================================================== */}
          {/* Search                                              */}
          {/* =================================================== */}

          <div className="relative hidden md:block">
            <Search
              size={17}
              className="
                pointer-events-none
                absolute
                left-3
                top-1/2
                -translate-y-1/2
                text-slate-400
              "
            />

            <input
              type="search"
              placeholder="Search..."
              className="
                h-9
                w-44
                rounded-lg
                border
                border-slate-200
                bg-slate-50
                pl-9
                pr-3
                text-sm
                text-slate-700
                outline-none
                transition-all
                placeholder:text-slate-400
                focus:w-56
                focus:border-emerald-400
                focus:bg-white
                focus:ring-2
                focus:ring-emerald-100
              "
            />
          </div>

          {/* =================================================== */}
          {/* Notifications                                       */}
          {/* =================================================== */}

          <div className="relative">

            <button
              type="button"
              onClick={() =>
                setNotificationOpen(
                  (previous) => !previous
                )
              }
              className="
                relative
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                border
                border-slate-200
                bg-white
                text-slate-500
                transition-colors
                hover:bg-slate-50
                hover:text-slate-900
              "
              aria-label="Notifications"
              aria-expanded={notificationOpen}
            >
              <Bell size={18} />

              {/* Notification indicator */}
              <span
                className="
                  absolute
                  right-1.5
                  top-1.5
                  h-2
                  w-2
                  rounded-full
                  border-2
                  border-white
                  bg-emerald-500
                "
              />
            </button>

            {/* Notification Dropdown */}
            {notificationOpen && (
              <div
                className="
                  absolute
                  right-0
                  top-12
                  z-50
                  w-80
                  overflow-hidden
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  shadow-xl
                "
              >
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-slate-100
                    px-4
                    py-3
                  "
                >
                  <h3 className="text-sm font-semibold text-slate-900">
                    Notifications
                  </h3>

                  <button
                    type="button"
                    className="text-xs font-medium text-emerald-600 hover:text-emerald-700"
                  >
                    Mark all read
                  </button>
                </div>

                <div className="p-2">

                  <div className="flex gap-3 rounded-lg p-3 hover:bg-slate-50">
                    <div
                      className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-emerald-50
                        text-emerald-600
                      "
                    >
                      <Bell size={15} />
                    </div>

                    <div>
                      <p className="text-sm font-medium text-slate-800">
                        New practice test available
                      </p>

                      <p className="mt-0.5 text-xs text-slate-400">
                        Cambridge IELTS 21 is now available.
                      </p>

                      <p className="mt-1 text-[11px] text-slate-400">
                        Just now
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 rounded-lg p-3 hover:bg-slate-50">
                    <div
                      className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-blue-50
                        text-blue-600
                      "
                    >
                      <Settings size={15} />
                    </div>

                    <div>
                      <p className="text-sm font-medium text-slate-800">
                        Keep practicing
                      </p>

                      <p className="mt-0.5 text-xs text-slate-400">
                        You're on a 5-day study streak.
                      </p>

                      <p className="mt-1 text-[11px] text-slate-400">
                        2 hours ago
                      </p>
                    </div>
                  </div>

                </div>

                <div className="border-t border-slate-100 p-2">
                  <button
                    type="button"
                    className="
                      w-full
                      rounded-lg
                      py-2
                      text-center
                      text-xs
                      font-medium
                      text-slate-500
                      transition-colors
                      hover:bg-slate-50
                      hover:text-slate-900
                    "
                  >
                    View all notifications
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* =================================================== */}
          {/* Divider                                              */}
          {/* =================================================== */}

          <div className="hidden h-7 w-px bg-slate-200 sm:block" />

          {/* =================================================== */}
          {/* Profile                                              */}
          {/* =================================================== */}

          <div className="relative">

            <button
              type="button"
              onClick={() =>
                setProfileOpen(
                  (previous) => !previous
                )
              }
              className="
                flex
                items-center
                gap-2
                rounded-lg
                p-1
                transition-colors
                hover:bg-slate-50
              "
              aria-expanded={profileOpen}
              aria-label="Open profile menu"
            >

              {/* Avatar */}
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

              {/* Name */}
              <div className="hidden text-left lg:block">
                <p className="text-xs font-semibold text-slate-800">
                  Farhad Rahman
                </p>

                <p className="text-[11px] text-slate-400">
                  Student
                </p>
              </div>

              <ChevronDown
                size={15}
                className={`
                  hidden
                  text-slate-400
                  transition-transform
                  lg:block
                  ${
                    profileOpen
                      ? "rotate-180"
                      : ""
                  }
                `}
              />
            </button>

            {/* Profile Dropdown */}
            {profileOpen && (
              <div
                className="
                  absolute
                  right-0
                  top-12
                  z-50
                  w-56
                  overflow-hidden
                  rounded-xl
                  border
                  border-slate-200
                  bg-white
                  p-2
                  shadow-xl
                "
              >

                {/* User Information */}
                <div className="border-b border-slate-100 px-3 py-3">
                  <p className="text-sm font-semibold text-slate-900">
                    Farhad Rahman
                  </p>

                  <p className="mt-0.5 truncate text-xs text-slate-400">
                    student@mockverse.com
                  </p>
                </div>

                {/* Profile */}
                <Link
                  to="/dashboard/profile"
                  onClick={() => setProfileOpen(false)}
                  className="
                    mt-2
                    flex
                    items-center
                    gap-3
                    rounded-lg
                    px-3
                    py-2.5
                    text-sm
                    text-slate-600
                    transition-colors
                    hover:bg-slate-50
                    hover:text-slate-900
                  "
                >
                  <User size={17} />
                  <span>Profile</span>
                </Link>

                {/* Settings */}
                <Link
                  to="/dashboard/settings"
                  onClick={() => setProfileOpen(false)}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-lg
                    px-3
                    py-2.5
                    text-sm
                    text-slate-600
                    transition-colors
                    hover:bg-slate-50
                    hover:text-slate-900
                  "
                >
                  <Settings size={17} />
                  <span>Settings</span>
                </Link>

                {/* Logout */}
                <button
                  type="button"
                  className="
                    mt-1
                    flex
                    w-full
                    items-center
                    gap-3
                    rounded-lg
                    px-3
                    py-2.5
                    text-sm
                    text-slate-600
                    transition-colors
                    hover:bg-red-50
                    hover:text-red-600
                  "
                >
                  <LogOut size={17} />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;