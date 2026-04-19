"use server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContact(formData) {
  const firstName = String(formData.get("firstName") || "").trim();
  const lastName = String(formData.get("lastName") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const message = String(formData.get("message") || "").trim();
  const honeypot = String(formData.get("website") || "");

  if (honeypot) return { ok: true };
  if (!firstName || !lastName || !email) {
    return { ok: false, error: "Please fill in first name, last name, and email." };
  }
  if (!EMAIL_RE.test(email)) {
    return { ok: false, error: "That email address doesn't look right." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || "DeftSquad <onboarding@resend.dev>";

  if (!apiKey || !to) {
    console.error("submitContact: missing RESEND_API_KEY or CONTACT_TO_EMAIL");
    return { ok: false, error: "Contact form is not configured. Please email us directly." };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject: `New contact from ${firstName} ${lastName}`,
        reply_to: email,
        text: `From: ${firstName} ${lastName} <${email}>\n\n${message || "(no message)"}`,
      }),
    });

    if (!res.ok) {
      const body = await res.text().catch(() => "");
      console.error("submitContact: Resend non-OK", res.status, body);
      return { ok: false, error: "Couldn't send right now. Please try again shortly." };
    }

    return { ok: true };
  } catch (err) {
    console.error("submitContact: fetch failed", err);
    return { ok: false, error: "Network error. Please try again shortly." };
  }
}
