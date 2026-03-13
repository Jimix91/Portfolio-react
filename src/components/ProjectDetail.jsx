import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  const hasDetailedContent = Boolean(project?.projectDescription);

  if (!project) {
    return (
      <main className="project-detail-page">
        <div className="container project-detail-shell">
          <p className="eyebrow">Project not found</p>
          <h1 className="project-detail-title">This project does not exist.</h1>
          <Link className="btn primary" to="/">
            Back to portfolio
          </Link>
        </div>
      </main>
    );
  }

  const heroImage = project.screenshots?.[0];
  const galleryImages = hasDetailedContent
    ? project.screenshots?.slice(1) || []
    : project.screenshots || [];

  return (
    <main className="project-detail-page">
      <div className="container project-detail-shell">
        <div className="project-detail-topbar">
          <Link className="btn tiny ghost" to="/#projects">
            Back to projects
          </Link>
          <div className="project-detail-actions">
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
        </div>

        <header
          className={`project-detail-header ${
            hasDetailedContent ? "project-detail-header-pro" : ""
          }`}
        >
          <div>
            <p className="project-label">Featured project</p>
            <h1 className="project-detail-title">{project.title}</h1>
            {project.subtitle && <p className="role-title">{project.subtitle}</p>}
            <p className="lead">{project.problem}</p>
            <div className="tags">
              {project.tech.slice(0, 6).map((item) => (
                <span className="tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
          {heroImage && (
            <figure className="project-hero-media">
              <img src={heroImage.src} alt={heroImage.alt} loading="lazy" />
            </figure>
          )}
        </header>

        {!hasDetailedContent && (
          <>
            <section className="detail-card">
              <h2 className="section-title">What this project is for</h2>
              <p className="muted">{project.overview}</p>
            </section>

            <section className="detail-card">
              <h2 className="section-title">Need it solves</h2>
              <p className="muted">{project.needCovered}</p>
            </section>

            <section className="detail-card">
              <h2 className="section-title">Technology in detail</h2>
              <ul className="detail-list">
                {project.techDetails.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="tags">
                {project.tech.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </section>

            <section className="detail-card">
              <h2 className="section-title">Detailed app walkthrough</h2>
              <ul className="detail-list">
                {project.appWalkthrough.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
            </section>
          </>
        )}

        {!hasDetailedContent && (
          <section className="detail-card">
            <h2 className="section-title">App images and explanation</h2>
            <div className="project-screenshots">
              {project.screenshots.map((image) => (
                <figure className="project-shot" key={`${project.slug}-${image.alt}`}>
                  <img src={image.src} alt={image.alt} loading="lazy" />
                  <figcaption>{image.caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        {project.projectDescription && (
          <section className="project-pro-grid">
            <div className="project-main-column">
              <section className="detail-card">
                <h2 className="section-title">Project Description</h2>
                <p className="muted">{project.projectDescription}</p>
              </section>

              {project.problemItSolves && (
                <section className="detail-card">
                  <h2 className="section-title">Problem it Solves</h2>
                  <p className="muted">{project.problemItSolves}</p>
                  {project.problemItSolvesHighlights?.length > 0 && (
                    <ul className="detail-list">
                      {project.problemItSolvesHighlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </section>
              )}

              {project.techStack && (
                <section className="detail-card">
                  <h2 className="section-title">Tech Stack</h2>
                  <ul className="detail-list stack-list-pro">
                    <li>
                      <strong>Frontend:</strong> {project.techStack.frontend}
                    </li>
                    <li>
                      <strong>Backend:</strong> {project.techStack.backend}
                    </li>
                    <li>
                      <strong>Database:</strong> {project.techStack.database}
                    </li>
                    <li>
                      <strong>Auth/Security libraries:</strong> {project.techStack.authSecurity}
                    </li>
                    <li>
                      <strong>Tooling:</strong> {project.techStack.tooling}
                    </li>
                  </ul>
                </section>
              )}

              {project.features?.length > 0 && (
                <section className="detail-card">
                  <h2 className="section-title">Features</h2>
                  <div className="feature-grid">
                    {project.features.map((group) => (
                      <article key={group.title} className="feature-card">
                        <h3>{group.title}</h3>
                        <ul className="detail-list">
                          {group.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </article>
                    ))}
                  </div>
                </section>
              )}

              {project.architecture?.length > 0 && (
                <section className="detail-card">
                  <h2 className="section-title">Architecture</h2>
                  <p className="muted">
                    TicketFlow follows a clean full-stack split with two apps:
                  </p>
                  <div className="detail-groups">
                    {project.architecture.map((group) => (
                      <div key={group.title} className="detail-group">
                        <h3>{group.title}</h3>
                        <ul className="detail-list">
                          {group.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {(project.securityCurrent?.length > 0 || project.deployment?.length > 0) && (
                <section className="detail-split">
                  {project.securityCurrent?.length > 0 && (
                    <div className="detail-card">
                      <h2 className="section-title">Security</h2>
                      <p className="muted">Current security mechanisms include:</p>
                      <ul className="detail-list">
                        {project.securityCurrent.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                      {project.securityNext?.length > 0 && (
                        <>
                          <h3 className="detail-subtitle">
                            Security improvements you could add next
                          </h3>
                          <ul className="detail-list">
                            {project.securityNext.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  )}

                  {project.deployment?.length > 0 && (
                    <div className="detail-card">
                      <h2 className="section-title">Deployment</h2>
                      <p className="muted">
                        The project is ready for common modern deployment paths:
                      </p>
                      <ul className="detail-list">
                        {project.deployment.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </section>
              )}

              {project.lessonsLearned?.length > 0 && (
                <section className="detail-card">
                  <h2 className="section-title">Lessons Learned</h2>
                  <ul className="detail-list">
                    {project.lessonsLearned.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              )}

              {galleryImages.length > 0 && (
                <section className="detail-card">
                  <h2 className="section-title">App images and explanation</h2>
                  <div className="project-screenshots">
                    {galleryImages.map((image) => (
                      <figure className="project-shot" key={`${project.slug}-${image.alt}`}>
                        <img src={image.src} alt={image.alt} loading="lazy" />
                        <figcaption>{image.caption}</figcaption>
                      </figure>
                    ))}
                  </div>
                </section>
              )}
            </div>

            <aside className="project-side-column">
              <section className="detail-card side-card">
                <h2 className="section-title">Project quick view</h2>
                <ul className="detail-list">
                  <li>
                    <strong>Type:</strong> {project.subtitle}
                  </li>
                  <li>
                    <strong>Role:</strong> {project.role}
                  </li>
                  <li>
                    <strong>Main stack:</strong> {project.tech.slice(0, 4).join(" • ")}
                  </li>
                </ul>
              </section>

              {project.screenshots?.length > 0 && (
                <section className="detail-card side-card">
                  <h2 className="section-title">Visual highlights</h2>
                  <div className="mini-shot-grid">
                    {project.screenshots.map((image) => (
                      <img key={`${image.alt}-mini`} src={image.src} alt={image.alt} loading="lazy" />
                    ))}
                  </div>
                </section>
              )}
            </aside>
          </section>
        )}
      </div>
    </main>
  );
}

export default ProjectDetail;
