"use client";

import Link from "next/link";

const focuses = [
  {
    n: "01",
    title: "Network Security",
    desc: "DNS, DHCP, and IPAM security. Hardening enterprise and constrained networks against active threats.",
  },
  {
    n: "02",
    title: "Lightweight Cryptography",
    desc: "Benchmarking NIST LWC finalists on IoT hardware. M.Eng thesis under committee chair Dr. Timothy Talty.",
  },
  {
    n: "03",
    title: "Risk & Compliance",
    desc: "NIST framework assessments, control reviews, and remediation tracking across enterprise environments.",
  },
];

const tags = [
  { label: "IoT Security", accent: true },
  { label: "Cryptography", accent: true },
  { label: "Networking", accent: false },
  { label: "DevOps", accent: false },
  { label: "NIST", accent: false },
  { label: "Python", accent: false },
];

// ─── shared style objects ───────────────────────────────────────────────────

const s = {
  eyebrow: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    fontFamily: "var(--font-mono)",
    fontSize: "10px",
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "var(--copper)",
    marginBottom: "1.5rem",
  } as React.CSSProperties,

  heroName: {
    fontFamily: "var(--font-serif)",
    fontSize: "clamp(3.5rem, 5.5vw, 5rem)",
    lineHeight: 1.0,
    color: "var(--cream)",
    marginBottom: "1rem",
  } as React.CSSProperties,

  heroRole: {
    fontFamily: "var(--font-mono)",
    fontSize: "11px",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "var(--text-muted)",
    marginBottom: "2rem",
    lineHeight: 2,
  } as React.CSSProperties,

  btnPrimary: {
    display: "inline-block",
    fontFamily: "var(--font-mono)",
    fontSize: "11px",
    fontWeight: 500,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    padding: "0.85rem 2rem",
    background: "var(--copper)",
    color: "var(--navy)",
    border: "none",
    borderRadius: "2px",
    cursor: "pointer",
    transition: "background 0.2s",
  } as React.CSSProperties,

  btnGhost: {
    display: "inline-block",
    fontFamily: "var(--font-mono)",
    fontSize: "11px",
    fontWeight: 500,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    padding: "0.85rem 2rem",
    background: "transparent",
    color: "var(--text-muted)",
    border: "0.5px solid rgba(255,255,255,0.08)",
    borderRadius: "2px",
    cursor: "pointer",
    transition: "all 0.2s",
  } as React.CSSProperties,

  sectionLabel: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    fontFamily: "var(--font-mono)",
    fontSize: "10px",
    letterSpacing: "0.25em",
    textTransform: "uppercase",
    color: "var(--copper)",
    marginBottom: "1rem",
  } as React.CSSProperties,

  sectionTitle: {
    fontFamily: "var(--font-serif)",
    fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
    color: "var(--cream)",
    marginBottom: "2.5rem",
    lineHeight: 1.15,
  } as React.CSSProperties,
};

