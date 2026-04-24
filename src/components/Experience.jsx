import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const experiences = [
  {
    role: "Senior Full Stack Developer",
    company: "Aditya Domle Labs",
    period: "2024 - Present",
    details: [
      "Built scalable full-stack web apps with React, Next.js, and Node.js.",
      "Led architecture for MongoDB, API design, and reusable UI components.",
      "Implemented analytics and real-time interaction counters.",
    ],
  },
  {
    role: "Frontend Engineer",
    company: "Creative Studio",
    period: "2022 - 2024",
    details: [
      "Designed UX-focused landing pages with Tailwind CSS and motion.",
      "Optimized performance for large-scale client product launches.",
      "Collaborated with designers, backend, and product teams.",
    ],
  },
  {
    role: "Software Intern",
    company: "Tech Innovators",
    period: "2021 - 2022",
    details: [
      "Built internal dashboards and automation tools.",
      "Maintained CI/CD workflows and code quality checks.",
      "Supported database schema improvements and testing.",
    ],
  },
];

export default function Experience() {
  const { theme, mode } = useTheme();

  return (
    <section className="py-20 px-6 min-h-[80vh]">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h2
          className="text-3xl md:text-4xl font-bold mb-10"
          style={{ color: theme.text }}
        >
          Experience
        </h2>

        {/* LIST */}
        <div className="space-y-6">
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }} // ✅ fixed
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="rounded-2xl p-8 border backdrop-blur-lg"
              style={{
                background:
                  mode === "dark"
                    ? "rgba(255,255,255,0.05)"
                    : "rgba(0,0,0,0.03)",
                borderColor: theme.border,
              }}
            >
              {/* HEADER */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-4">
                <div>
                  <p
                    className="text-xl font-semibold"
                    style={{ color: theme.text }}
                  >
                    {item.role}
                  </p>

                  <p style={{ color: theme.subtext }}>
                    {item.company}
                  </p>
                </div>

                <span className="text-sm text-violet-500">
                  {item.period}
                </span>
              </div>

              {/* DETAILS */}
              <ul
                className="list-disc pl-5 space-y-2"
                style={{ color: theme.subtext }}
              >
                {item.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}