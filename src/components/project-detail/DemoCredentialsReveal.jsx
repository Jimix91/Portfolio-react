import { useState } from "react";

function DemoCredentialsReveal({ credentials }) {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedKey, setCopiedKey] = useState("");

  if (!credentials?.length) return null;

  async function copyToClipboard(value, key) {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(""), 1400);
    } catch {
      setCopiedKey("");
    }
  }

  return (
    <div className="demo-reveal-wrap">
      <button
        type="button"
        className="btn tiny secret-toggle-btn"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls="demo-credentials-panel"
      >
        {isOpen ? "Hide demo access" : "Reveal demo access"}
      </button>

      {isOpen && (
        <section
          id="demo-credentials-panel"
          className="demo-credentials-popover demo-credentials-enter"
        >
          <p className="project-label">Secret access</p>
          <h3>Demo Credentials</h3>
          <p className="muted">
            Use these demo accounts to explore different roles in the app.
          </p>
          <div className="demo-credentials-grid">
            {credentials.map((credential) => {
              const emailKey = `${credential.role}-email`;
              const passwordKey = `${credential.role}-password`;

              return (
                <article key={credential.role} className="demo-credential-card">
                  <h4>{credential.role}</h4>
                  <div className="demo-row">
                    <span className="demo-label">Email</span>
                    <code>{credential.email}</code>
                    <button
                      type="button"
                      className="btn tiny demo-copy-btn"
                      onClick={() => copyToClipboard(credential.email, emailKey)}
                    >
                      {copiedKey === emailKey ? "Copied" : "Copy"}
                    </button>
                  </div>
                  <div className="demo-row">
                    <span className="demo-label">Password</span>
                    <code>{credential.password}</code>
                    <button
                      type="button"
                      className="btn tiny demo-copy-btn"
                      onClick={() => copyToClipboard(credential.password, passwordKey)}
                    >
                      {copiedKey === passwordKey ? "Copied" : "Copy"}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}

export default DemoCredentialsReveal;
