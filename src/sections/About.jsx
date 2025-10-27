import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import myImage from "../assets/my-about.JPG";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 text-white bg-black/60 backdrop-blur-sm overflow-hidden"
    >
      {/* Floating Gradient Blob */}
      {/* <div className="absolute -z-10 w-96 h-96 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl opacity-25 animate-pulse"></div> */}

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

      {/* About Content */}
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
          at <span className="text-blue-300 font-semibold">Dedan Kimathi University of Technology</span> 
          and a  software engineering alumni from <span className="text-blue-300 font-semibold">Moringa School</span>.
        </p>

        <p className="text-gray-300 leading-relaxed mb-6">
          My passion lies in merging creativity with logic using code and communication systems 
          to craft innovative digital experiences. I enjoy working on web applications, automation systems, 
          and AI-powered tools that solve real-world problems and enhance user interaction.
        </p>

        {/* Typewriter Animation */}
        <div className="text-xl font-semibold mb-4 flex justify-center md:justify-start text-blue-300">
          <Typewriter
            options={{
              strings: [
                "I love building interactive web apps ",
                "I explore IoT and automation ",
                "I design smart software for real impact ",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 40,
              delay: 70,
            }}
          />
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 text-center">
          <div>
            <h3 className="text-3xl font-bold text-blue-400">3+</h3>
            <p className="text-gray-400">Years Coding</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-purple-400">10+</h3>
            <p className="text-gray-400">Projects</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-300">2</h3>
            <p className="text-gray-400">Hackathons</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-purple-300">∞</h3>
            <p className="text-gray-400">Curiosity</p>
          </div>
        </div>

        {/* Education & Affiliations */}
        <div className="mt-8 text-gray-400 text-sm space-y-1">
          <p> <span className="text-blue-300 font-semibold">BSc. Telecommunication & Information Engineering</span>, DeKUT</p>
          <p> <span className="text-purple-300 font-semibold">Software Engineering</span>, Moringa School</p>
          <p> Member, <span className="text-blue-400 font-semibold">IEEE & CASS Society</span></p>
        </div>

        {/* Personal Interests */}
        <p className="mt-6 flex gap-4 justify-center md:justify-start">
          <span className="px-4 py-2 bg-blue-500/20 rounded-full hover:bg-blue-500/30 transition"> Gaming</span>
          <span className="px-4 py-2 bg-purple-500/20 rounded-full hover:bg-purple-500/30 transition"> Hiking</span>
        </p>

        {/* Quote */}
        <blockquote className="mt-8 italic text-gray-400 border-l-4 border-blue-500 pl-4">
          "Technology should not only connect systems but also inspire people to explore, learn, and grow."
        </blockquote>
      </motion.div>

      {/* Floating Animation + Glow */}
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
