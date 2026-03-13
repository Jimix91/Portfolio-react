import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ProjectDetail from "./components/ProjectDetail";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import { Route, Routes } from "react-router-dom";

function PortfolioPage() {
  return (
    <main className="page">
      <Home />
      <Projects />
      <Stack />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioPage />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
    </Routes>
  );
}

export default App;
