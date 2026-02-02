function Quality() {
  return (
    <section className="section alt">
      <div className="container">
        <h2 className="section-title">Code quality</h2>
        <div className="grid quality-grid">
          <div className="card">
            <h3>Clean repos</h3>
            <p className="muted">
              Clear README, quick setup, and tidy structure.
            </p>
          </div>
          <div className="card">
            <h3>Clear commits</h3>
            <p className="muted">
              Easy-to-follow history with small, coherent changes.
            </p>
          </div>
          <div className="card">
            <h3>No surprises</h3>
            <p className="muted">Nothing broken or half-baked 😅</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Quality;
