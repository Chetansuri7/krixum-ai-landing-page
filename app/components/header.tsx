import { useState } from "react";
import { Link, useLocation } from "react-router";
import { marketingSections } from "~/lib/site-metadata";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Check if we're on the homepage
  const isHomepage = location.pathname === "/";
  const navOrder = [
    "features",
    "advantages",
    "models",
    "pricing",
    "faq",
  ] as const;
  const navigation = navOrder
    .map((id) => marketingSections.find((section) => section.id === id))
    .filter((section): section is (typeof marketingSections)[number] => Boolean(section));

  // Smart navigation function
  const getNavigationProps = (item: typeof navigation[0]) => {
    if (isHomepage) {
      // On homepage: scroll to section
      return {
        to: { pathname: "/", search: item.sectionId ? `?section=${item.sectionId}` : "" },
        preventScrollReset: true,
      };
    } else {
      // On dedicated page: navigate to dedicated page or homepage section
      const currentPageSection = location.pathname.replace("/", "");
      if (currentPageSection === item.id) {
        // Already on this page, scroll to top
        return {
          to: location.pathname,
          preventScrollReset: true,
          onClick: (e: React.MouseEvent) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        };
      } else {
        // Navigate to dedicated page if it exists, otherwise homepage section
        return {
          to: item.path
        };
      }
    }
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm transition-all duration-300"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between h-14 lg:h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group cursor-pointer">
              <div className="relative">
                <img
                  src="/logo.svg"
                  alt="Krixum AI"
                  className="w-8 h-8 transition-transform group-hover:scale-110 duration-200"
                  aria-hidden="true"
                />
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                Krixum <span className="font-light text-muted-foreground">AI</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => {
                const navProps = getNavigationProps(item);
                return (
                  <Link
                    key={item.id}
                    {...navProps}
                    className="px-4 py-2 text-sm font-medium text-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
                  >
                    {item.title}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <a
                href="https://chat.krixum.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                Sign In
              </a>
              <a
                href="https://chat.krixum.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-primary to-purple-600 rounded-lg hover:from-primary/90 hover:to-purple-600/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer"
              >
                Start Free Trial
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              <svg
                className={`w-6 h-6 transition-transform duration-200 ${
                  isMobileMenuOpen ? "rotate-90" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="bg-background/95 backdrop-blur-xl border-t border-border/50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4">
              <nav className="space-y-1">
                {navigation.map((item) => {
                  const navProps = getNavigationProps(item);
                  return (
                    <Link
                      key={item.id}
                      {...navProps}
                      onClick={(e) => {
                        if (navProps.onClick) navProps.onClick(e);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block w-full text-left px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </nav>
              
              {/* Mobile CTA Buttons */}
              <div className="mt-6 space-y-3">
                <a
                  href="https://chat.krixum.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full px-4 py-3 text-center text-base font-medium text-muted-foreground hover:text-foreground border border-border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                >
                  Sign In
                </a>
                <a
                  href="https://chat.krixum.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full px-4 py-3 text-center text-base font-medium text-white bg-gradient-to-r from-primary to-purple-600 rounded-lg hover:from-primary/90 hover:to-purple-600/90 transition-all duration-200 shadow-lg cursor-pointer"
                >
                  Start Free Trial
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="h-14 lg:h-16"></div>
    </>
  );
}
