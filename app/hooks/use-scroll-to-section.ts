import { useEffect } from "react";
import { useLocation } from "react-router";

export function useScrollToSection(sectionId?: string) {
  const location = useLocation();

  useEffect(() => {
    if (!sectionId || typeof window === "undefined") {
      return;
    }

    // Small delay to ensure DOM is ready
    const timeout = setTimeout(() => {
      const element = document.getElementById(sectionId);

      if (element) {
        // The CSS scroll-padding-top will handle the offset automatically
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [sectionId, location.key]);
}
