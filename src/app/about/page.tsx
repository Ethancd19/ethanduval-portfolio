"use client";

import Link from "next/link";

const experience = [
  {
    role: "Professional Services Intern",
    company: "EfficientIP",
    period: "2025",
    desc: "Reverse-engineered DNS Guardian test scripts for QA and customer demos. Automated validation workflows with Python, reducing manual steps during DDI implementations.",
  },
  {
    role: "Cyber Security Intern",
    company: "Dart Enterprises · Cayman Islands",
    period: "2024",
    desc: "System hardening through patching and vulnerability remediation. Assisted with incident response and threat monitoring using Wireshark and the ELK Stack.",
  },
  {
    role: "Risk Advisory Intern",
    company: "Deloitte",
    period: "2023",
    desc: "Supported cyber risk engagements with client documentation. Conducted control reviews aligned to NIST frameworks and tracked remediation across Windows and AD environments.",
  },
];

const skills = [
  {
    tier: "Core",
    items: [
      "Penetration Testing",
      "Network Security",
      "Threat Analysis",
      "DNS / DHCP / IPAM",
    ],
  },
  {
    tier: "Proficient",
    items: [
      "Incident Response",
      "Python / Scripting",
      "Cloud Security",
      "ELK Stack",
    ],
  },
  {
    tier: "Familiar",
    items: ["Kubernetes", "Terraform", "GRC", "Active Directory"],
  },
];

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
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
    {children}
  </div>
);

const SectionTitle = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => (
  <h2
    style={{
      fontFamily: "var(--font-serif)",
      fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
      color: "var(--cream)",
      marginBottom: "2.5rem",
      lineHeight: 1.15,
      ...style,
    }}
  >
    {children}
  </h2>
);

export default function AboutPage() {
  return (
    <>
      {/* ── Intro ───────────────────────────────────────────────────── */}
      <section
        style={{
          padding: "4rem 3rem 3rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <SectionLabel>Background</SectionLabel>
        <SectionTitle>About me</SectionTitle>
        <p
          style={{
            fontSize: "16px",
            lineHeight: 1.85,
            color: "var(--text-muted)",
            maxWidth: "680px",
            marginBottom: "0",
          }}
        >
          I&apos;m a cybersecurity engineer from the Cayman Islands pursuing an
          M.Eng in Secure Information Systems at Virginia Tech. My work spans
          network security, lightweight cryptography research, and secure
          infrastructure design — driven by a long-term goal of bringing
          enterprise-grade capabilities back to the Caribbean.
        </p>
      </section>

      {/* ── Education ───────────────────────────────────────────────── */}
      <section
        style={{
          padding: "3rem",
          borderTop: "0.5px solid rgba(255,255,255,0.06)",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <SectionLabel>Education</SectionLabel>

        {[
          {
            year: "2026",
            degree: "M.Eng — Secure Information Systems & Networking",
            school: "Virginia Polytechnic Institute and State University",
            note: "Thesis: Benchmarking Lightweight Cryptography on Constrained IoT Hardware",
          },
          {
            year: "2023",
            degree: "B.S. — Computer Engineering, Networking & Cybersecurity",
            school: "Virginia Polytechnic Institute and State University",
            note: null,
          },
        ].map(({ year, degree, school, note }) => (
          <div
            key={year}
            style={{
              display: "grid",
              gridTemplateColumns: "64px 1fr",
              gap: "0 2rem",
              padding: "1.75rem 0",
              borderBottom: "0.5px solid rgba(255,255,255,0.06)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--text-dim)",
                paddingTop: "3px",
              }}
            >
              {year}
            </div>
            <div>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "var(--cream)",
                  marginBottom: "0.25rem",
                }}
              >
                {degree}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--copper)",
                  marginBottom: note ? "0.4rem" : 0,
                }}
              >
                {school}
              </div>
              {note && (
                <div
                  style={{
                    fontSize: "13px",
                    color: "var(--text-dim)",
                    fontStyle: "italic",
                  }}
                >
                  {note}
                </div>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* ── Experience ──────────────────────────────────────────────── */}
      <section
        style={{
          padding: "3rem",
          borderTop: "0.5px solid rgba(255,255,255,0.06)",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <SectionLabel>Experience</SectionLabel>
        <SectionTitle>Professional history</SectionTitle>

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
          {experience.map(({ role, company, period, desc }) => (
            <div
              key={role}
              style={{
                background: "var(--navy)",
                padding: "1.75rem 2rem",
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: "1rem",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "var(--navy-mid)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "var(--navy)")
              }
            >
              <div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "var(--cream)",
                    marginBottom: "0.2rem",
                  }}
                >
                  {role}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--copper)",
                    marginBottom: "0.65rem",
                  }}
                >
                  {company}
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    color: "var(--text-muted)",
                    lineHeight: 1.7,
                  }}
                >
                  {desc}
                </div>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  color: "var(--text-dim)",
                  whiteSpace: "nowrap",
                  paddingTop: "2px",
                }}
              >
                {period}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Skills ──────────────────────────────────────────────────── */}
      <section
        style={{
          padding: "3rem",
          borderTop: "0.5px solid rgba(255,255,255,0.06)",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <SectionLabel>Technical Skills</SectionLabel>
        <SectionTitle>Expertise</SectionTitle>

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
          {skills.map(({ tier, items }) => (
            <div
              key={tier}
              style={{ background: "var(--navy)", padding: "2rem" }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--copper)",
                  marginBottom: "1.25rem",
                }}
              >
                {tier}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                {items.map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                    }}
                  >
                    <span
                      style={{
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        background: "var(--copper)",
                        flexShrink: 0,
                        opacity: 0.6,
                      }}
                    />
                    <span
                      style={{ fontSize: "13px", color: "var(--text-muted)" }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Vision ──────────────────────────────────────────────────── */}
      <section
        style={{
          padding: "3rem",
          borderTop: "0.5px solid rgba(255,255,255,0.06)",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <SectionLabel>Vision</SectionLabel>
        <SectionTitle style={{ marginBottom: "1.5rem" }}>
          Building for the Cayman Islands
        </SectionTitle>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            maxWidth: "900px",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--copper)",
                marginBottom: "0.75rem",
              }}
            >
              Near-term
            </div>
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.85,
                color: "var(--text-muted)",
              }}
            >
              Gain broad experience in network security, penetration testing,
              and secure infrastructure design. Pursue advanced certifications
              and contribute to open-source security tooling.
            </p>
          </div>
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--copper)",
                marginBottom: "0.75rem",
              }}
            >
              Long-term
            </div>
            <p
              style={{
                fontSize: "14px",
                lineHeight: 1.85,
                color: "var(--text-muted)",
              }}
            >
              Return to the Cayman Islands to establish a security-focused
              technology firm — and eventually a multi-purpose technology campus
              combining secure infrastructure with STEM education and community
              initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
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
          maxWidth: "calc(1200px - 6rem)",
          marginLeft: "auto",
          marginRight: "auto",
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
            Want to connect?
          </div>
          <div style={{ fontSize: "14px", color: "var(--text-muted)" }}>
            Open to roles in networking, cybersecurity, and DevOps — graduating
            May 2026.
          </div>
        </div>
        <Link
          href="/contact"
          style={{
            display: "inline-block",
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            padding: "0.85rem 2rem",
            background: "var(--copper)",
            color: "var(--navy)",
            borderRadius: "2px",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "var(--copper-light)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "var(--copper)")
          }
        >
          Get in touch
        </Link>
      </div>
    </>
  );
}
