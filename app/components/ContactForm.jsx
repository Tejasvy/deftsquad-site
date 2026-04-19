"use client";

import { useState } from "react";
import { submitContact } from "../actions";

const inputCls =
  "w-full bg-transparent border-b-2 border-swiss-fg font-medium text-sm py-3 placeholder-gray-400 focus:border-swiss-accent focus:outline-none transition-colors duration-200";
const labelCls = "block text-xs font-bold uppercase tracking-widest mb-3";

export default function ContactForm() {
  const [status, setStatus] = useState({ state: "idle", message: "" });

  async function handleSubmit(event) {
    event.preventDefault();
    if (status.state === "sending") return;
    setStatus({ state: "sending", message: "" });
    const formData = new FormData(event.currentTarget);
    const result = await submitContact(formData);
    if (result.ok) {
      event.currentTarget.reset();
      setStatus({ state: "success", message: "Thanks — we'll be in touch shortly." });
    } else {
      setStatus({ state: "error", message: result.error || "Something went wrong." });
    }
  }

  const sending = status.state === "sending";

  return (
    <form className="space-y-8" onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label className={labelCls} htmlFor="firstName">First Name *</label>
          <input id="firstName" name="firstName" type="text" required placeholder="John" className={inputCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="lastName">Last Name *</label>
          <input id="lastName" name="lastName" type="text" required placeholder="Doe" className={inputCls} />
        </div>
      </div>

      <div>
        <label className={labelCls} htmlFor="email">Email *</label>
        <input id="email" name="email" type="email" required placeholder="john@company.com" className={inputCls} />
      </div>

      <div>
        <label className={labelCls} htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your project..."
          className="w-full bg-transparent border-2 border-swiss-fg font-medium text-sm p-4 placeholder-gray-400 focus:border-swiss-accent focus:outline-none transition-colors duration-200 resize-none"
        />
      </div>

      {/* Honeypot — hidden from real users, bots fill it */}
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="space-y-4">
        <button
          type="submit"
          disabled={sending}
          className="w-full sm:w-auto bg-swiss-fg text-white font-bold text-xs uppercase tracking-widest px-12 h-14 hover:bg-swiss-accent transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {sending ? "Sending…" : "Send Message"}
          <svg className="w-4 h-4 ml-3 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>

        {status.state === "success" && (
          <p role="status" className="text-sm font-bold text-swiss-fg">
            <span className="inline-block w-2 h-2 bg-swiss-accent mr-2 align-middle" />
            {status.message}
          </p>
        )}
        {status.state === "error" && (
          <p role="alert" className="text-sm font-bold text-swiss-accent">
            {status.message}
          </p>
        )}
      </div>
    </form>
  );
}
