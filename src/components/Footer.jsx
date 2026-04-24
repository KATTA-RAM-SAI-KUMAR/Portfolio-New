import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const { theme, mode } = useTheme();

  return (
    <footer
      style={{
        background:
          mode === "dark"
            ? "rgba(2,6,23,0.7)"
            : "rgba(255,255,255,0.7)",
        borderTop: `1px solid ${theme.border}`,
        backdropFilter: "blur(10px)",
      }}
      className="mt-auto" // ✅ pushes footer to bottom
    >
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">

        {/* COPYRIGHT */}
        <p style={{ color: theme.subtext }}>
          © 2026 Katta Ram Sai Kumar. All rights reserved.
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            rel="noreferrer"
            className="hover:text-violet-500 hover:scale-110 transition"
            style={{ color: theme.text }}
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/YOUR_USERNAME"
            target="_blank"
            rel="noreferrer"
            className="hover:text-violet-500 hover:scale-110 transition"
            style={{ color: theme.text }}
          >
            <FaLinkedin />
          </a>

          <a
            href="https://instagram.com/YOUR_USERNAME"
            target="_blank"
            rel="noreferrer"
            className="hover:text-violet-500 hover:scale-110 transition"
            style={{ color: theme.text }}
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}