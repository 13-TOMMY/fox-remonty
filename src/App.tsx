import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./scss/app.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { ThemeContext } from "./context/ThemeContext";
import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  const { darkMode } = useContext(ThemeContext);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 50,
    restDelta: 0.002,
  });

  return (
    <BrowserRouter>
      <div
        className={
          darkMode
            ? "dark-background viewable-area"
            : "light-background viewable-area"
        }
      >
        <motion.div className="progress-bar" style={{ scaleX }} />
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Homepage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
