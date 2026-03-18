"use client";

import { useState, useEffect } from "react";

type Project = {
  id: string;
  title: string;
  tagline: string;
  year: string;
  status: "Complete" | "In Progress" | "Academic";
  tags: string[];
  summary: string;
  detail: string;
  links: { label: string; href: string }[];
  repoNote?: string;
};

const projects: Project[] = [
  {
    id: "lwc",
    title: "Lightweight Cryptography Benchmarking",
    tagline:
      "M.Eng thesis benchmarking NIST LWC finalists on constrained IoT hardware.",
    year: "2025",
    status: "In Progress",
    tags: ["C", "IoT", "NIST LWC", "Embedded Systems", "Cryptography"],
    summary:
      "Benchmarking the 57 NIST Lightweight Cryptography competition submissions on resource-constrained hardware to evaluate real-world performance tradeoffs for IoT deployments.",
    detail: `Constrained IoT devices cannot run standard AES-based cryptographic suites due to limited memory and processing power. This thesis builds a hardware benchmarking framework in C that measures execution time, memory footprint, and energy cost for all 57 NIST LWC submissions across three target device classes: microcontrollers, embedded processors, and FPGAs.\n\nThe framework automates test vector generation, cycle-accurate timing using hardware counters, and CSV output for statistical analysis. The committee requested extended analysis covering algorithm parameterization and quantitative security characterization, both of which are now incorporated.\n\nThe work references NIST SP 800-232, published August 2025, as its primary normative source and will provide actionable guidance for engineers selecting lightweight ciphers for production IoT deployments.`,
    links: [],
  },
  {
    id: "homelab",
    title: "Virtualized Network Environments",
    tagline:
      "Three production-grade network topologies deployed on a high-spec homelab host.",
    year: "2024",
    status: "In Progress",
    tags: [
      "pfSense",
      "OPNsense",
      "VLANs",
      "OSPF",
      "BGP",
      "Snort",
      "Suricata",
      "Python",
    ],
    summary:
      "A homelab running three distinct virtualized environments, each modelling a real-world deployment scenario with full VLAN segmentation, firewall policy, IDS/IPS, and Python automation.",
    detail: `Three isolated network environments run on a single high-specification host machine using VMware virtualization. Each environment targets a distinct threat model and compliance context: a multi-segment enterprise network, a healthcare environment, and a residential network.\n\nAll three feature full VLAN segmentation, pfSense and OPNsense firewalls with inter-VLAN routing, and virtualized routers running OSPF and BGP. Snort and Suricata provide real-time IDS/IPS traffic analysis across each segment. Python automation scripts handle network monitoring, topology discovery, and log parsing.\n\nThis project is actively being expanded. Full documentation and architecture diagrams will be published here as each environment reaches a stable configuration.`,
    links: [],
  },
  {
    id: "suicidality",
    title: "Suicidality and Threat Detection",
    tagline:
      "Transformer-based classifier for detecting suicidal ideation and targeted threats in social text.",
    year: "2024",
    status: "Academic",
    tags: ["Python", "PyTorch", "Transformers", "NLP", "Class Imbalance"],
    summary:
      "An NLP pipeline using fine-tuned transformer models to classify posts containing suicidal ideation or threatening language, with a focus on handling extreme class imbalance in the Jigsaw dataset.",
    detail: `Built for a graduate machine learning course, this project addresses the real-world challenge of detecting harmful content in large-scale social media streams where positive examples are rare, often under 1% of data.\n\nThe pipeline fine-tunes a pre-trained BERT-base model on the Jigsaw Unintended Bias dataset. Standard cross-entropy on imbalanced data produces models that predict the majority class almost exclusively. The solution combines focal loss, minority class oversampling, and threshold tuning to maximize F1 on the positive class without collapsing precision.\n\nEvaluation focused on recall at clinically relevant operating points, given that the cost of a false negative substantially outweighs a false positive in this domain.`,
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Ethancd19/social-media-evaluation",
      },
    ],
  },
  {
    id: "spyware",
    title: "Android Surveillance Toolkit",
    tagline:
      "Proof-of-concept mobile spyware targeting parental devices via a social engineering QR code campaign.",
    year: "2023",
    status: "Academic",
    tags: [
      "Kotlin",
      "Android",
      "Mobile Security",
      "Social Engineering",
      "Offensive Security",
    ],
    summary:
      "A controlled academic demonstration of a full mobile attack chain: a social engineering lure site delivered via QR code, targeting teenagers, designed to be installed on a parent's device.",
    detail: `This project was built as a proof-of-concept for a security course to demonstrate how a complete mobile attack chain works from lure to exfiltration.\n\nThe social engineering vector was a fake website offering free in-game currency targeted at younger users, distributed via QR code. Visitors were prompted to install an Android APK, framed as a required step to claim the reward, intended to be installed on a parent or guardian's phone.\n\nOnce installed, the app ran silently with no visible icon. Capabilities included background photography without saving to the camera roll, contact list enumeration, SMS message access, and exfiltration over encrypted HTTPS to a controlled server.\n\nThe project was conducted entirely in a closed lab environment to understand the attacker perspective and improve defensive controls: permission auditing, sideloading warnings, and education around QR code vectors.`,
    repoNote: "Repository is private for responsible disclosure reasons.",
    links: [],
  },
];

