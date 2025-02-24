import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X, Sun, Moon, Github, Linkedin } from "lucide-react";

export default function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left Side - Navigation Links (Desktop & Mobile Menu Button) */}
        <div className="flex items-center">
          {/* Mobile Menu Button */}
          <button className="md:hidden mr-4" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <ul className="hidden md:flex space-x-6 text-lg">
            {[
              { name: "Home", id: "home" }, // ✅ Now points to Hero section
              { name: "Experience", id: "experience" }, // ✅ Now points to WorkExperience section
              { name: "Projects", id: "projects" }, // ✅ Already working
            ].map(({ name, id }) => (
              <li key={id}>
                <Link
                  to={id}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/Itsaashish"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
          >
            <Github size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/aashish-yadav-416225220"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
          >
            <Linkedin size={24} />
          </a>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Left Aligned */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 py-4 px-6">
          <ul className="flex flex-col space-y-4">
            {[
              { name: "Home", id: "home" },
              { name: "Experience", id: "experience" },
              { name: "Projects", id: "projects" },
            ].map(({ name, id }) => (
              <li key={id}>
                <Link
                  to={id}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 text-lg"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
