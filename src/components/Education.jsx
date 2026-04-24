import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const educationData = [
  {
    title: "B.Tech in Computer Science",
    institution: "National Institute of Technology",
    period: "2018 - 2022",
    notes: [
      "Graduated with honors",
      "Final year capstone on web applications",
    ],
  },
  {
    title: "Full Stack Web Development",
    institution: "Online Bootcamp",
    period: "2023",
    notes: [
      "Focused on React, Node, and MongoDB",
      "Built production-ready applications",
    ],
  },
];

export default function Education() {
  const { theme, mode } = useTheme();

  return (
    <section className="py-20 px-6 min-h-[80vh]">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h2
          className="text-3xl md:text-4xl font-bold mb-10"
          style={{ color: theme.text }}
        >
          Education
        </h2>

        {/* GRID */}
        <div className="grid gap-6 md:grid-cols-2">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }} // ✅ fixed
              transition={{ duration: 0.45, delay: index * 0.15 }}
              className="rounded-2xl p-8 border backdrop-blur-lg"
              style={{
                background:
                  mode === "dark"
                    ? "rgba(255,255,255,0.05)"
                    : "rgba(0,0,0,0.03)",
                borderColor: theme.border,
              }}
            >
              <p
                className="text-xl font-semibold mb-2"
                style={{ color: theme.text }}
              >
                {item.title}
              </p>

              <p className="text-sm mb-2" style={{ color: theme.subtext }}>
                {item.institution}
              </p>

              <p className="text-sm text-violet-500 mb-4">
                {item.period}
              </p>

              <ul
                className="list-disc pl-5 space-y-2"
                style={{ color: theme.subtext }}
              >
                {item.notes.map((note, noteIndex) => (
                  <li key={noteIndex}>{note}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}