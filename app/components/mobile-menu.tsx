import { useState } from "react"
import { Menu } from "lucide-react"
import { Link } from "react-router"
import { Button } from "~/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet"

export function MobileMenuButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden h-9 w-9 p-1.5 text-foreground hover:text-foreground/80 focus:text-foreground/80"
          aria-label="Open navigation menu"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
        <div className="flex flex-col h-full p-6">
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b">
            <Link to="/" className="text-xl font-bold" onClick={() => setIsOpen(false)}>
              Krixum <span className="font-light">AI</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-2 py-6 flex-1">
            {[
              { label: "Features", targetId: "features" },
              { label: "Models", targetId: "models" },
              { label: "Highlights", targetId: "highlights" },
              { label: "Advantages", targetId: "advantages" },
              { label: "Pricing", targetId: "pricing" },
              { label: "FAQ", targetId: "faq" }
            ].map((link) => (
              <a 
                key={link.label}
                href={`#${link.targetId}`}
                className="text-lg font-medium text-foreground hover:text-foreground/80 hover:bg-muted/50 transition-colors py-3 px-3 rounded-md"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(link.targetId)?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                  setIsOpen(false);
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="flex flex-col gap-3 pt-6 border-t">
            <Button variant="outline" asChild className="w-full h-12">
              <a
                href="https://chat.krixum.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                Sign in
              </a>
            </Button>
            <Button asChild className="w-full h-12">
              <a
                href="https://chat.krixum.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
              >
                Try for Free
              </a>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}