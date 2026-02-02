import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const result = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: "joanjimenezcamps@gmail.com",
      reply_to: email,
      subject: `Portfolio contact from ${name}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong></p>
             <p>${message.replace(/\n/g, "<br />")}</p>`,
    });

    return res.status(200).json({ success: true, result });
  } catch (error) {
    return res.status(500).json({ error: "Email failed", details: error?.message });
  }
}
