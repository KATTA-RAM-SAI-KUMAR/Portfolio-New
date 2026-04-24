import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

export default function About() {
  const { theme, mode } = useTheme();

  return (
    <section className="py-20 px-6 min-h-[80vh]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }} // ✅ changed from whileInView
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: theme.text }}
          >
            About Me
          </h2>

          <p style={{ color: theme.subtext }} className="mb-4">
            I am a passionate Software Developer focused on building scalable,
            high-performance applications. I enjoy solving complex problems
            and turning ideas into real-world products.
          </p>

          <p style={{ color: theme.subtext }}>
            My goal is to continuously grow as a developer and contribute to
            impactful projects that make a difference.
          </p>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }} // ✅ changed
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-xl p-6 border backdrop-blur-lg"
          style={{
            background:
              mode === "dark"
                ? "rgba(255,255,255,0.05)"
                : "rgba(0,0,0,0.03)",
            borderColor: theme.border,
          }}
        >
          <h3
            className="text-xl font-semibold mb-3"
            style={{ color: theme.text }}
          >
            Quick Info
          </h3>

          <ul className="space-y-2" style={{ color: theme.subtext }}>
            <li>🎓 B.Tech in Data Science</li>
            <li>💻 Full Stack Developer</li>
            <li>📍 India</li>
            <li>🚀 Open to Opportunities</li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
}