const stack = [
  {
    title: "Frontend",
    items: [
      "HTML",
      "CSS",
      "Responsive Design",
      "JavaScript (ES6+)",
      "DOM",
      "React (Hooks, Router, Context)",
      "API Consumption",
      "Testing (Jest, RTL)",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express (Routing, Middleware)",
      "REST APIs",
      "CRUD",
      "MongoDB / Mongoose",
      "Auth (JWT)",
      "Error Handling",
      "Deployment (Fly.io, Netlify)",
    ],
  },
  {
    title: "Tools",
    items: [
      "Git & GitHub",
      "VS Code",
      "Postman / Insomnia",
      "StackBlitz",
      "Chrome DevTools",
    ],
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
