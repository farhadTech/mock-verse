import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import DashboardSidebar from "./DashboardSidebar";
import DashboardHeader from "./DashboardHeader";
import DashboardScene from "../three/DashboardScene";

const DashboardLayout = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] =
    useState(false);

  useEffect(() => {
    document.body.style.overflow =
      mobileSidebarOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileSidebarOpen]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">

      <div className="relative min-h-screen overflow-hidden">

        {/* ================================================= */}
        {/* Three.js Background                               */}
        {/* ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-0
            overflow-hidden
          "
          aria-hidden="true"
        >
          <DashboardScene />
        </div>

        {/* ================================================= */}
        {/* Mobile Overlay                                    */}
        {/* ================================================= */}

        {mobileSidebarOpen && (
          <button
            type="button"
            aria-label="Close navigation"
            onClick={() =>
              setMobileSidebarOpen(false)
            }
            className="
              fixed
              inset-0
              z-40
              bg-slate-950/40
              backdrop-blur-[2px]
              lg:hidden
            "
          />
        )}

        {/* ================================================= */}
        {/* Mobile Sidebar                                   */}
        {/* ================================================= */}

        <div
          className={`
            fixed
            inset-y-0
            left-0
            z-50
            transform
            transition-transform
            duration-300
            ease-out
            lg:hidden
            ${
              mobileSidebarOpen
                ? "translate-x-0"
                : "-translate-x-full"
            }
          `}
        >
          <DashboardSidebar
            mobile
            onClose={() =>
              setMobileSidebarOpen(false)
            }
          />
        </div>

        {/* ================================================= */}
        {/* Application                                      */}
        {/* ================================================= */}

        <div className="relative z-10 flex min-h-screen w-full">

          {/* Desktop Sidebar */}
          <div className="hidden lg:block">
            <DashboardSidebar />
          </div>

          {/* Main */}
          <div className="flex min-w-0 flex-1 flex-col">

            <DashboardHeader
              onMenuClick={() =>
                setMobileSidebarOpen(true)
              }
            />

            <main className="relative flex-1">

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  -z-10
                  bg-gradient-to-br
                  from-emerald-50/70
                  via-slate-50
                  to-white
                "
              />

              <div
                className="
                  mx-auto
                  w-full
                  max-w-[1600px]
                  px-4
                  py-6
                  sm:px-6
                  sm:py-8
                  lg:px-8
                  lg:py-10
                  xl:px-10
                "
              >
                <Outlet />
              </div>

            </main>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;