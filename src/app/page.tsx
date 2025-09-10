"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [tiltStyle, setTiltStyle] = useState({});
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const deltaX = (x - centerX) / centerX;
    const deltaY = (y - centerY) / centerY;

    const rotateX = deltaY * 8;
    const rotateY = deltaX * -8;

    setTiltStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`,
      transition: "transform 0.4s ease",
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: "rotateX(0deg) rotateY(0deg) translateZ(0px)",
      transition: "transform 0.8s ease",
    });
  };

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: `
          radial-gradient(circle at 20% 30%, var(--color-accent-transparent) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, var(--color-accent-transparent) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.02) 0%, transparent 50%),
          var(--color-background)
        `,
        overflow: "hidden",
      }}
    >
      {/* Ambient floating elements */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "10%",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: `radial-gradient(circle, var(--color-accent-transparent), transparent 70%)`,
          filter: "blur(40px)",
          animation: "float 6s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "60%",
          right: "15%",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background: `radial-gradient(circle, var(--color-accent-transparent), transparent 70%)`,
          filter: "blur(30px)",
          animation: "float 8s ease-in-out infinite reverse",
        }}
      />

      {/* Mouse follower */}
      <div
        style={{
          position: "fixed",
          top: mousePos.y - 100,
          left: mousePos.x - 100,
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: `radial-gradient(circle, var(--color-accent-glow), transparent 70%)`,
          filter: "blur(60px)",
          pointerEvents: "none",
          transition: "all 0.3s ease",
          zIndex: 0,
        }}
      />

      {/* Main content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
          maxWidth: "1200px",
          width: "100%",
          padding: "2rem",
        }}
      >
        {/* Main glass card */}
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ perspective: "1000px" }}
        >
          <div
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
              borderRadius: "20px",
              padding: "3rem 2.5rem",
              maxWidth: "600px",
              textAlign: "center",
              color: "var(--color-foreground)",
              boxShadow: `
                0 8px 32px var(--color-shadow),
                0 0 60px var(--color-accent-glow),
                inset 0 1px 0 rgba(255, 255, 255, 0.2)
              `,
              transformStyle: "preserve-3d",
              position: "relative",
              overflow: "hidden",
              ...tiltStyle,
            }}
          >
            {/* Glass reflection effect */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "40%",
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%)",
                borderRadius: "20px 20px 0 0",
                pointerEvents: "none",
              }}
            />

            <h1
              style={{
                fontSize: "3rem",
                marginBottom: "1rem",
                background: `linear-gradient(135deg, var(--color-accent), var(--color-foreground))`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: "bold",
                textShadow: "0 0 30px var(--color-accent-glow)",
              }}
            >
              Ethan Duval
            </h1>
            <p
              style={{
                fontSize: "1.5rem",
                marginBottom: "1.5rem",
                color: "var(--color-foreground)",
                opacity: 0.9,
              }}
            >
              Cybersecurity Engineer – Researcher – Maker
            </p>
            <p
              style={{
                opacity: 0.7,
                marginBottom: "2.5rem",
                color: "var(--color-foreground)",
                fontSize: "1.1rem",
              }}
            >
              Welcome to my portfolio website!
            </p>
            <div
              style={{
                display: "flex",
                gap: "0.75rem",
                justifyContent: "center",
              }}
            >
              <Link
                href="/about"
                style={{
                  background: `linear-gradient(135deg, var(--color-accent), rgba(255,255,255,0.2))`,
                  padding: "1rem 2rem",
                  borderRadius: "50px",
                  border: "1px solid var(--color-accent-border)",
                  color: "white",
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  backdropFilter: "blur(10px)",
                  boxShadow: `0 6px 24px var(--color-accent-glow)`,
                  transition: "all 0.3s ease",
                  display: "inline-block",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-3px) scale(1.05)";
                  e.currentTarget.style.boxShadow = `0 10px 36px var(--color-accent-glow)`;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = `0 6px 24px var(--color-accent-glow)`;
                }}
              >
                About Me
              </Link>

              <Link
                href="/contact"
                style={{
                  background: `linear-gradient(135deg, var(--color-accent), rgba(255,255,255,0.2))`, // ← same as About
                  padding: "1rem 2rem",
                  borderRadius: "50px",
                  border: "1px solid var(--color-accent-border)",
                  color: "white",
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  backdropFilter: "blur(10px)",
                  boxShadow: `0 6px 24px var(--color-accent-glow)`,
                  transition: "all 0.3s ease",
                  display: "inline-block",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-3px) scale(1.05)";
                  e.currentTarget.style.boxShadow = `0 10px 36px var(--color-accent-glow)`;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = `0 6px 24px var(--color-accent-glow)`;
                }}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Secondary glass cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
            width: "100%",
            maxWidth: "800px",
          }}
        >
          {[
            {
              title: "Security Research",
              desc: "Exploring vulnerabilities and defensive strategies",
            },
            {
              title: "Engineering Projects",
              desc: "Building tools and automation solutions",
            },
            {
              title: "Tech Innovation",
              desc: "Experimenting with cutting-edge technologies",
            },
          ].map((item, index) => (
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
                borderRadius: "16px",
                padding: "2rem",
                textAlign: "center",
                color: "var(--color-foreground)",
                boxShadow: `
                  0 4px 20px rgba(0, 0, 0, 0.1),
                  inset 0 1px 0 rgba(255, 255, 255, 0.2)
                `,
                transition: "all 0.3s ease",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = `0 8px 30px var(--color-accent-glow)`;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0px)";
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
                  borderRadius: "16px 16px 0 0",
                  pointerEvents: "none",
                }}
              />
              <h3
                style={{
                  fontSize: "1.25rem",
                  marginBottom: "0.75rem",
                  color: "var(--color-accent)",
                  fontWeight: "600",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  opacity: 0.8,
                  fontSize: "0.95rem",
                  lineHeight: "1.5",
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
      `}</style>
    </div>
  );
}
