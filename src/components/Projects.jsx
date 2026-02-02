const projects = [
  {
    title: "Vanilla JavaScript Interactive App (Nov 2025)",
    problem:
      "Interactive app built with pure JavaScript and DOM APIs, focused on UX and element manipulation.",
    tech: ["JavaScript", "DOM", "HTML", "CSS"],
    role: "Frontend: UI, DOM logic, and UX polish.",
    demo: "https://jimix91.github.io/Asteroid-Invader.game/",
    github: "https://github.com/Jimix91/Asteroid-Invader.game",
  },
  {
    title: "React SPA – CRUD Application (Dec 2025)",
    problem:
      "SPA with external API + mock backend implementing full CRUD workflows.",
    tech: ["React", "Hooks", "Context", "REST APIs"],
    role: "Frontend: architecture, CRUD flows, and integration.",
    demo: "https://cityverse-travel-app.vercel.app/",
    github: "https://github.com/JC-Studio-DualCode/travel-project-app",
  },
  {
    title: "Full Stack MERN Application (Dec 2025)",
    problem:
      "Fullstack app integrating front/back with auth, CRUD, and deployment.",
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    role: "Full Stack: models, API, auth, and UI.",
    demo: "https://arkadia-gameportal.vercel.app/",
    githubFrontend:
      "https://github.com/Jimix91/arkadia-gamePortal-project-frontend",
    githubBackend:
      "https://github.com/Jimix91/arkadia-gamePortal-project-backend",
  },
];

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured projects</h2>
        <p className="section-subtitle">
          Selected work focused on CRUD, APIs, and full-stack delivery.
        </p>
        <div className="grid projects-grid">
          {projects.map((project) => (
            <article className="card project-card" key={project.title}>
              <div className="project-header">
                <div>
                  <p className="project-label">Featured project</p>
                  <h3>{project.title}</h3>
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
                <a
                  className="btn tiny ghost"
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live demo
                </a>
                {project.github && (
                  <a
                    className="btn tiny primary"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View code
                  </a>
                )}
                {project.githubFrontend && (
                  <a
                    className="btn tiny primary"
                    href={project.githubFrontend}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Frontend code
                  </a>
                )}
                {project.githubBackend && (
                  <a
                    className="btn tiny primary"
                    href={project.githubBackend}
                    target="_blank"
                    rel="noreferrer"
                  >
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

export default Projects;
