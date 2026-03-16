import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { projects } from "../../data/projects";

function Navbar() {
  const navigate = useNavigate();
  const [isProjectsMenuOpen, setIsProjectsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const projectsMenuRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (projectsMenuRef.current && !projectsMenuRef.current.contains(event.target)) {
        setIsProjectsMenuOpen(false);
      }
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        setIsProjectsMenuOpen(false);
        setIsMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function closeAll() {
    setIsProjectsMenuOpen(false);
    setIsMobileMenuOpen(false);
  }

  function handleLogoClick(event) {
    event.preventDefault();
    closeAll();
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <nav className="nav" ref={navRef}>
      <div className="container nav-content">
        <Link to="/" className="logo" aria-label="Home" onClick={handleLogoClick}>
          JJ
        </Link>

        <button
          type="button"
          className="nav-hamburger"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-links${isMobileMenuOpen ? " nav-links--open" : ""}`}>
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
                <Link to="/#projects" onClick={closeAll}>
                  View all projects
                </Link>
                <ul>
                  {projects.map((project) => (
                    <li key={project.slug}>
                      <Link to={`/projects/${project.slug}`} onClick={closeAll}>
                        {project.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <Link to="/#stack" onClick={closeAll}>
            Skills
          </Link>
          <Link to="/#about" onClick={closeAll}>
            About
          </Link>
          <Link to="/#contact" onClick={closeAll}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
