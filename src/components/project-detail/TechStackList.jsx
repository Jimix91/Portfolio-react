function TechStackList({ techStack }) {
  if (!techStack) return null;

  return (
    <ul className="showcase-stack-list">
      <li>
        <strong>Frontend:</strong> {techStack.frontend}
      </li>
      <li>
        <strong>Backend:</strong> {techStack.backend}
      </li>
      <li>
        <strong>Database:</strong> {techStack.database}
      </li>
      <li>
        <strong>Auth/Security:</strong> {techStack.authSecurity}
      </li>
      <li>
        <strong>Tooling:</strong> {techStack.tooling}
      </li>
    </ul>
  );
}

export default TechStackList;
