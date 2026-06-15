import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

  // Body parser
  app.use(express.json());

  // Serve favicon.ico requests cleanly by redirecting to our high-resolution SVG favicon
  app.get("/favicon.ico", (req, res) => {
    res.redirect(301, "/favicon.svg");
  });

  // Serve Employee Photos directory statically (handles both normal spaces and %20 URL encodings)
  app.use(
    "/Employee Photos",
    express.static(path.join(process.cwd(), "Employee Photos")),
  );
  app.use(
    "/Employee%20Photos",
    express.static(path.join(process.cwd(), "Employee Photos")),
  );

  // API Route for Contact Form
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;

      if (!name || !email || !subject || !message) {
        return res
          .status(400)
          .json({ error: "All inquiry fields are required." });
      }

      const resendApiKey =
        process.env.RESEND_API_KEY || "re_WFKw1gaU_NYaFLbsgSuhjBM3JtzFk9gBu";
      if (!resendApiKey) {
        console.warn(
          "WARNING: RESEND_API_KEY is not set in environment variables.",
        );
        return res.status(400).json({
          error: "RE-KEY-MISSING",
          message:
            "Contact form submitted locally, but the Resend API Key is missing. Please add RESEND_API_KEY to your settings/secrets panel in AI Studio so emails can be delivered.",
        });
      }

      // Lazy initialization of Resend client
      const resend = new Resend(resendApiKey);

      const htmlContent = `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1c1c1a; max-width: 600px; margin: 0 auto; border: 1px solid #e5e5e0; padding: 24px; border-radius: 12px; background-color: #fafaf5;">
          <h2 style="color: #0A1C26; border-bottom: 2px solid #E5EDA8; padding-bottom: 8px;">New Contact Inquiry</h2>
          <p><strong>Full Name:</strong> ${name}</p>
          <p><strong>Email Address:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Subject:</strong> ${subject}</p>
          <div style="background-color: #ffffff; border-left: 4px solid #0A1C26; padding: 16px; margin-top: 16px; border-radius: 4px; font-style: italic;">
            ${message.replace(/\n/g, "<br />")}
          </div>
          <footer style="margin-top: 24px; font-size: 11px; color: #a1a19a; text-align: center; border-top: 1px solid #e5e5e0; padding-top: 12px;">
            This email was sent securely via Resend from your Skin Professionals Concierge.
          </footer>
        </div>
      `;

      const { data, error } = await resend.emails.send({
        from: "Skin Professionals <onboarding@resend.dev>",
        to: "skinprofessionals.2023@gmail.com",
        subject: `[Contact Form] ${subject}`,
        html: htmlContent,
        replyTo: email,
      });

      if (error) {
        console.error("Resend delivery failed:", error);
        return res
          .status(500)
          .json({ error: error.message || "Failed to send email via Resend." });
      }

      return res.json({
        success: true,
        message: "Inquiry sent successfully via Resend",
        data,
      });
    } catch (err: any) {
      console.error("Contact API Error:", err);
      return res
        .status(500)
        .json({ error: err.message || "An internal error occurred." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
