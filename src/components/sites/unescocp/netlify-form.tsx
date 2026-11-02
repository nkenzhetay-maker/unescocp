"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { CircleCheck } from "lucide-react";

const SUCCESS: Record<string, string> = {
  contact: "Thank you for reaching out. Your message has been sent and we will get back to you soon.",
  "membership-application": "Thank you! Your application has been submitted. We will review it and contact you.",
};

// Netlify Forms reads the static HTML at deploy time (data-netlify + form-name),
// then accepts url-encoded POSTs carrying the same form-name.
export function NetlifyForm({ name, className, children }: { name: string; className?: string; children: ReactNode }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const body = new URLSearchParams();
    new FormData(event.currentTarget).forEach((value, key) => body.append(key, String(value)));
    setStatus("sending");
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex items-start gap-3 rounded-lg border border-[#d0d0d0] bg-white p-6 text-sm text-[#333333]" role="status">
        <CircleCheck size={20} className="flex-shrink-0 text-[#0057a8]" />
        <p>{SUCCESS[name]}</p>
      </div>
    );
  }

  return (
    <form name={name} method="POST" data-netlify="true" netlify-honeypot="bot-field" className={className} onSubmit={onSubmit}>
      <input type="hidden" name="form-name" value={name} />
      <p hidden>
        <label>
          {"Don't fill this out: "}
          <input name="bot-field" />
        </label>
      </p>
      {children}
      {status === "error" && (
        <p className="text-sm text-[#c8102e]" role="alert">
          Something went wrong while sending. Please try again, or email us directly.
        </p>
      )}
    </form>
  );
}
