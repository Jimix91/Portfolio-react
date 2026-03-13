import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/sections/HeroSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import StackSection from "../components/sections/StackSection";
import AboutSection from "../components/sections/AboutSection";
import ContactSection from "../components/sections/ContactSection";

function PortfolioPage() {
  return (
    <main className="page">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <StackSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

export default PortfolioPage;
