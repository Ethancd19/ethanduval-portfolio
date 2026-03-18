"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const check = () => setMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: mobile ? "1rem 1.25rem" : "1.25rem 3rem",
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

        {/* Desktop nav */}
        {!mobile && (
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
                    color: active
                      ? "var(--copper-bright)"
                      : "var(--text-muted)",
                    transition: "color 0.2s",
                    paddingBottom: active ? "2px" : undefined,
                    borderBottom: active
                      ? "1px solid var(--copper)"
                      : undefined,
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
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--cream)")
              }
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
        )}

        {/* Mobile hamburger */}
        {mobile && (
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            style={{
              background: "transparent",
              border: "0.5px solid rgba(255,255,255,0.1)",
              borderRadius: "2px",
              padding: "0.4rem 0.6rem",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: "20px",
                  height: "1.5px",
                  background: "var(--copper-light)",
                  transition: "all 0.25s",
                  transform: open
                    ? i === 0
                      ? "translateY(5.5px) rotate(45deg)"
                      : i === 2
                        ? "translateY(-5.5px) rotate(-45deg)"
                        : "scaleX(0)"
                    : "none",
                  opacity: open && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        )}
      </header>

      {/* Mobile drawer */}
      {mobile && (
        <>
          <div
            onClick={() => setOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 90,
              background: "rgba(7,18,28,0.7)",
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
              opacity: open ? 1 : 0,
              pointerEvents: open ? "auto" : "none",
              transition: "opacity 0.3s ease",
            }}
          />
          <div
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              zIndex: 95,
              width: "280px",
              background: "var(--navy-mid)",
              borderLeft: "0.5px solid var(--border)",
              padding: "5rem 2rem 2rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.25rem",
              transform: open ? "translateX(0)" : "translateX(100%)",
              transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "9px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--text-dim)",
                marginBottom: "1rem",
              }}
            >
              Navigation
            </div>

            {navLinks.map(({ label, href }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "13px",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: active
                      ? "var(--copper-bright)"
                      : "var(--text-muted)",
                    padding: "0.85rem 1rem",
                    borderRadius: "2px",
                    background: active ? "var(--copper-muted)" : "transparent",
                    borderLeft: active
                      ? "2px solid var(--copper)"
                      : "2px solid transparent",
                    transition: "all 0.2s",
                    display: "block",
                  }}
                >
                  {label}
                </Link>
              );
            })}

            <div
              style={{
                marginTop: "1rem",
                borderTop: "0.5px solid var(--border-soft)",
                paddingTop: "1rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
              }}
            >
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "13px",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  padding: "0.85rem 1rem",
                  display: "block",
                }}
              >
                Resume &#8599;
              </a>
              <Link
                href="/contact"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "13px",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "0.85rem 1rem",
                  marginTop: "0.5rem",
                  border: "0.5px solid var(--copper)",
                  borderRadius: "2px",
                  color: "var(--copper-bright)",
                  textAlign: "center",
                  display: "block",
                }}
              >
                Contact
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
