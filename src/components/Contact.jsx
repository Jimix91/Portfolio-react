import { useState } from "react";

function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget.closest("form");
    if (!form) {
      return;
    }
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const formData = new FormData(form);
    const name = formData.get("name")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const message = formData.get("message")?.toString().trim() || "";
    setStatus("loading");
    fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Email request failed");
        }
        return response.json();
      })
      .then(() => {
        setStatus("success");
        form.reset();
      })
      .catch((error) => {
        console.error("Email error:", error);
        setStatus("error");
      });
  };

  return (
    <section className="section" id="contact">
      <div className="container contact">
        <div>
          <h2 className="section-title">Easy contact</h2>
          <p className="muted">Want to talk? I reply within 24–48h.</p>
          <div className="contact-links">
            <span>joanjimenezcamps@gmail.com</span>
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
        <form className="card contact-form" noValidate>
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="you@email.com"
              required
            />
          </label>
          <label>
            Message
            <textarea name="message" rows="4" placeholder="Tell me." required />
          </label>
          <button
            className="btn primary"
            type="button"
            onClick={handleSubmit}
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : "Send"}
          </button>
          {status === "success" && (
            <p className="form-status success">Message sent successfully.</p>
          )}
          {status === "error" && (
            <p className="form-status error">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
