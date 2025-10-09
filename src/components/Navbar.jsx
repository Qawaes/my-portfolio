import { motion } from "framer-motion";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-md text-white flex justify-between items-center px-10 py-4 z-50 shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Name on the left */}
      <motion.h1
        className="text-2xl font-[cursive] text-blue-400 drop-shadow-[0_0_8px_#60a5fa] hover:drop-shadow-[0_0_15px_#3b82f6] transition-all duration-300 cursor-pointer"
        whileHover={{ scale: 1.1 }}
      >
        Ian Derrick
      </motion.h1>

      {/* Navigation links */}
      <ul className="flex gap-8">
        {sections.map((section) => (
          <li
            key={section.id}
            className="cursor-pointer text-lg hover:text-blue-400 transition"
            onClick={() => scrollToSection(section.id)}
          >
            {section.label}
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
