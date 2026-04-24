import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import MusicPlayer from "./components/MusicPlayer";
import CursorGlow from "./components/CursorGlow";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import { useTheme } from "./context/ThemeContext";

export default function App() {
  const { theme } = useTheme();

  return (
    <div
      style={{ background: theme.bg, color: theme.text }}
      className="min-h-screen transition-colors duration-300"
    >
      {/* Cursor Glow (behind everything) */}
      <CursorGlow />

      {/* Navbar */}
      <Navbar />

      {/* Music */}
      <MusicPlayer />

      {/* Main Content */}
      <main className="pt-20 relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Footer />
      </main>
    </div>
  );
}