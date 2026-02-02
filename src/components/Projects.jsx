const projects = [
  {
    title: "Vanilla JavaScript Interactive App (Nov 2025)",
    problem:
      "Interactive application built with pure JavaScript and DOM APIs, focused on element manipulation and UX.",
    tech: ["JavaScript", "DOM", "HTML", "CSS"],
    role: "Frontend: UI, DOM logic, and UX polish.",
    demo: "https://your-deployment-url.com",
    github: "https://github.com/Jimix91/your-repo",
  },
  {
    title: "React SPA – CRUD Application (Dec 2025)",
    problem:
      "Single Page Application with external API + mock backend and full CRUD operations.",
    tech: ["React", "Hooks", "Context", "REST APIs"],
    role: "Frontend: architecture, CRUD flows, and integration.",
    demo: "https://your-deployment-url.com",
    github: "https://github.com/Jimix91/your-repo",
  },
  {
    title: "Full Stack MERN Application (Dec 2025)",
    problem:
      "Fullstack app integrating front and back end with auth, CRUD, and deployment.",
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    role: "Full Stack: models, API, auth, and UI.",
    demo: "https://your-deployment-url.com",
    github: "https://github.com/Jimix91/your-repo",
  },
  {
    title: "Final Bootcamp Project – Fullstack Application",
    problem:
      "End-to-end MERN project with role management, security basics, and deployment.",
    tech: ["MERN", "Mongoose", "Express", "React Router"],
    role: "Full Stack: front/back integration and deployment.",
    demo: "https://your-deployment-url.com",
    github: "https://github.com/Jimix91/your-repo",
  },
];

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured projects</h2>
        <p className="section-subtitle">
          Selected work from 2025, focused on CRUD, APIs, and full-stack
          delivery.
        </p>
        <div className="grid projects-grid">
          {projects.map((project) => (
            <article className="card" key={project.title}>
              <div className="card-header">
                <h3>{project.title}</h3>
                <div className="card-links">
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
              <p className="muted">{project.problem}</p>
              <p className="role">Role: {project.role}</p>
              <div className="tags">
                {project.tech.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
