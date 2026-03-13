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

export default ArchitectureList;
