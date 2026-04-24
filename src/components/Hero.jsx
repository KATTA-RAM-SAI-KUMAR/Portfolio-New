import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const { theme } = useTheme();

  const roles = ["Software Developer", "Tech Explorer", "Problem Solver"];
  const [text, setText] = useState("");
  const [i, setI] = useState(0);

  useEffect(() => {
    let index = 0;
    const current = roles[i];

    const interval = setInterval(() => {
      setText(current.slice(0, index));
      index++;
      if (index > current.length) {
        clearInterval(interval);
        setTimeout(() => {
          setI((prev) => (prev + 1) % roles.length);
        }, 1500);
      }
    }, 70);

    return () => clearInterval(interval);
  }, [i]);

  return (
    <section
      id="Home"
      className="min-h-[85vh] flex items-center px-6"
      style={{ background: theme.bg }}
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* IMAGE */}
        <motion.div className="flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 blur-2xl opacity-40 group-hover:opacity-70 transition"></div>

            <img
              src="/profile.png"
              alt="profile"
              className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover border-4 relative z-10"
              style={{ borderColor: theme.border }}
            />
          </div>
        </motion.div>

        {/* TEXT */}
        <div>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: theme.text }}
          >
            Ram Sai Kumar Katta
          </h1>

          <h2 className="text-lg md:text-xl mb-4 text-violet-500 h-6">
            {text}
            <span className="animate-pulse">|</span>
          </h2>

          <p className="mb-6 max-w-xl" style={{ color: theme.subtext }}>
            I design and build scalable digital products with performance,
            usability, and clean architecture at the core.
          </p>

          <div className="flex gap-4">
            <button className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-500 text-white">
              Resume
            </button>

            <button
              className="px-6 py-2 rounded-lg border"
              style={{ borderColor: theme.border, color: theme.text }}
            >
              Contact
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}