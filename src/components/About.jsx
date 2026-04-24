import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

export default function About() {
  const { theme } = useTheme();

  return (
    <section
      id="About"
      className="py-20 px-6"
      style={{ background: theme.bg }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
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
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-xl p-6"
        >
          <h3 className="text-xl font-semibold mb-3">Quick Info</h3>

          <ul className="space-y-2 text-gray-400">
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