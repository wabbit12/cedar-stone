"use client";

import { FormEvent, useState } from "react";

type Notice = { type: "success" | "error"; message: string };

export function ContactForm() {
  const [notice, setNotice] = useState<Notice | null>(null);
  const [pending, setPending] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message || !email.includes("@")) {
      setNotice({
        type: "error",
        message: "Please fill in your name, a valid email, and a message.",
      });
      return;
    }

    setPending(true);
    window.setTimeout(() => {
      setPending(false);
      setNotice({
        type: "success",
        message:
          "Thanks — we received your message and will reply within one business day.",
      });
      form.reset();
    }, 400);
  }

  return (
    <>
      {notice ? (
        <div className={`form-notice form-notice--${notice.type}`} role="status">
          {notice.message}
        </div>
      ) : null}

      <form className="contact-form" onSubmit={onSubmit}>
        <div className="form-row">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required autoComplete="name" />
        </div>

        <div className="form-grid">
          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
            />
          </div>
          <div className="form-row">
            <label htmlFor="phone">Phone</label>
            <input id="phone" name="phone" type="tel" autoComplete="tel" />
          </div>
        </div>

        <div className="form-row">
          <label htmlFor="service">What do you need?</label>
          <select id="service" name="service" defaultValue="">
            <option value="">Select a service</option>
            <option value="Kitchen remodel">Kitchen remodel</option>
            <option value="Bath renovation">Bath renovation</option>
            <option value="Whole-home refresh">Whole-home refresh</option>
            <option value="Built-ins & carpentry">Built-ins & carpentry</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-row">
          <label htmlFor="message">Project details</label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            placeholder="Timeline, neighborhood, and what you hope to change…"
          />
        </div>

        <button className="btn btn--primary" type="submit" disabled={pending}>
          {pending ? "Sending…" : "Send message"}
        </button>
      </form>
    </>
  );
}
