import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer
      style={{
        background: theme.bg,
        borderTop: `1px solid ${theme.border}`
      }}
      className="mt-20"
    >
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">

        {/* COPYRIGHT */}
        <p style={{ color: theme.subtext }}>
          © 2026 Ram Sai Kumar Katta. All rights reserved.
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex gap-6 text-xl">

          <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            className="hover:text-violet-500 hover:scale-110 transition"
            style={{ color: theme.text }}
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/YOUR_USERNAME"
            target="_blank"
            className="hover:text-violet-500 hover:scale-110 transition"
            style={{ color: theme.text }}
          >
            <FaLinkedin />
          </a>

          <a
            href="https://instagram.com/YOUR_USERNAME"
            target="_blank"
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