function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container contact">
        <div>
          <h2 className="section-title">Easy contact</h2>
          <p className="muted">Want to talk? I reply within 24–48h.</p>
          <div className="contact-links">
            <a href="mailto:joan@email.com">joan@email.com</a>
            <a
              href="https://www.linkedin.com/in/username"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
        <form className="card contact-form" action="mailto:joan@email.com" method="post">
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@email.com" />
          </label>
          <label>
            Message
            <textarea name="message" rows="4" placeholder="Tell me." />
          </label>
          <button className="btn primary" type="submit">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
