import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { projects } from "../data/projects";
import SectionCard from "../components/project-detail/SectionCard";
import FeatureCards from "../components/project-detail/FeatureCards";
import TechStackList from "../components/project-detail/TechStackList";
import ArchitectureList from "../components/project-detail/ArchitectureList";
import PreviewGallery from "../components/project-detail/PreviewGallery";
import DemoCredentialsReveal from "../components/project-detail/DemoCredentialsReveal";

function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") setActiveImage(null);
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  if (!project) {
    return (
      <>
        <Navbar />
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
      <Navbar />

      <main className="showcase-page">
        <div className="container showcase-shell">

          {/* ── Top bar: back link + action buttons ── */}
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
                <a className="btn tiny primary" href={project.githubFrontend} target="_blank" rel="noreferrer">
                  Frontend code
                </a>
              )}
              {project.githubBackend && (
                <a className="btn tiny primary" href={project.githubBackend} target="_blank" rel="noreferrer">
                  Backend code
                </a>
              )}
              <DemoCredentialsReveal credentials={demoCredentials} />
            </div>
          </div>

          {/* ── Bento grid ── */}
          <section className="showcase-grid">

            {/* Hero header */}
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

            {/* Hero media (logo or screenshot) */}
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

            {/* Overview */}
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

            {/* Tech Stack */}
            <SectionCard title="Tech Stack" className="showcase-tech">
              <TechStackList techStack={project.techStack} />
            </SectionCard>

            {/* Key Features */}
            <SectionCard title="Key Features" className="showcase-features">
              <FeatureCards features={project.features} />
            </SectionCard>

            {/* Architecture */}
            <SectionCard
              title="Architecture / Technical Highlights"
              className="showcase-architecture"
            >
              <ArchitectureList
                architecture={project.architecture}
                techDetails={project.techDetails}
              />
            </SectionCard>

            {/* Security */}
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

            {/* Deployment */}
            {deploymentNotes.length > 0 && (
              <SectionCard title="Deployment" className="showcase-deployment">
                <ul className="showcase-list">
                  {deploymentNotes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </SectionCard>
            )}

            {/* Visual Preview */}
            <SectionCard title="Visual Preview" className="showcase-visuals">
              <PreviewGallery images={galleryImages} onOpenImage={setActiveImage} />
            </SectionCard>

            {/* Lessons Learned */}
            <SectionCard
              title="Challenges & Lessons Learned"
              className="showcase-lessons"
            >
              <ul className="showcase-list">
                {lessons.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </SectionCard>

          </section>

          {/* ── Lightbox overlay ── */}
          {activeImage && (
            <div
              className="showcase-lightbox"
              onClick={() => setActiveImage(null)}
              role="presentation"
            >
              <div
                className="showcase-lightbox-inner"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  className="showcase-lightbox-close"
                  onClick={() => setActiveImage(null)}
                  aria-label="Close expanded image"
                >
                  ×
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

export default ProjectDetailPage;
