import { useEffect } from "react";
import { useLocation } from "react-router";

export function useScrollToSection(sectionId?: string) {
  const location = useLocation();

  useEffect(() => {
    if (!sectionId || typeof window === "undefined") {
      return;
    }

    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [sectionId, location.key]);
}
