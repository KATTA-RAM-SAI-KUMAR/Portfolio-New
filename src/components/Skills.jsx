import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const skills = [
  "React", "JavaScript", "Node.js",
  "MongoDB", "Express", "Tailwind CSS",
  "Python", "Git", "REST APIs"
];

export default function Skills() {
  const { theme, mode } = useTheme();

  return (
    <section className="py-20 px-6 min-h-[80vh]">

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-12"
        style={{ color: theme.text }}
      >
        Skills & Tools
      </motion.h2>

      {/* SKILLS GRID */}
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-4">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.08 }}
            className="px-5 py-2 rounded-full border backdrop-blur-lg cursor-pointer"
            style={{
              borderColor: theme.border,
              color: theme.text,
              background:
                mode === "dark"
                  ? "rgba(255,255,255,0.05)"
                  : "rgba(0,0,0,0.03)",
            }}
          >
            {skill}
          </motion.div>
        ))}
      </div>

    </section>
  );
}