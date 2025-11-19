import type { MouseEvent } from "react";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router";
import { marketingSections } from "~/lib/site-metadata";
import { cn } from "~/lib/utils";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if we're on the homepage
  const isHomepage = location.pathname === "/";
  const navOrder = [
    "advantages",
    "overview",
    "highlights",
    "how-it-works",
    "faq",
    "contact",
  ] as const;
  const navigation = navOrder
    .map((id) => marketingSections.find((section) => section.id === id))
    .filter((section): section is (typeof marketingSections)[number] => Boolean(section));

  // Smart navigation function
  const getNavigationProps = (item: typeof navigation[0]) => {
    const targetHash = item.sectionId ? `#${item.sectionId}` : "";

    if (isHomepage) {
      // On homepage: scroll to section
      return {
        to: { pathname: "/", hash: targetHash },
        preventScrollReset: true,
        onClick: (event: MouseEvent<HTMLAnchorElement>) => {
          const sectionId = item.sectionId;

          if (!sectionId) {
            return;
          }

          event.preventDefault();

          if (location.hash !== targetHash) {
            navigate({ hash: targetHash }, { preventScrollReset: true });
          }

          setTimeout(() => {
            const element = document.getElementById(sectionId);

            if (element) {
              // The CSS scroll-padding-top will handle the offset automatically
              element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }, 100);
        },
      };
    } else {
      // On dedicated page: navigate to dedicated page or homepage section
      const currentPageSection = location.pathname.replace("/", "");
      if (currentPageSection === item.id) {
        // Already on this page, scroll to top
        return {
          to: location.pathname,
          preventScrollReset: true,
          onClick: (event: MouseEvent<HTMLAnchorElement>) => {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        };
      } else {
        // Navigate to dedicated page if it exists, otherwise homepage section
        if (item.path === "/" && item.sectionId) {
          return { to: { pathname: "/", hash: `#${item.sectionId}` } };
        }
        return { to: item.path };
      }
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-border/50 shadow-sm py-2"
            : "bg-transparent py-4"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group cursor-pointer">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/10 group-hover:scale-105 transition-transform duration-200">
                <img
                  src="/logo.svg"
                  alt="Krixum"
                  className="w-6 h-6"
                  aria-hidden="true"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                Krixum
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 bg-background/50 backdrop-blur-md px-2 py-1.5 rounded-full border border-border/50 shadow-sm">
              {navigation.map((item) => {
                const navProps = getNavigationProps(item);
                return (
                  <Link
                    key={item.id}
                    {...navProps}
                    className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-all rounded-full"
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
                className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-primary to-orange-600 rounded-full hover:shadow-lg hover:shadow-primary/25 hover:scale-105 transition-all duration-200 cursor-pointer"
              >
                Start Searching
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              <svg
                className={`w-6 h-6 transition-transform duration-200 ${isMobileMenuOpen ? "rotate-90" : ""
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
          className={`lg:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
            }`}
        >
          <div className="bg-background/95 backdrop-blur-xl border-t border-border/50 h-screen">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 flex flex-col gap-6">
              <nav className="flex flex-col gap-2">
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
                      className="block w-full text-left px-4 py-4 text-lg font-medium text-foreground border-b border-border/30 hover:bg-muted/30 transition-colors"
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </nav>

              {/* Mobile CTA Buttons */}
              <div className="mt-auto mb-24 space-y-4">
                <a
                  href="https://chat.krixum.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full px-4 py-4 text-center text-base font-medium text-foreground border border-border rounded-xl hover:bg-muted/50 transition-colors cursor-pointer"
                >
                  Sign In
                </a>
                <a
                  href="https://chat.krixum.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full px-4 py-4 text-center text-base font-bold text-white bg-gradient-to-r from-primary to-orange-600 rounded-xl shadow-lg cursor-pointer"
                >
                  Start Searching
                  <ArrowRight className="inline-block ml-2 w-5 h-5 align-middle" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
