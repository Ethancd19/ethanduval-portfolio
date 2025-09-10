"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function AboutPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [skillHover, setSkillHover] = useState<string | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const skillTiers = {
    Core: [
      { name: "Penetration Testing", icon: "🔍" },
      { name: "Network Security", icon: "🛡️" },
      { name: "Threat Analysis", icon: "⚡" },
    ],
    Proficient: [
      { name: "Incident Response", icon: "🚨" },
      { name: "Python/Scripting", icon: "🐍" },
      { name: "Cloud Security", icon: "☁️" },
    ],
    Familiar: [
      // add light-touch items here later (e.g., “GRC”, “Kubernetes”, “Terraform”)
    ],
  } as const;

  // Small helper to render “pills”
  const SkillPill = ({ icon, label }: { icon: string; label: string }) => (
    <div
      style={{
        backdropFilter: "blur(10px) saturate(180%)",
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, var(--color-accent-transparent) 100%)",
        border: "1px solid rgba(255,255,255,0.3)",
        borderRadius: "999px",
        padding: "0.55rem 1rem",
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        transition: "all 0.25s ease",
        cursor: "default",
      }}
    >
      <span style={{ fontSize: "1.05rem" }}>{icon}</span>
      <span
        style={{
          color: "var(--color-foreground)",
          fontWeight: 500,
          fontSize: "0.95rem",
          letterSpacing: "0.1px",
        }}
      >
        {label}
      </span>
    </div>
  );

  const values = [
    {
      title: "Security First",
      description:
        "Every system should be built with security as a core principle, not an afterthought.",
      icon: "🔐",
    },
    {
      title: "Continuous Learning",
      description:
        "The threat landscape evolves daily. Staying ahead requires constant adaptation and growth.",
      icon: "📚",
    },
    {
      title: "Ethical Hacking",
      description:
        "Using technical skills responsibly to make the digital world safer for everyone.",
      icon: "⚖️",
    },
  ];

  const interests = [
    { name: "IoT Security Research", icon: "🔬" },
    { name: "Home Lab Experiments", icon: "🧪" },
    { name: "Tech Mentoring", icon: "👥" },
    { name: "Hardware Hacking", icon: "⚙️" },
    { name: "Photography", icon: "📸" },
  ];

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
      {/* Mouse follower */}
      <div
        style={{
          position: "fixed",
          top: mousePos.y - 75,
          left: mousePos.x - 75,
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background: `radial-gradient(circle, var(--color-accent-glow), transparent 70%)`,
          filter: "blur(40px)",
          pointerEvents: "none",
          transition: "all 0.3s ease",
          zIndex: 0,
        }}
      />

      {/* Floating ambient elements */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "20%",
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          background: `radial-gradient(circle, var(--color-accent-transparent), transparent 70%)`,
          filter: "blur(20px)",
          animation: "float 8s ease-in-out infinite",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "2rem",
        }}
      >
        {/* Hero Section */}
        <section
          style={{
            backdropFilter: "blur(20px) saturate(180%)",
            background: `
              linear-gradient(135deg, 
                var(--color-accent-transparent) 0%, 
                rgba(255, 255, 255, 0.1) 50%, 
                transparent 100%
              )
            `,
            border: `1px solid var(--color-accent-border)`,
            borderRadius: "24px",
            padding: "3rem",
            marginBottom: "3rem",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            boxShadow: `
              0 8px 32px var(--color-shadow),
              0 0 60px var(--color-accent-glow),
              inset 0 1px 0 rgba(255, 255, 255, 0.2)
            `,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "40%",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%)",
              borderRadius: "24px 24px 0 0",
              pointerEvents: "none",
            }}
          />

          <h1
            style={{
              fontSize: "3.5rem",
              marginBottom: "1.5rem",
              background: `linear-gradient(135deg, var(--color-accent), var(--color-foreground))`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontWeight: "bold",
            }}
          >
            About Me
          </h1>
          <p
            style={{
              fontSize: "1.3rem",
              lineHeight: "1.8",
              color: "var(--color-foreground)",
              opacity: 0.9,
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            I'm Ethan Duval, a cybersecurity engineer from the Cayman Islands
            with a passion for building secure systems and protecting digital
            assets. From building my first home lab in high school to pursuing a
            Master's in Secure Information Systems, my journey has been driven
            by curiosity and a commitment to making the digital world safer. I
            believe in making security accessible and understandable for
            everyone, fostering a culture of awareness and resilience.
          </p>
        </section>

        {/* Education Section */}
        <section style={{ marginBottom: "3rem" }}>
          <div
            style={{
              backdropFilter: "blur(20px) saturate(180%)",
              background: `
                linear-gradient(135deg, 
                  rgba(255, 255, 255, 0.1) 0%, 
                  var(--color-accent-transparent) 50%, 
                  transparent 100%
                )
              `,
              border: `1px solid var(--color-accent-border)`,
              borderRadius: "20px",
              padding: "2.5rem",
              position: "relative",
              overflow: "hidden",
              boxShadow: `
                0 8px 32px var(--color-shadow),
                0 0 40px var(--color-accent-glow),
                inset 0 1px 0 rgba(255, 255, 255, 0.2)
              `,
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "40%",
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%)",
                borderRadius: "20px 20px 0 0",
                pointerEvents: "none",
              }}
            />

            <h2
              style={{
                fontSize: "2.5rem",
                textAlign: "center",
                marginBottom: "2rem",
                color: "var(--color-accent)",
                fontWeight: "bold",
              }}
            >
              Education
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "2rem",
                alignItems: "start",
              }}
            >
              {/* Education */}
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "3rem",
                    marginBottom: "1rem",
                    filter: "drop-shadow(0 0 10px var(--color-accent-glow))",
                  }}
                >
                  🎓
                </div>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    color: "var(--color-accent)",
                    marginBottom: "1rem",
                    fontWeight: "600",
                  }}
                >
                  Education
                </h3>
                <div>
                  <p
                    style={{
                      color: "var(--color-foreground)",
                      fontSize: "1.1rem",
                      marginBottom: "0.5rem",
                      fontWeight: "500",
                    }}
                  >
                    Bachelor of Science in Computer Engineering in Networking
                    and Cybersecurity
                  </p>
                  <p
                    style={{
                      color: "var(--color-foreground)",
                      opacity: 0.8,
                      fontSize: "1rem",
                      marginBottom: "1rem",
                    }}
                  >
                    Virginia Polytechnic Institute and State University • 2023
                  </p>
                  <p
                    style={{
                      color: "var(--color-foreground)",
                      fontSize: "1.1rem",
                      marginBottom: "0.5rem",
                      fontWeight: "500",
                    }}
                  >
                    Master of Engineering in Computer Engineering in Secure
                    Information Systems and Networking
                  </p>
                  <p
                    style={{
                      color: "var(--color-foreground)",
                      opacity: 0.8,
                      fontSize: "1rem",
                    }}
                  >
                    Virginia Polytechnic Institute and State University • In
                    Progress
                  </p>
                </div>
              </div>

              {/* Certifications */}
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "3rem",
                    marginBottom: "1rem",
                    filter: "drop-shadow(0 0 10px var(--color-accent-glow))",
                  }}
                >
                  🏆
                </div>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    color: "var(--color-accent)",
                    marginBottom: "1rem",
                    fontWeight: "600",
                  }}
                >
                  Certifications
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  {["CC - Certified in Cybersecurity (ISC)² - In progress"].map(
                    (cert, index) => (
                      <div
                        key={index}
                        style={{
                          background: `
                          linear-gradient(135deg, 
                            rgba(255, 255, 255, 0.1) 0%, 
                            var(--color-accent-transparent) 100%
                          )
                        `,
                          border: `1px solid rgba(255, 255, 255, 0.2)`,
                          borderRadius: "12px",
                          padding: "0.75rem 1rem",
                          backdropFilter: "blur(10px)",
                          transition: "all 0.3s ease",
                          cursor: "pointer",
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.transform = "translateX(5px)";
                          e.currentTarget.style.boxShadow = `0 4px 15px var(--color-accent-glow)`;
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.transform = "translateX(0)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      >
                        <p
                          style={{
                            color: "var(--color-foreground)",
                            fontSize: "0.95rem",
                            fontWeight: "500",
                            margin: "0",
                          }}
                        >
                          {cert}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              textAlign: "center",
              marginBottom: "2rem",
              color: "var(--color-accent)",
              fontWeight: "bold",
            }}
          >
            Technical Expertise
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {[
              { tier: "Core", caption: "Where I spend most of my time" },
              { tier: "Proficient", caption: "Confident day-to-day" },
              { tier: "Familiar", caption: "Used in projects / learning" },
            ].map(({ tier, caption }) => (
              <div
                key={tier}
                style={{
                  backdropFilter: "blur(15px) saturate(180%)",
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, var(--color-accent-transparent) 50%, transparent 100%)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "16px",
                  padding: "1.75rem",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = `0 12px 40px var(--color-accent-glow)`;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
                aria-labelledby={`tier-${tier}`}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "30%",
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)",
                    borderRadius: "16px 16px 0 0",
                    pointerEvents: "none",
                  }}
                />

                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "0.5rem",
                  }}
                >
                  <h3
                    id={`tier-${tier}`}
                    style={{
                      fontSize: "1.25rem",
                      color: "var(--color-accent)",
                      fontWeight: 700,
                      margin: 0,
                    }}
                  >
                    {tier}
                  </h3>
                  <span
                    style={{
                      fontSize: "0.95rem",
                      color: "var(--color-foreground)",
                      opacity: 0.8,
                    }}
                  >
                    {caption}
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.6rem",
                    marginTop: "1rem",
                  }}
                >
                  {skillTiers[tier as keyof typeof skillTiers].length === 0 ? (
                    <span
                      style={{
                        fontSize: "0.95rem",
                        color: "var(--color-foreground)",
                        opacity: 0.7,
                      }}
                    >
                      Add items when ready.
                    </span>
                  ) : (
                    skillTiers[tier as keyof typeof skillTiers].map((s) => (
                      <SkillPill key={s.name} icon={s.icon} label={s.name} />
                    ))
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Values & Philosophy */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              textAlign: "center",
              marginBottom: "2rem",
              color: "var(--color-accent)",
              fontWeight: "bold",
            }}
          >
            My Philosophy
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            {values.map((value, index) => (
              <div
                key={value.title}
                style={{
                  backdropFilter: "blur(15px) saturate(180%)",
                  background: `
                    linear-gradient(135deg, 
                      var(--color-accent-transparent) 0%, 
                      rgba(255, 255, 255, 0.1) 50%, 
                      transparent 100%
                    )
                  `,
                  border: `1px solid var(--color-accent-border)`,
                  borderRadius: "20px",
                  padding: "2rem",
                  textAlign: "center",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = `0 12px 40px var(--color-accent-glow)`;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = `0 4px 20px rgba(0, 0, 0, 0.1)`;
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "40%",
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)",
                    borderRadius: "20px 20px 0 0",
                    pointerEvents: "none",
                  }}
                />

                <div
                  style={{
                    fontSize: "3rem",
                    marginBottom: "1rem",
                    filter: "drop-shadow(0 0 10px var(--color-accent-glow))",
                  }}
                >
                  {value.icon}
                </div>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "1rem",
                    color: "var(--color-accent)",
                    fontWeight: "600",
                  }}
                >
                  {value.title}
                </h3>
                <p
                  style={{
                    color: "var(--color-foreground)",
                    opacity: 0.9,
                    lineHeight: "1.6",
                    fontSize: "1rem",
                  }}
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Experience Section */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              textAlign: "center",
              marginBottom: "2rem",
              color: "var(--color-accent)",
              fontWeight: "bold",
            }}
          >
            Professional Experience
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              {
                role: "Professional Services Intern",
                company: "EfficientIP",
                period: "Summer 2025",
                icon: "🧩",
                points: [
                  "Reverse-engineered and documented DNS Guardian test scripts for QA and customer demos",
                  "Automated validation workflows with Python, reducing manual steps during implementations",
                  "Observed customer deployments and captured repeatable SOPs for service delivery",
                  "Gained hands-on exposure to DNS, DHCP, and IPAM security within enterprise networks",
                ],
              },
              {
                role: "Cyber Security Intern",
                company: "DART",
                period: "Spring 2024",
                icon: "🛡️",
                points: [
                  "Hardened internal systems through patching and vulnerability remediation",
                  "Assisted with incident response and threat monitoring using Wireshark and ELK",
                  "Drafted playbooks and supported on-site security drills",
                ],
              },
              {
                role: "Risk Advisory Intern",
                company: "Deloitte",
                period: "Summer 2023",
                icon: "📊",
                points: [
                  "Supported cyber risk and discovery engagements with client documentation",
                  "Conducted control reviews aligned to NIST frameworks and tracked remediation",
                  "Collaborated on assessments across Windows and AD environments",
                ],
              },
            ].map((exp, index) => (
              <div
                key={index}
                style={{
                  backdropFilter: "blur(15px) saturate(180%)",
                  background: `
                    linear-gradient(135deg, 
                      rgba(255, 255, 255, 0.1) 0%, 
                      var(--color-accent-transparent) 50%, 
                      transparent 100%
                    )
                  `,
                  border: `1px solid rgba(255, 255, 255, 0.2)`,
                  borderRadius: "18px",
                  padding: "2rem",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = `0 12px 40px var(--color-accent-glow)`;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = `0 4px 20px rgba(0, 0, 0, 0.1)`;
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "30%",
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)",
                    borderRadius: "18px 18px 0 0",
                    pointerEvents: "none",
                  }}
                />

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "2rem",
                      marginRight: "1rem",
                      filter: "drop-shadow(0 0 8px var(--color-accent-glow))",
                    }}
                  >
                    {exp.icon}
                  </span>
                  <div>
                    <h3
                      style={{
                        fontSize: "1.3rem",
                        color: "var(--color-accent)",
                        marginBottom: "0.25rem",
                        fontWeight: "600",
                      }}
                    >
                      {exp.role}
                    </h3>
                    <p
                      style={{
                        color: "var(--color-foreground)",
                        opacity: 0.8,
                        fontSize: "1rem",
                        fontWeight: "500",
                        margin: 0,
                      }}
                    >
                      {exp.company} • {exp.period}
                    </p>
                  </div>
                </div>

                <ul
                  style={{
                    margin: 0,
                    paddingLeft: "1.2rem",
                    color: "var(--color-foreground)",
                    opacity: 0.9,
                    lineHeight: "1.6",
                    fontSize: "1rem",
                    listStyle: "disc",
                  }}
                >
                  {exp.points.map((p, i) => (
                    <li key={i} style={{ marginBottom: "0.5rem" }}>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Current Interests */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              textAlign: "center",
              marginBottom: "2rem",
              color: "var(--color-accent)",
              fontWeight: "bold",
            }}
          >
            Current Interests
          </h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "center",
            }}
          >
            {interests.map((interest, index) => (
              <div
                key={interest.name}
                style={{
                  backdropFilter: "blur(10px) saturate(180%)",
                  background: `
                    linear-gradient(135deg, 
                      rgba(255, 255, 255, 0.15) 0%, 
                      var(--color-accent-transparent) 100%
                    )
                  `,
                  border: `1px solid rgba(255, 255, 255, 0.3)`,
                  borderRadius: "25px",
                  padding: "0.75rem 1.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-3px) scale(1.05)";
                  e.currentTarget.style.boxShadow = `0 8px 25px var(--color-accent-glow)`;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = `none`;
                }}
              >
                <span style={{ fontSize: "1.2rem" }}>{interest.icon}</span>
                <span
                  style={{
                    color: "var(--color-foreground)",
                    fontWeight: "500",
                    fontSize: "0.95rem",
                  }}
                >
                  {interest.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Goals & Future Vision Section */}
        <section style={{ marginBottom: "3rem" }}>
          <div
            style={{
              maxWidth: "900px",
              margin: "0 auto",
              textAlign: "left",
            }}
          >
            <div style={{ marginBottom: "2.5rem" }}>
              <h3
                style={{
                  fontSize: "1.8rem",
                  color: "var(--color-accent)",
                  marginBottom: "1rem",
                  fontWeight: "600",
                }}
              >
                🎯 Short-Term (1–3 Years)
              </h3>
              <p
                style={{
                  fontSize: "1.15rem",
                  lineHeight: "1.8",
                  color: "var(--color-foreground)",
                  opacity: 0.9,
                  marginBottom: "0",
                }}
              >
                I aim to gain broad, hands-on experience in network security,
                penetration testing, and secure infrastructure design while
                pursuing advanced cybersecurity certifications. Alongside
                professional growth, I plan to contribute to open-source
                security projects and develop tools that make security practices
                more accessible to small businesses and individuals.
              </p>
            </div>

            <div style={{ marginBottom: "2.5rem" }}>
              <h3
                style={{
                  fontSize: "1.8rem",
                  color: "var(--color-accent)",
                  marginBottom: "1rem",
                  fontWeight: "600",
                }}
              >
                🏢 Mid-Term (3–7 Years)
              </h3>
              <p
                style={{
                  fontSize: "1.15rem",
                  lineHeight: "1.8",
                  color: "var(--color-foreground)",
                  opacity: 0.9,
                  marginBottom: "0",
                }}
              >
                My goal is to return to the Cayman Islands and establish a
                security-focused technology firm that provides cutting-edge
                networking, cybersecurity, and secure data storage solutions.
                This business will also serve as a training ground for aspiring
                Caymanian engineers through internships, mentorship, and
                scholarships.
              </p>
            </div>

            <div style={{ marginBottom: "2.5rem" }}>
              <h3
                style={{
                  fontSize: "1.8rem",
                  color: "var(--color-accent)",
                  marginBottom: "1rem",
                  fontWeight: "600",
                }}
              >
                🌍 Long-Term Vision
              </h3>
              <p
                style={{
                  fontSize: "1.15rem",
                  lineHeight: "1.8",
                  color: "var(--color-foreground)",
                  opacity: 0.9,
                  marginBottom: "0",
                }}
              >
                I envision creating a multi-purpose technology campus in the
                Cayman Islands — a hub for innovation, education, and
                collaboration. The campus will blend secure IT operations with
                community initiatives such as STEM outreach, maker spaces, and
                environmental sustainability programs, aiming to leave a lasting
                positive impact on both the tech industry and the local
                community.
              </p>
            </div>

            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <div
                style={{
                  display: "inline-block",
                  background: `
                    linear-gradient(135deg, 
                        rgba(255, 255, 255, 0.15) 0%, 
                        var(--color-accent-transparent) 100%
                    )
                    `,
                  border: `1px solid rgba(255, 255, 255, 0.3)`,
                  borderRadius: "50px",
                  padding: "1rem 2rem",
                  backdropFilter: "blur(10px)",
                  boxShadow: `0 4px 20px var(--color-accent-glow)`,
                }}
              >
                <span
                  style={{
                    color: "var(--color-accent)",
                    fontWeight: "600",
                    fontSize: "1.1rem",
                  }}
                >
                  "Building tomorrow's security, today — for the Cayman Islands
                  and beyond"
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Link to Timeline */}
        <section
          style={{
            backdropFilter: "blur(20px) saturate(180%)",
            background: `
              linear-gradient(135deg, 
                var(--color-accent-transparent) 0%, 
                rgba(255, 255, 255, 0.1) 100%
              )
            `,
            border: `1px solid var(--color-accent-border)`,
            borderRadius: "24px",
            padding: "3rem",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            boxShadow: `
              0 8px 32px var(--color-shadow),
              0 0 40px var(--color-accent-glow)
            `,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "50%",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%)",
              borderRadius: "24px 24px 0 0",
              pointerEvents: "none",
            }}
          />

          <h2
            style={{
              fontSize: "2.5rem",
              marginBottom: "1rem",
              color: "var(--color-accent)",
              fontWeight: "bold",
            }}
          >
            Want to Know My Journey?
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "var(--color-foreground)",
              opacity: 0.9,
              marginBottom: "2rem",
              maxWidth: "600px",
              margin: "0 auto 2rem",
            }}
          >
            Explore my career timeline and see how I evolved from curious
            beginner to cybersecurity professional.
          </p>
          <Link
            href="/timeline"
            style={{
              background: `
                linear-gradient(135deg, 
                  var(--color-accent) 0%, 
                  rgba(255, 255, 255, 0.2) 100%
                )
              `,
              padding: "1rem 2.5rem",
              borderRadius: "50px",
              border: `1px solid var(--color-accent-border)`,
              color: "white",
              textDecoration: "none",
              fontWeight: "600",
              fontSize: "1.1rem",
              backdropFilter: "blur(10px)",
              boxShadow: `0 4px 20px var(--color-accent-glow)`,
              transition: "all 0.3s ease",
              display: "inline-block",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-3px) scale(1.05)";
              e.currentTarget.style.boxShadow = `0 8px 30px var(--color-accent-glow)`;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = `0 4px 20px var(--color-accent-glow)`;
            }}
          >
            Explore My Timeline →
          </Link>
        </section>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(3deg);
          }
        }
      `}</style>
    </div>
  );
}
