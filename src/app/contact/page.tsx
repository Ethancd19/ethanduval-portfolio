"use client";

import { useState } from "react";

export default function ContactPage() {
  const TO = "Ethan@EthanDuval.com"; // <-- set this
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form), // name, email, company, message
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Failed to send");
      setStatus("sent");
      setForm({ name: "", email: "", company: "", message: "" });
    } catch (e: any) {
      setStatus("error");
      setError(e?.message || "Unknown error");
    }
  };

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        background: `
          radial-gradient(circle at 15% 20%, var(--color-accent-transparent) 0%, transparent 50%),
          radial-gradient(circle at 85% 80%, var(--color-accent-transparent) 0%, transparent 50%),
          var(--color-background)
        `,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "2rem",
        }}
      >
        {/* Header */}
        <section
          style={{
            backdropFilter: "blur(20px) saturate(180%)",
            background: `
              linear-gradient(135deg, var(--color-accent-transparent) 0%,
              rgba(255,255,255,0.1) 50%, transparent 100%)
            `,
            border: "1px solid var(--color-accent-border)",
            borderRadius: "24px",
            padding: "2.5rem",
            marginBottom: "2rem",
            textAlign: "center",
            boxShadow: `
              0 8px 32px var(--color-shadow),
              0 0 40px var(--color-accent-glow)
            `,
          }}
        >
          <h1
            style={{
              fontSize: "3rem",
              marginBottom: "0.75rem",
              background: `linear-gradient(135deg, var(--color-accent), var(--color-foreground))`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontWeight: "bold",
            }}
          >
            Let’s Connect
          </h1>
          <p
            style={{
              opacity: 0.85,
              fontSize: "1.15rem",
              maxWidth: 720,
              margin: "0 auto",
            }}
          >
            Have a role, project, or question? Send a message! I usually reply
            within a day.
          </p>
        </section>

        {/*quick links + form */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {/* Quick contact cards */}
          <div style={{ display: "grid", gap: "1rem" }}>
            {[
              {
                icon: "✉️",
                title: "Email",
                desc: TO,
                href: `mailto:${TO}`,
              },
              {
                icon: "💼",
                title: "LinkedIn",
                desc: "Connect or send a DM",
                href: "https://www.linkedin.com/in/ethan-duval",
              },
              {
                icon: "🧑‍💻",
                title: "GitHub",
                desc: "See code and projects",
                href: "https://github.com/ethancd19",
              },
            ].map((c) => (
              <a
                key={c.title}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "block",
                  textDecoration: "none",
                  backdropFilter: "blur(15px) saturate(180%)",
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, var(--color-accent-transparent) 50%, transparent 100%)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "16px",
                  padding: "1rem 1.25rem",
                  color: "var(--color-foreground)",
                  transition: "all 0.25s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = `0 10px 30px var(--color-accent-glow)`;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ fontSize: "1.4rem" }}>{c.icon}</div>
                <div
                  style={{
                    fontWeight: 600,
                    marginTop: 6,
                    color: "var(--color-accent)",
                  }}
                >
                  {c.title}
                </div>
                <div style={{ opacity: 0.85, marginTop: 4 }}>{c.desc}</div>
              </a>
            ))}
          </div>

          {/* Mailto form */}
          <form
            onSubmit={onSubmit}
            style={{
              backdropFilter: "blur(15px) saturate(180%)",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, var(--color-accent-transparent) 50%, transparent 100%)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "16px",
              padding: "1.5rem",
            }}
          >
            <label
              style={{ display: "block", fontWeight: 600, marginBottom: 6 }}
            >
              Name
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                style={{
                  width: "100%",
                  marginTop: 8,
                  padding: "0.75rem 0.9rem",
                  borderRadius: 12,
                  border: "1px solid var(--color-accent-border)",
                  background: "var(--color-background)",
                  color: "var(--color-foreground)",
                }}
              />
            </label>

            <label
              style={{
                display: "block",
                fontWeight: 600,
                margin: "1rem 0 6px",
              }}
            >
              Company{" "}
              <span style={{ opacity: 0.6, fontWeight: 400 }}>(optional)</span>
              <input
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                placeholder="e.g., XYZCorp"
                style={{
                  width: "100%",
                  marginTop: 8,
                  padding: "0.75rem 0.9rem",
                  borderRadius: 12,
                  border: "1px solid var(--color-accent-border)",
                  background: "var(--color-background)",
                  color: "var(--color-foreground)",
                }}
              />
            </label>

            <label
              style={{
                display: "block",
                fontWeight: 600,
                margin: "1rem 0 6px",
              }}
            >
              Email
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                style={{
                  width: "100%",
                  marginTop: 8,
                  padding: "0.75rem 0.9rem",
                  borderRadius: 12,
                  border: "1px solid var(--color-accent-border)",
                  background: "var(--color-background)",
                  color: "var(--color-foreground)",
                }}
              />
            </label>

            <label
              style={{
                display: "block",
                fontWeight: 600,
                margin: "1rem 0 6px",
              }}
            >
              Message
              <textarea
                required
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                style={{
                  width: "100%",
                  marginTop: 8,
                  padding: "0.9rem",
                  borderRadius: 12,
                  border: "1px solid var(--color-accent-border)",
                  background: "var(--color-background)",
                  color: "var(--color-foreground)",
                  resize: "vertical",
                }}
              />
            </label>

            <button
              type="submit"
              disabled={status === "sending"}
              style={{
                marginTop: "1rem",
                width: "100%",
                opacity: status === "sending" ? 0.8 : 1,
                cursor: status === "sending" ? "not-allowed" : "pointer",
                background: `linear-gradient(135deg, var(--color-accent), rgba(255,255,255,0.2))`,
                padding: "0.9rem 1.2rem",
                borderRadius: 14,
                border: "1px solid var(--color-accent-border)",
                color: "white",
                fontWeight: 700,
                boxShadow: `0 6px 24px var(--color-accent-glow)`,
                transition: "all 0.2s ease",
              }}
            >
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>

            {status === "sent" && (
              <p
                style={{
                  opacity: 0.85,
                  color: "var(--color-accent)",
                  marginTop: 10,
                }}
              >
                Thanks! I’ve emailed you a receipt.
              </p>
            )}
            {status === "error" && (
              <p style={{ opacity: 0.9, color: "#f66", marginTop: 10 }}>
                Sorry—something went wrong. Please try again.
              </p>
            )}
          </form>
        </section>
      </div>
    </div>
  );
}
