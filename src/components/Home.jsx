function Home() {
  return (
    <header className="hero">
      <div className="container hero-content">
        <div>
          <p className="eyebrow">Hi, I'm</p>
          <h1 className="name">Joan Jiménez</h1>
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
        </div>
      </div>
    </header>
  );
}

export default Home;
