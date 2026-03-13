import { projects } from "../../data/projects";
import { Link } from "react-router-dom";

function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured projects</h2>
        <p className="section-subtitle">
          Selected work focused on CRUD, APIs, and full-stack delivery.
        </p>
        <div className="grid projects-grid bento-projects-grid">
          {projects.map((project, index) => (
            <article
              className={`card project-card bento-project-card bento-project-card-${index + 1}`}
              key={project.title}
            >
              <div className="project-header">
                <div>
                  <div className="project-label-row">
                    <p className="project-label">Featured project</p>
                    <Link className="btn tiny subtle" to={`/projects/${project.slug}`}>
                      Know more
                    </Link>
                  </div>
                  <h3>{project.title}</h3>
                  {project.subtitle && <p className="muted">{project.subtitle}</p>}
                </div>
                <span className="project-role">{project.role}</span>
              </div>
              <p className="muted">{project.problem}</p>
              <div className="tags">
                {project.tech.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {project.demo && (
                  <a className="btn tiny ghost" href={project.demo} target="_blank" rel="noreferrer">
                    Live demo
                  </a>
                )}
                {project.github && (
                  <a className="btn tiny primary" href={project.github} target="_blank" rel="noreferrer">
                    View code
                  </a>
                )}
                {project.githubFrontend && (
                  <a className="btn tiny primary" href={project.githubFrontend} target="_blank" rel="noreferrer">
                    Frontend code
                  </a>
                )}
                {project.githubBackend && (
                  <a className="btn tiny primary" href={project.githubBackend} target="_blank" rel="noreferrer">
                    Backend code
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
