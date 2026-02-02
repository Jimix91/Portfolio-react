function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container contact">
        <div>
          <h2 className="section-title">Easy contact</h2>
          <p className="muted">Want to talk? I reply within 24–48h.</p>
          <div className="contact-links">
            <a href="mailto:joanjimenezcamps@gmail.com">
              joanjimenezcamps@gmail.com
            </a>
            <span>+34 680 788 467</span>
            <a
              href="https://www.linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a href="https://github.com/Jimix91" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
        <form
          className="card contact-form"
          action="mailto:joanjimenezcamps@gmail.com"
          method="post"
        >
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
