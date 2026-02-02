const stack = [
  {
    title: "Frontend",
    items: ["React", "Vite", "Tailwind", "CSS Modules"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Figma", "Docker"],
  },
];

function Stack() {
  return (
    <section className="section" id="stack">
      <div className="container">
        <h2 className="section-title">Tech stack</h2>
        <div className="grid stack-grid">
          {stack.map((group) => (
            <div className="card" key={group.title}>
              <h3>{group.title}</h3>
              <ul className="stack-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stack;
