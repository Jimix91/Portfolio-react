import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import PortfolioPage from "./pages/PortfolioPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";

function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const sectionId = decodeURIComponent(hash.slice(1));

    // Delay to ensure the destination section is mounted after route changes.
    requestAnimationFrame(() => {
      const targetSection = document.getElementById(sectionId);
      if (!targetSection) return;

      const navElement = document.querySelector(".nav");
      const navOffset = navElement ? navElement.getBoundingClientRect().height + 12 : 12;
      const top = targetSection.getBoundingClientRect().top + window.scrollY - navOffset;

      window.scrollTo({ top, behavior: "smooth" });
    });
  }, [hash, pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
