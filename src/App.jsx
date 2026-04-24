import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import MusicPlayer from "./components/MusicPlayer";
import CursorGlow from "./components/CursorGlow";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import PageWrapper from "./components/PageWrapper";
import ScrollToTop from "./components/ScrollToTop";
import { useTheme } from "./context/ThemeContext";

export default function App() {
  const { theme } = useTheme();
  const location = useLocation();

  return (
    <div
      style={{ background: theme.bg, color: theme.text }}
      className="min-h-screen flex flex-col transition-colors duration-300"
    >
      {/* Fixed elements */}
      <CursorGlow />
      <Navbar />
      <MusicPlayer />
      <ScrollToTop />

      {/* Main content grows */}
      <main className="pt-20 relative z-10 flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>

            <Route path="/" element={
              <PageWrapper><Hero /></PageWrapper>
            } />

            <Route path="/about" element={
              <PageWrapper><About /></PageWrapper>
            } />

            <Route path="/experience" element={
              <PageWrapper><Experience /></PageWrapper>
            } />

            <Route path="/education" element={
              <PageWrapper><Education /></PageWrapper>
            } />

            <Route path="/projects" element={
              <PageWrapper><Projects /></PageWrapper>
            } />

            <Route path="/skills" element={
              <PageWrapper><Skills /></PageWrapper>
            } />

            <Route path="/contact" element={
              <PageWrapper><Contact /></PageWrapper>
            } />

            {/* 404 */}
            <Route path="*" element={<h1 className="p-10">Page Not Found</h1>} />

          </Routes>
        </AnimatePresence>
      </main>

      {/* Footer always at bottom */}
      <Footer />
    </div>
  );
}