import "./App.css";
import { useState, useEffect } from "react";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import WorkExperience from "./Components/WorkExperience";
import Navbar from "./Components/Navbar";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      {/* Pass Dark Mode State to Navbar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Hero />
      <WorkExperience />
      <Projects />
    </div>
  );
}
export default App;
