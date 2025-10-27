import React from "react";
import { motion } from "framer-motion";
import { Code, Cpu, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="text-blue-400 w-8 h-8 mb-3" />,
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript (ES6+)", level: 85 },
        { name: "HTML & CSS", level: 95 },
        { name: "Tailwind CSS", level: 80 },
      ],
    },
    {
      title: "Backend & Systems",
      icon: <Cpu className="text-purple-400 w-8 h-8 mb-3" />,
      skills: [
        { name: "Flask", level: 80 },
        { name: "Python", level: 88 },
        { name: "SQLite & PostgreSQL", level: 75 },
        { name: "API Design", level: 82 },
      ],
    },
    {
      title: "Engineering & Tools",
      icon: <Zap className="text-yellow-400 w-8 h-8 mb-3" />,
      skills: [
        { name: "C Programming", level: 90 },
        { name: "Git & Version Control", level: 85 },
        { name: "Linux / CLI", level: 78 },
        { name: "Networking Fundamentals", level: 83 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen bg-black/60 backdrop-blur-sm text-white py-20 px-8 flex flex-col justify-center items-center overflow-hidden"
    >
      {/* background gradient pulse */}
      {/* <div className="absolute -z-10 w-[40rem] h-[40rem] bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div> */}

      <motion.h2
        className="text-4xl font-bold text-center mb-6 text-blue-400"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Skills
      </motion.h2>

      <p className="text-gray-400 max-w-2xl text-center mb-14">
        I merge software engineering and telecommunication expertise to craft
        scalable, secure, and user-focused solutions. From building clean UIs
        with React to designing robust backends and understanding system-level
        logic, I believe great tech blends both creativity and precision.
      </p>

      <div className="grid md:grid-cols-3 gap-10 w-full max-w-6xl">
        {skillCategories.map((category, i) => (
          <motion.div
            key={category.title}
            className="p-6 bg-gradient-to-br from-gray-900/60 to-gray-800/40 rounded-2xl border border-gray-700 shadow-lg hover:shadow-blue-500/20 transition-transform"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2, ease: "easeOut" }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="flex flex-col items-center mb-4">
              {category.icon}
              <h3 className="text-xl font-semibold text-blue-400 mb-2 text-center">
                {category.title}
              </h3>
            </div>

            {category.skills.map((skill) => (
              <div key={skill.name} className="mb-5">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-300">{skill.name}</span>
                  <span className="text-gray-400 text-sm">{skill.level}%</span>
                </div>
                <motion.div
                  className="w-full h-2 bg-gray-700 rounded-full overflow-hidden"
                  whileHover={{ scaleY: 1.2 }}
                >
                  <motion.div
                    className="bg-blue-500 h-2 rounded-full shadow-lg shadow-blue-500/30"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2 }}
                  />
                </motion.div>
              </div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Currently Exploring Section */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h3 className="text-2xl font-semibold text-blue-400 mb-4">
          Currently Exploring 
        </h3>
        <div className="flex flex-wrap justify-center gap-3 text-gray-300">
          <span className="px-4 py-2 bg-blue-500/20 rounded-full border border-blue-400/30">
            Next.js
          </span>
          <span className="px-4 py-2 bg-purple-500/20 rounded-full border border-purple-400/30">
            Flask APIs
          </span>
          <span className="px-4 py-2 bg-yellow-500/20 rounded-full border border-yellow-400/30">
            Cybersecurity
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
