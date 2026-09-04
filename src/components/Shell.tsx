import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { useTheme } from "@/lib/store";
import { T } from "@/lib/theme";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Shell() {
  const { isDark } = useTheme();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div style={{ background: T.bg, color: T.fg, fontFamily: "'Inter', sans-serif", minHeight: "100vh", overflowX: "hidden", transition: "background 0.35s ease, color 0.35s ease" }}>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
