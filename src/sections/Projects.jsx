import { motion } from "framer-motion";
import { Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "EduAid",
      description:
        "AI-powered adaptive learning assistant designed to support Competency-Based Education (CBE) in under-resourced schools.",
      tech: ["Python", "Flask", "AI APIs"],
      link: "https://github.com/Qawaes",
    },
    {
      title: "Car Hire Management App",
      description:
        "React-based car hire platform with booking system, role-based access, and full CRUD functionality.",
      tech: ["React", "Tailwind", "JSON Server"],
      link: "https://github.com/Qawaes",
    },
    {
      title: "Internet Chat System",
      description:
        "A real-time Java TCP client-server messaging app supporting multiple concurrent users.",
      tech: ["Java", "TCP/IP"],
      link: "https://github.com/Qawaes",
    },
    {
      title: "Quiz Trivia App",
      description:
        "An interactive quiz web app with timers, scoring, progress tracking, and difficulty modes.",
      tech: ["JavaScript", "HTML", "CSS"],
      link: "https://github.com/Qawaes/trivia-project",
    },
    {
      title: "FeePaymentApp",
      description:
        "An Android app for managing student fee records using a local SQLite database.",
      tech: ["Java", "SQLite", "Android Studio"],
      link: "https://github.com/Qawaes",
    },
    {
      title: "Custom ORM System",
      description:
        "Python ORM simulating Yelp database relationships with persistent CRUD and relational mapping.",
      tech: ["Python", "SQLite"],
      link: "https://github.com/Qawaes",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 px-6 md:px-20"
    >
      {/* Heading */}
      <motion.h2
          className="text-4xl font-bold text-center mb-12 text-blue-400 glow-text"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
          viewport={{ once: true, amount: 0.2 }} 
        >
          Projects
      </motion.h2>


      {/* Projects Grid */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-blue-500/20 hover:border-blue-500 transition-all hover:shadow-blue-500/40"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }} 
            viewport={{ once: true }} 
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold text-blue-300 mb-3">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-sm bg-blue-500/20 px-3 py-1 rounded-full text-blue-300 border border-blue-400/30"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
            >
              <Github size={18} />
              View Project
            </a>
          </motion.div>
        ))}
      </div>

      {/* Glow text animation */}
      <style>
        {`
          .glow-text {
            text-shadow: 0 0 10px #60a5fa, 0 0 20px #3b82f6;
          }
        `}
      </style>
    </section>
  );
}
