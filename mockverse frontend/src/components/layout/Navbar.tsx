import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "../common/Logo";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">

        {/* Logo */}
        <a
          href="#home"
          aria-label="MockVerse home"
          onClick={closeMobileMenu}
        >
          <Logo size="md" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          <a
            href="#home"
            className="text-sm font-semibold text-slate-900 transition-colors hover:text-purple-600"
          >
            Home
          </a>

          <a
            href="#practice"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-purple-600"
          >
            Practice Tests
          </a>

          <a
            href="#features"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-purple-600"
          >
            Features
          </a>

          <a
            href="#how-it-works"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-purple-600"
          >
            How It Works
          </a>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            className="rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-purple-600"
          >
            Sign In
          </button>

          <button
            type="button"
            className="rounded-lg bg-gradient-to-r from-purple-600 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-purple-200 transition-all hover:-translate-y-0.5 hover:shadow-md hover:shadow-purple-200"
          >
            Start Practice
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((previous) => !previous)}
          className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 lg:hidden"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="mx-auto max-w-7xl px-5 py-4 sm:px-6">
            <div className="flex flex-col gap-1">

              <a
                href="#home"
                onClick={closeMobileMenu}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Home
              </a>

              <a
                href="#practice"
                onClick={closeMobileMenu}
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-purple-600"
              >
                Practice Tests
              </a>

              <a
                href="#features"
                onClick={closeMobileMenu}
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-purple-600"
              >
                Features
              </a>

              <a
                href="#how-it-works"
                onClick={closeMobileMenu}
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-purple-600"
              >
                How It Works
              </a>

              {/* Mobile actions */}
              <div className="mt-3 flex flex-col gap-2 border-t border-slate-100 pt-4">

                <button
                  type="button"
                  className="rounded-lg px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Sign In
                </button>

                <button
                  type="button"
                  className="rounded-lg bg-gradient-to-r from-purple-600 to-violet-600 px-4 py-3 text-sm font-semibold text-white transition hover:from-purple-700 hover:to-violet-700"
                >
                  Start Practice
                </button>

              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;