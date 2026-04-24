import { useRef } from "react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Nike Reimagined",
    desc: "A polished storefront with product filtering, cart flows, and animations.",
    tags: ["React", "Tailwind", "Framer Motion"],
  },
  {
    title: "News Hub",
    desc: "A responsive content platform with live article search and category filtering.",
    tags: ["Next.js", "TypeScript", "API Integration"],
  },
  {
    title: "Freshmart Store",
    desc: "An e-commerce experience with product browsing, cart management, and checkout UI.",
    tags: ["React", "Node.js", "Stripe"],
  },
  {
    title: "GitHub Profile Viewer",
    desc: "A developer dashboard showing GitHub stats, repos, and activity insights.",
    tags: ["React", "REST API", "Analytics"],
  },
];

export default function Projects() {
  const { theme, mode } = useTheme();
  const cardRefs = useRef([]);

  const handleMove = (e, card) => {
    if (!card) return; // ✅ safety

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y - rect.height / 2) / 15;
    const rotateY = (x - rect.width / 2) / 15;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleLeave = (card) => {
    if (!card) return;
    card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
  };

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
        Projects
      </motion.h2>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            ref={(el) => (cardRefs.current[i] = el)}
            onMouseMove={(e) => handleMove(e, cardRefs.current[i])}
            onMouseLeave={() => handleLeave(cardRefs.current[i])}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="rounded-xl border p-6 transition duration-200 cursor-pointer"
            style={{
              background:
                mode === "dark"
                  ? "rgba(255,255,255,0.05)"
                  : "rgba(0,0,0,0.03)",
              borderColor: theme.border,
              color: theme.text,
              transformStyle: "preserve-3d",
              perspective: "1000px",
            }}
          >
            {/* TITLE */}
            <h3 className="text-xl font-semibold mb-2">
              {p.title}
            </h3>

            {/* DESCRIPTION */}
            <p style={{ color: theme.subtext }} className="mb-4">
              {p.desc}
            </p>

            {/* TAGS */}
            <div className="flex flex-wrap gap-2">
              {p.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="rounded-full border px-3 py-1 text-xs"
                  style={{
                    borderColor: theme.border,
                    color: theme.text,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}