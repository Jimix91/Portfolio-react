function FeatureCards({ features }) {
  if (!features?.length) return null;

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

export default FeatureCards;
