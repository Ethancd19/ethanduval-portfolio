"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

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
    title: "Risk and Compliance",
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

const btnPrimary: React.CSSProperties = {
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
};

const btnGhost: React.CSSProperties = {
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
};

export default function HomePage() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const check = () => setMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <>
      {/* Hero */}
      <section
        style={{
          minHeight: mobile ? "auto" : "calc(100vh - 68px)",
          display: "grid",
          gridTemplateColumns: mobile ? "1fr" : "1fr 1fr",
          alignItems: "center",
          padding: mobile ? "3rem 1.25rem" : "5rem 3rem",
          gap: mobile ? "2.5rem" : "2rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
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

        {/* Text */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--copper)",
              marginBottom: "1.5rem",
            }}
          >
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
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: mobile
                ? "clamp(3rem, 12vw, 4.5rem)"
                : "clamp(3.5rem, 5.5vw, 5rem)",
              lineHeight: 1.0,
              color: "var(--cream)",
              marginBottom: "1rem",
            }}
          >
            Ethan
            <br />
            <em style={{ color: "var(--copper-bright)", fontStyle: "italic" }}>
              Duval
            </em>
          </h1>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              marginBottom: "2rem",
              lineHeight: 2,
            }}
          >
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
              style={btnPrimary}
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
              style={btnGhost}
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

        {/* Identity card */}
        <div
          style={{
            display: "flex",
            justifyContent: mobile ? "flex-start" : "flex-end",
            paddingLeft: mobile ? 0 : "3rem",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: mobile ? "100%" : "340px",
              border: "0.5px solid var(--border)",
              borderRadius: "3px",
              overflow: "hidden",
              background: "rgba(17,37,56,0.7)",
            }}
          >
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

      {/* Focus areas */}
      <section
        style={{
          padding: mobile ? "3rem 1.25rem" : "5rem 3rem",
          borderTop: "0.5px solid rgba(255,255,255,0.06)",
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
              flexShrink: 0,
            }}
          />
          Focus Areas
        </div>
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
            color: "var(--cream)",
            marginBottom: "2.5rem",
            lineHeight: 1.15,
          }}
        >
          What I work on
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: mobile ? "1fr" : "repeat(3, 1fr)",
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

      {/* CTA */}
      <div
        style={{
          background: "var(--navy-mid)",
          border: "0.5px solid var(--border)",
          borderRadius: "3px",
          padding: mobile ? "2rem" : "3rem",
          display: "grid",
          gridTemplateColumns: mobile ? "1fr" : "1fr auto",
          gap: "2rem",
          alignItems: "center",
          margin: mobile ? "0 1.25rem 3rem" : "0 3rem 5rem",
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
            Networking, cybersecurity, and DevOps roles. Graduating May 2026.
          </div>
        </div>
        <Link
          href="/contact"
          style={btnPrimary}
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

      {/* Footer */}
      <footer
        style={{
          padding: mobile ? "1.5rem 1.25rem" : "1.75rem 3rem",
          borderTop: "0.5px solid rgba(255,255,255,0.06)",
          display: "flex",
          flexDirection: mobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: mobile ? "flex-start" : "center",
          gap: mobile ? "1rem" : 0,
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
