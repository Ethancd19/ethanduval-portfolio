import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./NavBar";

export const metadata: Metadata = {
  title: "Ethan Duval | Portfolio",
  description:
    "Cybersecurity engineer and researcher from the Cayman Islands. M.Eng candidate at Virginia Tech, graduating May 2026.",
  openGraph: {
    title: "Ethan Duval | Portfolio",
    description:
      "Cybersecurity engineer and researcher from the Cayman Islands.",
    url: "https://ethanduval.com",
    siteName: "Ethan Duval",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
