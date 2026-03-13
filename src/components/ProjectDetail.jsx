import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";
import { projects } from "../data/projects";

function SectionCard({ title, subtitle, className = "", children }) {
  if (!children) return null;
  const classes = `showcase-card ${className}`.trim();

  return (
    <section className={classes}>
      <h2 className="showcase-section-title">{title}</h2>
      {subtitle && <p className="muted showcase-subtitle">{subtitle}</p>}
      {children}
    </section>
  );
}

function FeatureCards({ features }) {
  if (!features?.length) {
    return null;
  }

  return (
    <div className="showcase-feature-grid">
      {features.map((feature) => (
        <article key={feature.title} className="showcase-feature-card">
          <h3>{feature.title}</h3>
          <ul className="showcase-list">
            {feature.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

function TechStackList({ techStack }) {
  if (!techStack) {
    return null;
  }

  return (
    <ul className="showcase-stack-list">
      <li>
        <strong>Frontend:</strong> {techStack.frontend}
      </li>
      <li>
        <strong>Backend:</strong> {techStack.backend}
      </li>
      <li>
        <strong>Database:</strong> {techStack.database}
      </li>
      <li>
        <strong>Auth/Security:</strong> {techStack.authSecurity}
      </li>
      <li>
        <strong>Tooling:</strong> {techStack.tooling}
      </li>
    </ul>
  );
}

function ArchitectureList({ architecture, techDetails }) {
  if (architecture?.length) {
    return (
      <div className="showcase-architecture-groups">
        {architecture.map((group) => (
          <article className="showcase-architecture-card" key={group.title}>
            <h3>{group.title}</h3>
            <ul className="showcase-list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    );
  }

  if (techDetails?.length) {
    return (
      <ul className="showcase-list">
        {techDetails.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  return null;
}

function PreviewGallery({ images, onOpenImage }) {
  if (!images?.length) {
    return null;
  }

  return (
    <div className="showcase-gallery">
      {images.map((image) => (
        <figure className="showcase-gallery-item" key={image.alt}>
          <button
            type="button"
            className="showcase-image-button"
            onClick={() => onOpenImage(image)}
            aria-label={`Expand image: ${image.alt}`}
          >
            <img src={image.src} alt={image.alt} loading="lazy" />
          </button>
          <figcaption>{image.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

function DemoCredentialsReveal({ credentials }) {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedKey, setCopiedKey] = useState("");

  if (!credentials?.length) {
    return null;
  }

  async function copyToClipboard(value, key) {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(""), 1400);
    } catch {
      setCopiedKey("");
    }
  }

  return (
    <div className="demo-reveal-wrap">
      <button
        type="button"
        className="btn tiny secret-toggle-btn"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls="demo-credentials-panel"
      >
        {isOpen ? "Hide demo access" : "Reveal demo access"}
      </button>

      {isOpen && (
        <section
          id="demo-credentials-panel"
          className="demo-credentials-popover demo-credentials-enter"
        >
          <p className="project-label">Secret access</p>
          <h3>Demo Credentials</h3>
          <p className="muted">
            Use these demo accounts to explore different roles in the app.
          </p>
          <div className="demo-credentials-grid">
            {credentials.map((credential) => {
              const emailKey = `${credential.role}-email`;
              const passwordKey = `${credential.role}-password`;

              return (
                <article key={credential.role} className="demo-credential-card">
                  <h4>{credential.role}</h4>

                  <div className="demo-row">
                    <span className="demo-label">Email</span>
                    <code>{credential.email}</code>
                    <button
                      type="button"
                      className="btn tiny demo-copy-btn"
                      onClick={() => copyToClipboard(credential.email, emailKey)}
                    >
                      {copiedKey === emailKey ? "Copied" : "Copy"}
                    </button>
                  </div>

                  <div className="demo-row">
                    <span className="demo-label">Password</span>
                    <code>{credential.password}</code>
                    <button
                      type="button"
                      className="btn tiny demo-copy-btn"
                      onClick={() => copyToClipboard(credential.password, passwordKey)}
                    >
                      {copiedKey === passwordKey ? "Copied" : "Copy"}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}

function ProjectDetailNav() {
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
    <nav className="nav">
      <div className="container nav-content">
        <Link to="/" className="logo" aria-label="Back to home">
          JJ
        </Link>
        <div className="nav-links">
          <div className="nav-dropdown" ref={projectsMenuRef}>
            <button
              type="button"
              className="nav-dropdown-trigger"
              onClick={() => setIsProjectsMenuOpen((prev) => !prev)}
              aria-expanded={isProjectsMenuOpen}
              aria-controls="projects-nav-menu-detail"
            >
              Projects
            </button>
            {isProjectsMenuOpen && (
              <div id="projects-nav-menu-detail" className="nav-dropdown-menu">
                <Link
                  to="/#projects"
                  onClick={() => setIsProjectsMenuOpen(false)}
                >
                  View all projects
                </Link>
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
          <Link to="/#stack">Skills</Link>
          <Link to="/#about">About</Link>
          <Link to="/#contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        setActiveImage(null);
      }
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  if (!project) {
    return (
      <>
        <ProjectDetailNav />
        <main className="showcase-page">
          <div className="container showcase-shell">
            <p className="eyebrow">Project not found</p>
            <h1 className="project-detail-title">This project does not exist.</h1>
            <Link className="btn primary" to="/">
              Back to portfolio
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const heroImage = project.screenshots?.[0] || null;
  const galleryImages = project.screenshots?.slice(1) || [];
  const overviewText = project.projectDescription || project.overview;
  const problemText = project.problemItSolves || project.needCovered;
  const lessons = project.lessonsLearned || project.appWalkthrough || [];
  const securityCurrent = project.securityCurrent || [];
  const securityNext = project.securityNext || [];
  const deploymentNotes = project.deployment || [];
  const demoCredentials = project.demoCredentials || [];
  const isLogoHeroImage = Boolean(
    heroImage?.alt?.toLowerCase().includes("logo") ||
      heroImage?.alt?.toLowerCase().includes("brand")
  );

  return (
    <>
      <ProjectDetailNav />

      <main className="showcase-page">
        <div className="container showcase-shell">
          <div className="showcase-topbar">
            <Link className="btn tiny ghost" to="/#projects">
              Back to projects
            </Link>
            <div className="showcase-actions">
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
              <DemoCredentialsReveal credentials={demoCredentials} />
            </div>
          </div>

          <section className="showcase-grid">
            <header className="showcase-card showcase-hero">
              <p className="project-label">Featured project</p>
              <h1 className="showcase-title">{project.title}</h1>
              {project.subtitle && <p className="role-title">{project.subtitle}</p>}
              <p className="lead showcase-lead">{project.problem}</p>
              <div className="tags showcase-tags">
                {project.tech.slice(0, 6).map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </header>

            {heroImage && (
              <figure className="showcase-card showcase-hero-media">
                {isLogoHeroImage ? (
                  <img src={heroImage.src} alt={heroImage.alt} loading="lazy" />
                ) : (
                  <button
                    type="button"
                    className="showcase-image-button"
                    onClick={() => setActiveImage(heroImage)}
                    aria-label={`Expand image: ${heroImage.alt}`}
                  >
                    <img src={heroImage.src} alt={heroImage.alt} loading="lazy" />
                  </button>
                )}
                <figcaption>{heroImage.caption}</figcaption>
              </figure>
            )}

            <SectionCard
              title="Project Overview"
              subtitle={problemText}
              className="showcase-overview"
            >
              <p className="muted">{overviewText}</p>
              {project.problemItSolvesHighlights?.length > 0 && (
                <ul className="showcase-list">
                  {project.problemItSolvesHighlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </SectionCard>

            <SectionCard title="Tech Stack" className="showcase-tech">
              <TechStackList techStack={project.techStack} />
            </SectionCard>

            <SectionCard title="Key Features" className="showcase-features">
              <FeatureCards features={project.features} />
            </SectionCard>

            <SectionCard
              title="Architecture / Technical Highlights"
              className="showcase-architecture"
            >
              <ArchitectureList
                architecture={project.architecture}
                techDetails={project.techDetails}
              />
            </SectionCard>

            {(securityCurrent.length > 0 || securityNext.length > 0) && (
              <SectionCard title="Security" className="showcase-security">
                {securityCurrent.length > 0 && (
                  <>
                    <h3>Current Implementation</h3>
                    <ul className="showcase-list">
                      {securityCurrent.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}

                {securityNext.length > 0 && (
                  <>
                    <h3>Next Steps</h3>
                    <ul className="showcase-list">
                      {securityNext.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}
              </SectionCard>
            )}

            {deploymentNotes.length > 0 && (
              <SectionCard title="Deployment" className="showcase-deployment">
                <ul className="showcase-list">
                  {deploymentNotes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </SectionCard>
            )}

            <SectionCard title="Visual Preview" className="showcase-visuals">
              <PreviewGallery images={galleryImages} onOpenImage={setActiveImage} />
            </SectionCard>

            <SectionCard title="Challenges & Lessons Learned" className="showcase-lessons">
              <ul className="showcase-list">
                {lessons.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </SectionCard>
          </section>

          {activeImage && (
            <div className="showcase-lightbox" onClick={() => setActiveImage(null)} role="presentation">
              <div className="showcase-lightbox-inner" onClick={(event) => event.stopPropagation()}>
                <button
                  type="button"
                  className="showcase-lightbox-close"
                  onClick={() => setActiveImage(null)}
                  aria-label="Close expanded image"
                >
                  x
                </button>
                <img src={activeImage.src} alt={activeImage.alt} />
                {activeImage.caption && <p>{activeImage.caption}</p>}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default ProjectDetail;
