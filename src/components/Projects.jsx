const projects = [
  {
    title: "TaskFlow",
    problem: "Keeps remote teams aligned and reduces task chaos.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    role: "Full Stack: UI, REST API, and deployment.",
    demo: "https://taskflow-demo.example.com",
    github: "https://github.com/username/taskflow",
  },
  {
    title: "GreenCart",
    problem: "Cuts food waste by connecting stores and buyers.",
    tech: ["React", "Firebase", "Stripe"],
    role: "Frontend: architecture, design, and checkout.",
    demo: "https://greencart-demo.example.com",
    github: "https://github.com/username/greencart",
  },
  {
    title: "FitLog",
    problem: "Tracks training with clear metrics and progress.",
    tech: ["Vue", "Node.js", "PostgreSQL"],
    role: "Backend: models, auth, and reporting.",
    demo: "https://fitlog-demo.example.com",
    github: "https://github.com/username/fitlog",
  },
  {
    title: "CityPulse",
    problem: "Turns city data into fast, actionable insights.",
    tech: ["React", "D3.js", "Python"],
    role: "Data viz: dashboards and storytelling.",
    demo: "https://citypulse-demo.example.com",
    github: "https://github.com/username/citypulse",
  },
];

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured projects</h2>
        <p className="section-subtitle">
          3–5 solid projects, well documented and impact-focused.
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
