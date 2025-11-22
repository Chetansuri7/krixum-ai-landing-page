import { Link, useLocation, useNavigate } from "react-router";
import { Twitter, Github, Linkedin, Heart } from "lucide-react";

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

    const targetHash = `#${sectionId}`;

    if (location.pathname === "/") {
      if (location.hash !== targetHash) {
        navigate({ hash: targetHash }, { preventScrollReset: true });
      }

      const element = document.getElementById(sectionId);
      if (element) {
        requestAnimationFrame(() =>
          element.scrollIntoView({ behavior: "smooth", block: "start" }),
        );
        return;
      }
    }

    navigate({ pathname: "/", hash: targetHash }, { preventScrollReset: true });
  };

  const footerLinks: Record<string, FooterLink[]> = {
    product: [
      { name: "Benefits", href: "/benefits", available: true, kind: "page" },
      { name: "Overview", href: "/overview", available: true, kind: "page" },
      { name: "Highlights", href: "/highlights", available: true, kind: "page" },
      { name: "Workflow", href: "/how-it-works", available: true, kind: "page" },
    ],
    company: [
      { name: "Contact", href: "/contact", available: true, kind: "page" },
      { name: "About", href: "/about", available: true, kind: "page" },
      { name: "Careers", href: "/careers", available: true, kind: "page" },
    ],
    legal: [
      { name: "Privacy", href: "/privacy", available: true, kind: "page" },
      { name: "Terms", href: "/terms", available: true, kind: "page" },
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
          className="text-sm text-muted-foreground hover:text-primary transition-colors text-left cursor-pointer"
        >
          {link.name}
        </button>
      );
    }

    if (link.kind === "page") {
      return (
        <Link
          to={link.href}
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
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
        className="text-sm text-muted-foreground hover:text-primary transition-colors"
      >
        {link.name}
      </a>
    );
  };

  return (
    <footer id="footer" className="bg-background border-t border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-flex items-center space-x-2 group cursor-pointer">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary">
                <img
                  src="/logo.svg"
                  alt="Krixum"
                  className="w-5 h-5"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                Krixum
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              One app to search, compare, and book — taxis, home services, delivery, whatever you need.
            </p>
            <div className="flex space-x-4">
              <button className="p-2 rounded-full bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer">
                <span className="sr-only">Twitter</span>
                <Twitter className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-full bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer">
                <span className="sr-only">GitHub</span>
                <Github className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-full bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
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
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Krixum AI. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>for AI enthusiasts</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
