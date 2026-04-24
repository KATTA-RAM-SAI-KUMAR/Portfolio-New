import { useRef } from "react";
import { useTheme } from "../context/ThemeContext";

const projects = [
  { title: "AI Textbook", desc: "AI-powered learning system" },
  { title: "Vehicle Rental", desc: "Peer-to-peer rental platform" },
  { title: "Health Tracker", desc: "Daily habit tracking app" }
];

export default function Projects() {
  const { theme } = useTheme();

  const handleMove = (e, card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y - rect.height / 2) / 15;
    const rotateY = (x - rect.width / 2) / 15;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleLeave = (card) => {
    card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
  };

  return (
    <section id="Projects" className="py-20">
      
      {/* TITLE */}
      <h2
        className="text-3xl font-bold text-center mb-12"
        style={{ color: theme.text }}
      >
        Projects
      </h2>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {projects.map((p, i) => {
          const ref = useRef();

          return (
            <div
              key={i}
              ref={ref}
              onMouseMove={(e) => handleMove(e, ref.current)}
              onMouseLeave={() => handleLeave(ref.current)}
              className="rounded-xl border p-6 transition duration-200"
              style={{
                background: theme.card,
                borderColor: theme.border,
                color: theme.text,
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >
              <h3 className="text-xl font-semibold mb-2">
                {p.title}
              </h3>

              <p style={{ color: theme.subtext }}>
                {p.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}