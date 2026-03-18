"use client";

import { useState, useEffect } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const check = () => setMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "var(--navy)",
    border: "0.5px solid rgba(255,255,255,0.08)",
    borderRadius: "2px",
    padding: "0.8rem 1rem",
    color: "var(--cream)",
    fontFamily: "var(--font-sans)",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Failed");
      setStatus("sent");
      setForm({ name: "", email: "", company: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <section
        style={{
          padding: mobile ? "2.5rem 1.25rem 2rem" : "4rem 3rem 3rem",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: "var(--copper)",
            marginBottom: "1rem",
          }}
        >
          <span
            style={{
              display: "block",
              width: "24px",
              height: "1px",
              background: "var(--copper)",
            }}
          />
          Contact
        </div>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
            color: "var(--cream)",
            marginBottom: "1rem",
            lineHeight: 1.1,
          }}
        >
          Let&apos;s talk
        </h1>
        <p
          style={{
            fontSize: "15px",
            lineHeight: 1.8,
            color: "var(--text-muted)",
            marginBottom: "3rem",
            maxWidth: "520px",
          }}
        >
          Open to full-time roles in networking, security, and DevOps. I usually
          reply within a day.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: mobile ? "1fr" : "1fr 1.5fr",
            gap: mobile ? "2rem" : "3rem",
            alignItems: "start",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--text-dim)",
                marginBottom: "1rem",
              }}
            >
              Direct links
            </div>
            <div
              style={{
                display: "grid",
                gap: "1px",
                background: "rgba(255,255,255,0.06)",
                border: "0.5px solid rgba(255,255,255,0.06)",
                borderRadius: "3px",
                overflow: "hidden",
              }}
            >
              {[
                {
                  label: "Email",
                  val: "Ethan@EthanDuval.com",
                  href: "mailto:Ethan@EthanDuval.com",
                  copper: false,
                },
                {
                  label: "LinkedIn",
                  val: "linkedin.com/in/ethan-duval",
                  href: "https://www.linkedin.com/in/ethan-duval",
                  copper: true,
                },
                {
                  label: "GitHub",
                  val: "github.com/ethancd19",
                  href: "https://github.com/ethancd19",
                  copper: true,
                },
              ].map(({ label, val, href, copper }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    background: "var(--navy)",
                    padding: "1.1rem 1.25rem",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "var(--navy-mid)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "var(--navy)")
                  }
                >
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "9px",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--text-dim)",
                      marginBottom: "3px",
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: copper ? "var(--copper-light)" : "var(--cream)",
                    }}
                  >
                    {val}
                  </div>
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}
          >
            <input
              required
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              style={inputStyle}
              onFocus={(e) =>
                (e.currentTarget.style.borderColor = "var(--copper)")
              }
              onBlur={(e) =>
                (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")
              }
            />
            <input
              type="email"
              required
              placeholder="Email address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              style={inputStyle}
              onFocus={(e) =>
                (e.currentTarget.style.borderColor = "var(--copper)")
              }
              onBlur={(e) =>
                (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")
              }
            />
            <input
              placeholder="Company (optional)"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              style={inputStyle}
              onFocus={(e) =>
                (e.currentTarget.style.borderColor = "var(--copper)")
              }
              onBlur={(e) =>
                (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")
              }
            />
            <textarea
              required
              rows={5}
              placeholder="Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              style={{ ...inputStyle, resize: "vertical" }}
              onFocus={(e) =>
                (e.currentTarget.style.borderColor = "var(--copper)")
              }
              onBlur={(e) =>
                (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")
              }
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <button
                type="submit"
                disabled={status === "sending"}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "0.85rem 2rem",
                  background:
                    status === "sending"
                      ? "var(--copper-muted)"
                      : "var(--copper)",
                  color:
                    status === "sending"
                      ? "var(--copper-light)"
                      : "var(--navy)",
                  border:
                    status === "sending" ? "0.5px solid var(--copper)" : "none",
                  borderRadius: "2px",
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                  transition: "background 0.2s",
                }}
              >
                {status === "sending" ? "Sending..." : "Send message"}
              </button>
              {status === "sent" && (
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    color: "#5DBB8A",
                    letterSpacing: "0.08em",
                  }}
                >
                  Message sent. I&apos;ll be in touch.
                </span>
              )}
              {status === "error" && (
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    color: "#E07070",
                    letterSpacing: "0.08em",
                  }}
                >
                  Something went wrong. Please try again.
                </span>
              )}
            </div>
          </form>
        </div>
      </section>

      <footer
        style={{
          padding: mobile ? "1.5rem 1.25rem" : "1.75rem 3rem",
          borderTop: "0.5px solid rgba(255,255,255,0.06)",
          display: "flex",
          flexDirection: mobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: mobile ? "flex-start" : "center",
          gap: mobile ? "1rem" : 0,
          marginTop: "4rem",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--text-dim)",
          }}
        >
          Ethan Duval &copy; 2026
        </span>
        <div style={{ display: "flex", gap: "2rem" }}>
          {[
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/ethan-duval",
            },
            { label: "GitHub", href: "https://github.com/ethancd19" },
            { label: "Resume", href: "/resume.pdf" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--text-dim)",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--copper)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-dim)")
              }
            >
              {label}
            </a>
          ))}
        </div>
      </footer>
    </>
  );
}
