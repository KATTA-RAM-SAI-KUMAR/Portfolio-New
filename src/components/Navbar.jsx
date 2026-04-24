import { useTheme } from "../context/ThemeContext";
import { Sun, Moon, Music, Music2 } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const { toggleTheme, mode } = useTheme();

  const { musicOn, toggleMusic } = useTheme();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Education", path: "/education" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div
      className="fixed top-0 w-full flex justify-between items-center px-8 py-4 backdrop-blur-md z-50 border-b"
      style={{
        background:
          mode === "dark"
            ? "rgba(2,6,23,0.7)"
            : "rgba(255,255,255,0.7)",
        borderColor: mode === "dark" ? "#1e293b" : "#e5e7eb",
        color: mode === "dark" ? "#e2e8f0" : "#0f172a",
      }}
    >
      {/* LOGO */}
      <NavLink to="/" className="font-bold text-lg">
        KattaRamSaiKumar.dev
      </NavLink>

      {/* NAV LINKS */}
      <div className="hidden md:flex gap-8 text-sm">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `relative group transition ${isActive ? "text-violet-500" : ""
              }`
            }
          >
            {item.name}

            {/* underline animation */}
            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-violet-500 transition-all duration-300 ${
                // active → full width, else hover animation
                "w-0 group-hover:w-full"
                }`}
            ></span>
          </NavLink>
        ))}
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex gap-4 items-center">
        {/* MUSIC TOGGLE */}

        <button onClick={toggleMusic}>
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