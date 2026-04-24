import { useTheme } from "../context/ThemeContext";
import { Sun, Moon, Music, Music2 } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const { toggleTheme, mode } = useTheme();

  const [musicOn, setMusicOn] = useState(false);

  const navItems = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <div className="fixed top-0 w-full flex justify-between items-center px-8 py-4 backdrop-blur-md z-50 border-b"
      style={{
        background: mode === "dark" ? "rgba(2,6,23,0.7)" : "rgba(255,255,255,0.7)",
        borderColor: mode === "dark" ? "#1e293b" : "#e5e7eb",
        color: mode === "dark" ? "#e2e8f0" : "#0f172a"
      }}
    >

      {/* LOGO */}
      <h1 className="font-bold text-lg">
        Ram Sai Kumar K.dev
      </h1>

      {/* NAV LINKS */}
      <div className="hidden md:flex gap-8 text-sm">
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className="relative group"
          >
            {item}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-violet-500 group-hover:w-full transition-all duration-300"></span>
          </a>
        ))}
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex gap-4 items-center">

        {/* MUSIC TOGGLE */}
        <button
          onClick={() => setMusicOn(!musicOn)}
          className="hover:text-violet-500 transition"
        >
          {musicOn ? <Music2 size={20} /> : <Music size={20} />}
        </button>

        {/* THEME TOGGLE */}
        <button
          onClick={toggleTheme}
          className="hover:text-yellow-400 transition"
        >
          {mode === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>

      </div>
    </div>
  );
}