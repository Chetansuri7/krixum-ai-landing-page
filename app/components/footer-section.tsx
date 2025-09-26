import { Link, useLocation, useNavigate } from "react-router";

type FooterLink = {
  name: string;
  available: boolean;
  kind: "section" | "page" | "external";
  href: string;
};

export function FooterSection() {
  const location = useLocation();
  const navigate = useNavigate();

  const goToSection = (sectionId: string) => {
    if (typeof window === "undefined") {
      return;
    }

    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        requestAnimationFrame(() =>
          element.scrollIntoView({ behavior: "smooth", block: "start" }),
        );
        return;
      }
    }

    navigate({ pathname: "/", search: `?section=${sectionId}` });
  };

  const footerLinks: Record<string, FooterLink[]> = {
    product: [
      { name: "Features overview", href: "features", available: true, kind: "section" },
      { name: "Model showcase", href: "models", available: true, kind: "section" },
      { name: "Pricing overview", href: "pricing", available: true, kind: "section" },
      { name: "Platform deep dive", href: "/features", available: true, kind: "page" },
    ],
    resources: [
      { name: "Highlights", href: "highlights", available: true, kind: "section" },
      { name: "Advantage report", href: "/advantages", available: true, kind: "page" },
      { name: "Model catalog", href: "/models", available: true, kind: "page" },
      { name: "Documentation", href: "https://docs.krixum.ai", available: false, kind: "external" },
    ],
    company: [
      { name: "About", href: "/about", available: false, kind: "page" },
      { name: "Careers", href: "/careers", available: false, kind: "page" },
      { name: "Contact", href: "/contact", available: true, kind: "page" },
      { name: "Press", href: "/press", available: false, kind: "page" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy", available: false, kind: "page" },
      { name: "Terms of Service", href: "/terms", available: false, kind: "page" },
      { name: "Cookie Policy", href: "/cookies", available: false, kind: "page" },
      { name: "GDPR", href: "/gdpr", available: false, kind: "page" },
    ],
  };

  const renderLink = (link: FooterLink) => {
    if (!link.available) {
      return (
        <span className="text-sm text-muted-foreground/50 cursor-not-allowed">
          {link.name}
        </span>
      );
    }

    if (link.kind === "section") {
      return (
        <button
          onClick={() => goToSection(link.href)}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left cursor-pointer"
        >
          {link.name}
        </button>
      );
    }

    if (link.kind === "page") {
      return (
        <Link
          to={link.href}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          {link.name}
        </Link>
      );
    }

    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        {link.name}
      </a>
    );
  };

  return (
    <footer id="footer" className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center space-x-2 mb-4 group cursor-pointer">
              <img 
                src="/logo.svg"
                alt="Krixum AI" 
                className="w-8 h-8 transition-transform group-hover:scale-110 duration-200"
              />
              <span className="text-2xl font-bold tracking-tight text-foreground">
                Krixum AI
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              Unify all AI models in one powerful platform. No vendor lock-in, complete privacy, and the freedom to choose.
            </p>
            <div className="flex space-x-4">
              <button className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </button>
              <button className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                <span className="sr-only">GitHub</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  {renderLink(link)}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  {renderLink(link)}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  {renderLink(link)}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  {renderLink(link)}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Krixum AI. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 sm:mt-0">
              <span className="text-sm text-muted-foreground">Made with ❤️ for AI enthusiasts</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
