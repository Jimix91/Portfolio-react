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

export default SectionCard;
