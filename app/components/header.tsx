import { Link } from "react-router"
import { Button } from "~/components/ui/button"
import { MobileMenuButton } from "~/components/mobile-menu"

const navLinks = [
  { label: "Features", targetId: "features" },
  { label: "Models", targetId: "models" },
  { label: "Highlights", targetId: "highlights" },
  { label: "Advantages", targetId: "advantages" },
  { label: "Pricing", targetId: "pricing" },
  { label: "FAQ", targetId: "faq" }
];

export function Header() {
  return (
    <header className="sticky inset-x-0 top-0 z-50 transition-all duration-300 ease-in-out bg-background/[0.65] backdrop-blur-sm border-b border-border/40">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="pointer-events-auto inline-block">
            <span
              className="inline-block text-xl sm:text-2xl font-bold tracking-tight text-foreground"
              style={{ lineHeight: "1.2", letterSpacing: "-0.03em" }}
            >
              Krixum <span className="font-light">AI</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center gap-8 font-medium text-sm text-foreground">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={`#${link.targetId}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(link.targetId)?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
              className="hover:text-foreground/80 transition-colors px-3 py-2 rounded-md hover:bg-muted/50 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Auth Buttons - Desktop */}
        <div className="hidden lg:flex items-center justify-end gap-4">
          <Button asChild size="lg" variant="default" className="px-6 py-2 font-semibold">
            <a
              href="https://chat.krixum.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign In / Try for Free
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <MobileMenuButton />
      </nav>
    </header>
  )
}