function Home() {
  return (
    <header className="hero">
      <div className="container hero-content">
        <div>
          <p className="eyebrow">Hi, I'm Joan Jiménez</p>
          <h1>Full Stack Web Developer</h1>
          <p className="lead">
            I build clear, fast web products. I focus on real problems with
            simple experiences and maintainable code.
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
          <h3>What I do</h3>
          <ul>
            <li>Frontend with UX focus</li>
            <li>Clean, scalable APIs</li>
            <li>Fast and clear delivery</li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Home;
