export default function ProjectsPage() {
  return (
    <section
      style={{ padding: "4rem 3rem", maxWidth: "800px", margin: "0 auto" }}
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
          marginBottom: "1.5rem",
          lineHeight: 1.1,
        }}
      >
        Coming soon
      </h1>

      <p
        style={{
          fontSize: "15px",
          lineHeight: 1.8,
          color: "var(--text-muted)",
          maxWidth: "520px",
        }}
      >
        Project case studies are in progress — check back after May 2026 for a
        full writeup of the IoT cryptography benchmarking framework, homelab
        deployments, and more.
      </p>
    </section>
  );
}
