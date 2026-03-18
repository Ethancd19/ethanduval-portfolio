"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1.25rem 3rem",
        borderBottom: "0.5px solid rgba(184, 115, 51, 0.2)",
        background: "rgba(11, 29, 46, 0.92)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "18px",
          color: "var(--copper-light)",
          letterSpacing: "0.02em",
        }}
      >
        E. Duval
      </Link>

      <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        {navLinks.map(({ label, href }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: active ? "var(--copper-bright)" : "var(--text-muted)",
                transition: "color 0.2s",
                paddingBottom: active ? "2px" : undefined,
                borderBottom: active ? "1px solid var(--copper)" : undefined,
              }}
            >
              {label}
            </Link>
          );
        })}

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cream)")}
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = "var(--text-muted)")
          }
        >
          Resume &#8599;
        </a>

        <Link
          href="/contact"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            padding: "0.5rem 1.1rem",
            border: "0.5px solid var(--copper)",
            borderRadius: "2px",
            color: "var(--copper-bright)",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "var(--copper-muted)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "transparent")
          }
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
