import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Menu } from "lucide-react";

import { Button } from "~/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import { marketingSections } from "~/lib/site-metadata";

export function MobileMenuButton() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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

  const handleNav = (sectionId: string) => {
    setIsOpen(false);

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
        requestAnimationFrame(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        });
        return;
      }
    }

    navigate({ pathname: "/", hash: targetHash }, { preventScrollReset: true });
  };

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
            <button
              onClick={() => {
                setIsOpen(false);
                navigate("/");
              }}
              className="text-xl font-bold cursor-pointer"
            >
              Krixum AI
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-2 py-6 flex-1">
            {navigation.map((item) => (
              <button
                key={item.id}
                className="text-lg font-medium text-foreground hover:text-foreground/80 hover:bg-muted/50 transition-colors py-3 px-3 rounded-md text-left cursor-pointer"
                onClick={() => handleNav(item.sectionId)}
              >
                {item.title}
              </button>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="flex flex-col gap-3 pt-6 border-t">
            <Button
              variant="outline"
              className="w-full h-12"
              onClick={() => {
                window.open("https://chat.krixum.com/auth/signin", "_blank");
                setIsOpen(false);
              }}
            >
              Sign in
            </Button>
            <Button
              className="w-full h-12"
              onClick={() => {
                window.open("https://chat.krixum.com/auth/signup", "_blank");
                setIsOpen(false);
              }}
            >
              Try for Free
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
