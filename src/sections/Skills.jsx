import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Cpu,
  Wrench,
  Terminal,
  Globe,
  GitBranch,
  Lightbulb,
  Users,
  Brain,
} from "lucide-react";

const skills = {
  "Programming Languages": [
    { name: "C", level: 85, icon: <Code2 />, info: "System-level programming and embedded systems." },
    { name: "Python", level: 90, icon: <Terminal />, info: "Automation, AI, and backend scripting." },
    { name: "Java", level: 75, icon: <Cpu />, info: "OOP concepts, Android, and server-side apps." },
    { name: "JavaScript", level: 80, icon: <Globe />, info: "Frontend logic and interactive web experiences." },
  ],
  "Frameworks & Tools": [
    { name: "React", level: 85, icon: <Globe />, info: "Building fast, modern UIs and SPAs." },
    { name: "Node.js", level: 75, icon: <Cpu />, info: "Server-side APIs and full-stack apps." },
    { name: "Tailwind CSS", level: 80, icon: <Wrench />, info: "Utility-first responsive UI design." },
    { name: "Git & GitHub", level: 90, icon: <GitBranch />, info: "Version control and collaboration." },
  ],
  "Soft Skills": [
    { name: "Leadership", level: 95, icon: <Users />, info: "Leading teams and fostering collaboration." },
    { name: "Teamwork", level: 90, icon: <Users />, info: "Effective communication and collaboration." },
    { name: "Problem Solving", level: 92, icon: <Brain />, info: "Critical thinking and analytical reasoning." },
    { name: "Creativity", level: 88, icon: <Lightbulb />, info: "Innovative and user-centric design thinking." },
  ],
};

export default function Skills() {
  const [tooltip, setTooltip] = useState({ text: "", visible: false, x: 0, y: 0 });

  const handleMouseMove = (e, info) => {
    setTooltip({
      text: info,
      visible: true,
      x: e.clientX + 15,
      y: e.clientY - 25,
    });
  };

  const handleMouseLeave = () => {
    setTooltip({ ...tooltip, visible: false });
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen bg-gradient-to-b from-black to-gray-900 text-white py-20 px-8 flex flex-col justify-center items-center"
    >
      <motion.h2
        className="text-4xl font-bold mb-12 text-blue-400"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Skills & Expertise
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        {Object.entries(skills).map(([category, list], i) => (
          <motion.div
            key={category}
            className="bg-white/10 p-6 rounded-2xl shadow-lg backdrop-blur-sm hover:shadow-blue-500/20 transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-300 flex items-center gap-2">
              {i === 0 && <Code2 />}
              {i === 1 && <Wrench />}
              {i === 2 && <Users />}
              {category}
            </h3>

            {list.map((skill) => (
              <div
                key={skill.name}
                className="mb-5 relative cursor-pointer"
                onMouseMove={(e) => handleMouseMove(e, skill.info)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex justify-between items-center text-sm mb-1">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                  <span>{skill.level}%</span>
                </div>

                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="bg-blue-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.2 }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Tooltip */}
      {tooltip.visible && (
        <motion.div
          className="fixed px-3 py-1 text-xs bg-blue-600 text-white rounded-lg pointer-events-none z-50"
          style={{
            top: tooltip.y,
            left: tooltip.x,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {tooltip.text}
        </motion.div>
      )}
    </section>
  );
}