export default function HomePage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section
        style={{
          minHeight: "calc(100vh - 68px)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          padding: "5rem 3rem",
          gap: "2rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient glow */}
        <div
          style={{
            position: "absolute",
            right: "-5%",
            top: "10%",
            width: "55vw",
            height: "55vw",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(184,115,51,0.05) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
        />

        {/* Left - text */}
        <div>
          <div style={s.eyebrow}>
            <span
              style={{
                display: "block",
                width: "32px",
                height: "1px",
                background: "var(--copper)",
                flexShrink: 0,
              }}
            />
            Cybersecurity Engineer
          </div>

          <h1 style={s.heroName}>
            Ethan
            <br />
            <em style={{ color: "var(--copper-bright)", fontStyle: "italic" }}>
              Duval
            </em>
          </h1>

          <p style={s.heroRole}>
            M.Eng &nbsp;·&nbsp; Virginia Tech &nbsp;·&nbsp; Cayman Islands
          </p>

          <p
            style={{
              fontSize: "15px",
              lineHeight: 1.8,
              color: "var(--text-muted)",
              marginBottom: "3rem",
              maxWidth: "460px",
            }}
          >
            Building secure systems at the intersection of networking,
            cryptography, and resilient infrastructure. Graduating May 2026.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link
              href="/about"
              style={s.btnPrimary}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "var(--copper-light)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "var(--copper)")
              }
            >
              About me
            </Link>
            <Link
              href="/contact"
              style={s.btnGhost}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--text-muted)";
                e.currentTarget.style.color = "var(--cream)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.color = "var(--text-muted)";
              }}
            >
              Get in touch
            </Link>
          </div>
        </div>

        {/* Right - identity card */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingLeft: "3rem",
          }}
        >
          <div
            style={{
              width: "340px",
              border: "0.5px solid var(--border)",
              borderRadius: "3px",
              overflow: "hidden",
              background: "rgba(17, 37, 56, 0.7)",
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: "1.5rem",
                borderBottom: "0.5px solid var(--border)",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "2px",
                  background: "var(--navy-light)",
                  border: "0.5px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-serif)",
                  fontSize: "18px",
                  color: "var(--copper-bright)",
                  flexShrink: 0,
                }}
              >
                ED
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "var(--cream)",
                    marginBottom: "2px",
                  }}
                >
                  Ethan Duval
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "9px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--text-dim)",
                  }}
                >
                  Security Researcher
                </div>
              </div>
              <div
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "#5DBB8A",
                  flexShrink: 0,
                }}
              />
            </div>

            {/* Stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                borderBottom: "0.5px solid var(--border)",
              }}
            >
              {[
                { val: "3", label: "Internships" },
                { val: "M.Eng", label: "Degree" },
                { val: "KY", label: "Home base" },
                { val: "'26", label: "Graduating" },
              ].map(({ val, label }, i) => (
                <div
                  key={label}
                  style={{
                    padding: "1.1rem",
                    borderRight:
                      i % 2 === 0 ? "0.5px solid var(--border)" : "none",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "20px",
                      color: "var(--cream)",
                      marginBottom: "2px",
                    }}
                  >
                    {val}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "9px",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--text-dim)",
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div
              style={{
                padding: "1.1rem",
                display: "flex",
                flexWrap: "wrap",
                gap: "0.4rem",
              }}
            >
              {tags.map(({ label, accent }) => (
                <span
                  key={label}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "9px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "0.25rem 0.55rem",
                    border: accent
                      ? "0.5px solid rgba(184,115,51,0.4)"
                      : "0.5px solid rgba(255,255,255,0.07)",
                    borderRadius: "2px",
                    color: accent ? "var(--copper-light)" : "var(--text-dim)",
                  }}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Focus areas ─────────────────────────────────────────────── */}
      <section
        style={{
          padding: "5rem 3rem",
          borderTop: "0.5px solid rgba(255,255,255,0.06)",
        }}
      >
        <div style={s.sectionLabel}>
          <span
            style={{
              display: "block",
              width: "24px",
              height: "1px",
              background: "var(--copper)",
              flexShrink: 0,
            }}
          />
          Focus Areas
        </div>
        <h2 style={s.sectionTitle}>What I work on</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "rgba(255,255,255,0.06)",
            border: "0.5px solid rgba(255,255,255,0.06)",
            borderRadius: "3px",
            overflow: "hidden",
          }}
        >
          {focuses.map(({ n, title, desc }) => (
            <div
              key={n}
              style={{
                background: "var(--navy)",
                padding: "2rem",
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
                  fontFamily: "var(--font-serif)",
                  fontSize: "38px",
                  color: "rgba(184,115,51,0.18)",
                  marginBottom: "1rem",
                  lineHeight: 1,
                }}
              >
                {n}
              </div>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "var(--cream)",
                  marginBottom: "0.5rem",
                }}
              >
                {title}
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "var(--text-muted)",
                  lineHeight: 1.65,
                }}
              >
                {desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA band ────────────────────────────────────────────────── */}
      <div
        style={{
          background: "var(--navy-mid)",
          border: "0.5px solid var(--border)",
          borderRadius: "3px",
          padding: "3rem",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "2rem",
          alignItems: "center",
          margin: "0 3rem 5rem",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.8rem",
              color: "var(--cream)",
              marginBottom: "0.4rem",
            }}
          >
            Open to opportunities
          </div>
          <div style={{ fontSize: "14px", color: "var(--text-muted)" }}>
            Networking, cybersecurity, DevOps, and software engineering roles.
            Graduating May 2026.
          </div>
        </div>
        <Link
          href="/contact"
          style={s.btnPrimary}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "var(--copper-light)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "var(--copper)")
          }
        >
          Reach out
        </Link>
      </div>

      {/* ── Footer ──────────────────────────────────────────────────── */}
      <footer
        style={{
          padding: "1.75rem 3rem",
          borderTop: "0.5px solid rgba(255,255,255,0.06)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
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
          Ethan Duval © 2026
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
