import profileImage from "../assets/Imagen Perfil 2.png";
import { projects } from "../data/projects";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const projectCount = projects.length;
  const projectLabel = projectCount === 1 ? "Project" : "Projects";
  const [isProjectsMenuOpen, setIsProjectsMenuOpen] = useState(false);
  const projectsMenuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        projectsMenuRef.current &&
        !projectsMenuRef.current.contains(event.target)
      ) {
        setIsProjectsMenuOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        setIsProjectsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header className="hero">
      <nav className="nav">
        <div className="container nav-content">
          <span className="logo">JJ</span>
          <div className="nav-links">
            <div className="nav-dropdown" ref={projectsMenuRef}>
              <button
                type="button"
                className="nav-dropdown-trigger"
                onClick={() => setIsProjectsMenuOpen((prev) => !prev)}
                aria-expanded={isProjectsMenuOpen}
                aria-controls="projects-nav-menu"
              >
                Projects
              </button>
              {isProjectsMenuOpen && (
                <div id="projects-nav-menu" className="nav-dropdown-menu">
                  <a href="#projects" onClick={() => setIsProjectsMenuOpen(false)}>
                    View all projects
                  </a>
                  <ul>
                    {projects.map((project) => (
                      <li key={project.title}>
                        <Link
                          to={`/projects/${project.slug}`}
                          onClick={() => setIsProjectsMenuOpen(false)}
                        >
                          {project.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <a href="#stack">Skills</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <div className="container hero-content">
        <div>
          <p className="eyebrow">Hi, I'm</p>
          <div className="name-row">
            <img
              className="profile-image"
              src={profileImage}
              alt="Joan Jimenez Camps"
            />
            <h1 className="name">Joan Jiménez Camps</h1>
          </div>
          <h2 className="role-title">
            Full Stack Web Developer – Internal Tools & Business Applications
          </h2>
          <p className="lead">
            Junior Full-Stack developer with hands-on experience in frontend and
            full-stack projects (JavaScript, React, MERN). I bring an IT
            background in enterprise systems and technical support, with a
            strong focus on problem-solving and code quality.
          </p>
          <div className="cta">
            <a className="btn primary" href="#projects">
              View projects
            </a>
            <a className="btn ghost" href="#contact">
              Contact
            </a>
          </div>
        </div>
        <div className="hero-card">
          <h3>Focus</h3>
          <ul>
            <li>Internal tools and business apps</li>
            <li>Frontend + full-stack delivery</li>
            <li>Quality, reliability, and UX</li>
          </ul>
          <div className="hero-stats">
            <div>
              <span className="stat">2025</span>
              <span className="stat-label">Bootcamp</span>
            </div>
            <div>
              <span className="stat">MERN</span>
              <span className="stat-label">Stack</span>
            </div>
            <div>
              <span className="stat">{projectCount}</span>
              <span className="stat-label">{projectLabel}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Home;
