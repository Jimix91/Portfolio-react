function Home() {
  return (
    <header className="hero">
      <nav className="nav">
        <div className="container nav-content">
          <span className="logo">JJ</span>
          <div className="nav-links">
            <a href="#projects">Projects</a>
            <a href="#stack">Skills</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <div className="container hero-content">
        <div>
          <p className="eyebrow">Hi, I'm</p>
          <h1 className="name">Joan Jiménez Camps</h1>
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
              <span className="stat">3</span>
              <span className="stat-label">Projects</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Home;
