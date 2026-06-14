import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

// Vercel API route (serverless) handler
export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { name, email, subject, message } = req.body ?? {};

    if (!name || !email || !subject || !message) {
      return res
        .status(400)
        .json({ error: "All inquiry fields are required." });
    }

    const resendApiKey =
      process.env.RESEND_API_KEY || "re_WFKw1gaU_NYaFLbsgSuhjBM3JtzFk9gBu";

    if (!resendApiKey) {
      return res.status(400).json({
        error: "RE-KEY-MISSING",
        message:
          "Contact form submitted, but the Resend API Key is missing. Please add RESEND_API_KEY to your Vercel environment variables so emails can be delivered.",
      });
    }

    const resend = new Resend(resendApiKey);

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1c1c1a; max-width: 600px; margin: 0 auto; border: 1px solid #e5e5e0; padding: 24px; border-radius: 12px; background-color: #fafaf5;">
        <h2 style="color: #0A1C26; border-bottom: 2px solid #E5EDA8; padding-bottom: 8px;">New Contact Inquiry</h2>
        <p><strong>Full Name:</strong> ${name}</p>
        <p><strong>Email Address:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Subject:</strong> ${subject}</p>
        <div style="background-color: #ffffff; border-left: 4px solid #0A1C26; padding: 16px; margin-top: 16px; border-radius: 4px; font-style: italic;">
          ${String(message).replace(/\n/g, "<br />")}
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
      return res.status(500).json({
        error: (error as any).message || "Failed to send email via Resend.",
      });
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
      .json({ error: err?.message || "An internal error occurred." });
  }
}
