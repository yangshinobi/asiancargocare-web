import { type FormEvent, useState } from "react"
import { Mail, MapPin, Phone, Send } from "lucide-react"

/**
 * Contact section — wired to the asiancargocare-backend API.
 *
 * Backend contract (verified 2026-08-08):
 *   POST {VITE_API_BASE}/api/contact
 *   Content-Type: application/json
 *   body: { name: string, email: string, message: string, subject?: string }
 *   200 -> { message: "Your enquiry has been sent successfully!" }
 *   400 -> { message: "Name, email, and message are required." }
 *   500 -> { message: "Server error, please try again later." }
 *
 * Subject field is sent on the wire but currently ignored server-side.
 * `VITE_API_BASE` must be set at build time (Cloudflare Pages env var).
 *
 * Vite env handling: import.meta.env.VITE_API_BASE is replaced at build time.
 * If unset (e.g. local dev), falls back to the production backend URL.
 */

const API_BASE =
  (import.meta.env.VITE_API_BASE as string | undefined)?.replace(/\/+$/, "") ||
  "https://asiancargocare-backend.vercel.app"

type FormState = "idle" | "busy" | "ok" | "fail"

const channels = [
  { icon: Mail, label: "Email Us", value: "contact@asiancargocare.com" },
  { icon: Phone, label: "Call Us", value: "+91-9789211770" },
  { icon: MapPin, label: "Visit Us", value: "B-12 Shivalik, Malviya Nagar, New Delhi 110017" },
]

const hours = [
  { day: "Monday - Friday:", time: "9:00 AM - 6:00 PM" },
  { day: "Saturday:", time: "9:00 AM - 1:00 PM" },
  { day: "Sunday:", time: "Closed" },
]

const inputCls =
  "w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-orange/60"

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [status, setStatus] = useState<FormState>("idle")
  const [message, setMessage] = useState<string>("")

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()

    // Client-side guard (backend also validates).
    const name = form.name.trim()
    const email = form.email.trim()
    const subject = form.subject.trim()
    const text = form.message.trim()

    if (!name || !email || !text) {
      setStatus("fail")
      setMessage("Please fill in your name, email, and message.")
      return
    }

    setStatus("busy")
    setMessage("Sending…")

    const ctrl = new AbortController()
    const timeout = setTimeout(() => ctrl.abort(), 20000)

    try {
      const payload: Record<string, string> = { name, email, message: text }
      if (subject) payload.subject = subject

      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
        signal: ctrl.signal,
      })

      let body: { message?: string } = {}
      try {
        body = await res.json()
      } catch {
        body = {}
      }

      if (res.ok) {
        setStatus("ok")
        setMessage(body.message || "Your enquiry has been sent successfully!")
        setForm({ name: "", email: "", subject: "", message: "" })
      } else {
        setStatus("fail")
        setMessage(body.message || `Server error (${res.status}). Please try again.`)
      }
    } catch (err) {
      const isAbort = err instanceof DOMException && err.name === "AbortError"
      setStatus("fail")
      setMessage(
        isAbort
          ? "Request timed out. Please try again."
          : "Network error. Please check your connection and try again.",
      )
    } finally {
      clearTimeout(timeout)
    }
  }

  const statusCls =
    status === "ok"
      ? "mt-4 rounded-lg bg-green-50 px-4 py-3 text-sm text-green-800 border border-green-200"
      : status === "fail"
        ? "mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-800 border border-red-200"
        : status === "busy"
          ? "mt-4 rounded-lg bg-blue-50 px-4 py-3 text-sm text-blue-800 border border-blue-200"
          : "sr-only"

  return (
    <section id="contact" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-bold leading-tight text-foreground md:text-6xl">
            Get In Touch
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Have questions about our services? Reach out to our team for personalized assistance with
            your logistics needs.
          </p>
        </div>

        <div className="mt-16 grid gap-16 lg:grid-cols-2">
          <div>
            <div className="space-y-8">
              {channels.map((c) => (
                <div key={c.label} className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary">
                    <c.icon className="h-5 w-5 text-brand-orange" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-foreground">
                      {c.label}
                    </p>
                    <p className="mt-1 text-muted-foreground">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="mt-12 text-xl font-bold text-foreground">Our Business Hours</h3>
            <div className="mt-5 max-w-xl space-y-3">
              {hours.map((h) => (
                <div key={h.day} className="flex items-center justify-between">
                  <span className="text-muted-foreground">{h.day}</span>
                  <span className="font-medium text-foreground">{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-foreground">Send Us a Message</h3>
            <form onSubmit={onSubmit} className="mt-6 space-y-5" noValidate>
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold text-foreground">
                  Your Name
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="John Doe"
                  disabled={status === "busy"}
                  className={inputCls}
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-foreground">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="john@example.com"
                  disabled={status === "busy"}
                  className={inputCls}
                />
              </div>
              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-foreground">
                  Subject
                </label>
                <input
                  id="subject"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="How can we help you?"
                  disabled={status === "busy"}
                  className={inputCls}
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your logistics needs..."
                  disabled={status === "busy"}
                  className={`${inputCls} resize-none`}
                />
              </div>
              <button
                type="submit"
                disabled={status === "busy"}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-orange py-3.5 font-semibold text-white transition-colors hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Send className="h-5 w-5" />
                {status === "busy" ? "Sending…" : "Send Message"}
              </button>

              <div
                role="status"
                aria-live="polite"
                className={statusCls}
              >
                {message}
              </div>
            </form>
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-muted-foreground">
          Form wired to <code className="font-mono">{API_BASE}/api/contact</code> · Vite env: <code className="font-mono">VITE_API_BASE</code>
        </p>
      </div>
    </section>
  )
}