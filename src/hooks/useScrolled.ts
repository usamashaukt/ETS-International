import { useState, useEffect } from "react";

/**
 * Custom hook to detect when the window is scrolled past a given threshold.
 * Uses passive event listener for optimal performance.
 */
export function useScrolled(threshold = 60): boolean {
  const [scrolled, setScrolled] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.scrollY > threshold;
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}
