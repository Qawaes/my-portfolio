import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import myImage from "../assets/my-about.JPG";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 text-white bg-gradient-to-b from-black via-gray-900 to-black"
    >
      {/* Floating Blob Background */}
      <div className="absolute -z-10 w-96 h-96 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      {/* Profile Image */}
      <motion.div
        className="relative w-64 h-64 md:w-80 md:h-80 rounded-full shadow-2xl overflow-hidden backdrop-blur-lg border-4 border-blue-500/40 flex items-center justify-center animate-floating"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src={myImage}
          alt="Ian Derrick"
          className="w-full h-full object-cover rounded-full"
        />
      </motion.div>

      {/* About Text */}
      <motion.div
        className="mt-10 md:mt-0 md:ml-16 max-w-2xl text-center md:text-left"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold mb-4 text-blue-400 glow-text">
          About Me
        </h2>

        <p className="text-gray-300 leading-relaxed mb-6">
          I'm <span className="text-blue-400 font-semibold">Ian Derrick</span>, a 
          <span className="text-purple-400 font-semibold"> Software Engineer</span> and 
          <span className="text-blue-400 font-semibold"> Telecommunication Engineer</span>. 
           Currently pursuing a Bachelor of Science in Telecommunication and Information Engineering 
          at <span className="text-blue-300 font-semibold">Dedan Kimathi University of Technology</span> and a proud software engineering alumni from <span className="text-blue-300 font-semibold">Moringa School</span>.
        </p>

        <p className="text-gray-300 leading-relaxed mb-6">
          My passion lies in merging creativity with logic using code and communication systems 
          to craft innovative digital experiences. I enjoy working on web applications, automation systems 
          and AI-powered tools that solve real-world problems and enhance user interaction.
        </p>

        <div className="text-xl font-semibold mb-4 flex justify-center md:justify-start">
          <Typewriter
            options={{
              strings: [
                "I love building interactive web apps 🚀",
                "I explore IoT and automation 🌐",
                "I design smart software for real impact 💡",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 40,
              delay: 70,
            }}
          />
        </div>

        <p className="text-gray-400 max-w-lg">
          Beyond tech, I’m an avid <span className="text-blue-400 font-semibold">video game enthusiast</span> 🎮 
          and a <span className="text-purple-400 font-semibold">hiking lover</span> both fuel my curiosity, 
          creativity, and problem-solving mindset. I believe technology should not only connect systems but also 
          inspire people to explore, learn, and grow.
        </p>
      </motion.div>

      {/* Custom CSS Animations */}
      <style>
        {`
          @keyframes floating {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
          .animate-floating {
            animation: floating 6s ease-in-out infinite;
          }
          .glow-text {
            text-shadow: 0 0 10px #60a5fa, 0 0 20px #3b82f6;
          }
        `}
      </style>
    </section>
  );
}