const statusColor: Record<Project["status"], string> = {
  Complete: "rgba(93,187,138,0.15)",
  "In Progress": "rgba(184,115,51,0.15)",
  Academic: "rgba(100,130,180,0.15)",
};
const statusText: Record<Project["status"], string> = {
  Complete: "#5DBB8A",
  "In Progress": "var(--copper-light)",
  Academic: "#7A9FCC",
};

export default function ProjectsPage() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const active = projects.find((p) => p.id === open) ?? null;

  useEffect(() => {
    const check = () => setMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <section
        style={{
          padding: mobile ? "2.5rem 1.25rem 2rem" : "4rem 3rem 3rem",
          maxWidth: "1200px",
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
          Projects
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
          Selected work
        </h1>
        <p
          style={{
            fontSize: "15px",
            lineHeight: 1.8,
            color: "var(--text-muted)",
            maxWidth: "560px",
            marginBottom: "3rem",
          }}
        >
          A mix of academic research, personal tooling, and exploratory
          projects. Click any card for a full writeup.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: mobile
              ? "1fr"
              : "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "1px",
            background: "rgba(255,255,255,0.06)",
            border: "0.5px solid rgba(255,255,255,0.06)",
            borderRadius: "3px",
            overflow: "hidden",
          }}
        >
          {projects.map((p) => (
            <div
              key={p.id}
              onClick={() => setOpen(p.id)}
              style={{
                background: "var(--navy)",
                padding: "2rem",
                cursor: "pointer",
                transition: "background 0.2s",
                display: "flex",
                flexDirection: "column",
                gap: "0.85rem",
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
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "0.5rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "9px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--text-dim)",
                  }}
                >
                  {p.year}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "9px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "0.2rem 0.5rem",
                    borderRadius: "2px",
                    background: statusColor[p.status],
                    color: statusText[p.status],
                  }}
                >
                  {p.status}
                </span>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.2rem",
                  color: "var(--cream)",
                  lineHeight: 1.25,
                }}
              >
                {p.title}
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "var(--text-muted)",
                  lineHeight: 1.65,
                  flexGrow: 1,
                }}
              >
                {p.tagline}
              </div>
              <div
                style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}
              >
                {p.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "9px",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      padding: "0.2rem 0.5rem",
                      border: "0.5px solid rgba(255,255,255,0.07)",
                      borderRadius: "2px",
                      color: "var(--text-dim)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--copper)",
                  marginTop: "0.25rem",
                }}
              >
                Read more &#8599;
              </div>
            </div>
          ))}
        </div>
      </section>

      {active && (
        <div
          onClick={() => setOpen(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            background: "rgba(7,18,28,0.88)",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: mobile ? "1rem" : "4rem 1.5rem",
            overflowY: "auto",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "var(--navy-mid)",
              border: "0.5px solid var(--border)",
              borderRadius: "4px",
              padding: mobile ? "1.5rem" : "3rem",
              maxWidth: "760px",
              width: "100%",
              position: "relative",
              marginTop: mobile ? "60px" : 0,
            }}
          >
            <button
              onClick={() => setOpen(null)}
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                background: "transparent",
                border: "0.5px solid rgba(255,255,255,0.1)",
                borderRadius: "2px",
                padding: "0.35rem 0.7rem",
                color: "var(--text-dim)",
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--copper)";
                e.currentTarget.style.color = "var(--copper)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                e.currentTarget.style.color = "var(--text-dim)";
              }}
            >
              Close &#x2715;
            </button>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "0.75rem",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "9px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--text-dim)",
                }}
              >
                {active.year}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "9px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "0.2rem 0.5rem",
                  borderRadius: "2px",
                  background: statusColor[active.status],
                  color: statusText[active.status],
                }}
              >
                {active.status}
              </span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: mobile ? "1.75rem" : "clamp(1.75rem, 3vw, 2.5rem)",
                color: "var(--cream)",
                marginBottom: "1rem",
                lineHeight: 1.15,
              }}
            >
              {active.title}
            </h2>
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.75,
                color: "var(--copper-light)",
                marginBottom: "2rem",
                fontStyle: "italic",
              }}
            >
              {active.summary}
            </p>
            <div
              style={{
                borderTop: "0.5px solid rgba(255,255,255,0.06)",
                paddingTop: "2rem",
                marginBottom: "2rem",
              }}
            >
              {active.detail.split("\\n\\n").map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.85,
                    color: "var(--text-muted)",
                    marginBottom: "1.25rem",
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.4rem",
                marginBottom: "1.5rem",
              }}
            >
              {active.tags.map((t) => (
                <span
                  key={t}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "9px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    padding: "0.25rem 0.55rem",
                    border: "0.5px solid rgba(255,255,255,0.1)",
                    borderRadius: "2px",
                    color: "var(--text-dim)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
            {active.repoNote && (
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.08em",
                  color: "var(--text-dim)",
                  marginBottom: active.links.length ? "1.5rem" : 0,
                  fontStyle: "italic",
                }}
              >
                {active.repoNote}
              </p>
            )}
            {active.links.length > 0 && (
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                {active.links.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      fontWeight: 500,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      padding: "0.75rem 1.5rem",
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
                    {label} &#8599;
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

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
