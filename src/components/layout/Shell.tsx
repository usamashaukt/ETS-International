import { Outlet, useLocation } from "react-router";
import { useLayoutEffect } from "react";
import { useTheme } from "@/context/ThemeContext";
import { T } from "@/theme";
import Navbar from "./Navbar";
import Footer from "./Footer";
import RouteProgressBar from "./RouteProgressBar";

export default function Shell() {
  const { isDark } = useTheme();
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div
      data-theme-active={isDark ? "dark" : "light"}
      style={{
        background: T.bg,
        color: T.fg,
        fontFamily: "'Inter', sans-serif",
        minHeight: "100vh",
        overflowX: "hidden",
        transition: "background 0.35s ease, color 0.35s ease",
      }}
    >
      <RouteProgressBar />
      <Navbar />
      <main className="relative">
        <div key={pathname} className="page-transition min-h-[calc(100vh-80px)]">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}

