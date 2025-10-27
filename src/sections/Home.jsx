import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";
import { ReactTyped } from "react-typed";


export default function Home() {
  const [isHovering, setIsHovering] = useState(false);

  // Motion values for 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const posX = event.clientX - rect.left - rect.width / 2;
    const posY = event.clientY - rect.top - rect.height / 2;
    x.set(posX);
    y.set(posY);
  };

  return (
    <section
      id="home"
      className="relative z-[10] h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 text-white"
    >
      {/* Left content */}
      <div className="flex-1 text-center md:text-left space-y-6">
        <motion.h1
          className="text-5xl font-bold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I’m Ian Derrick 
        </motion.h1>
        <motion.h2
  className="text-xl text-gray-400 mt-2"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.3 }}
>
  Turning code into connection, one system at a time.
</motion.h2>


        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-2xl text-blue-400 font-semibold"
        >
         <ReactTyped
            strings={[
            "Full Stack Software Engineer ",
            "Telecommunication Innovator ",
            "AI & IoT Enthusiast ",
            "Cybersecurity Learner ",
            ]}
            typeSpeed={60}
            backSpeed={40}
            loop
            />

        </motion.div>

       <motion.p
  className="text-lg text-gray-300 max-w-xl leading-relaxed"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1 }}
>
  I’m passionate about crafting intelligent, human-centered systems that
  bridge <span className="text-blue-400 font-semibold">software</span> ,
  and <span className="text-purple-400 font-semibold">engineering</span>. 
  I thrive at the intersection of creativity and logic — turning ideas into 
  digital solutions that connect, empower, and inspire.
</motion.p>

<motion.div
  className="text-gray-400 text-sm max-w-md mt-3 italic"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.3 }}
>
  Currently exploring how <span className="text-blue-400">AI</span>, 
  <span className="text-purple-400">IoT</span>, and 
  <span className="text-pink-400">Cybersecurity</span> can create smarter and safer systems.
</motion.div>


        <motion.a
          href="/Ian-Derrick-CV.pdf"
          download
          className="inline-block mt-4 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full text-white font-medium shadow-md transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download CV
        </motion.a>
      </div>

      {/* Right photo */}
      <motion.div
        className="flex-1 flex justify-center mt-10 md:mt-0"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
          setIsHovering(false);
        }}
        onMouseEnter={() => setIsHovering(true)}
        animate={{
          scale: isHovering ? 1.05 : 1,
          boxShadow: isHovering
            ? "0 0 30px rgba(0, 174, 255, 0.6)"
            : "0 0 10px rgba(0, 0, 0, 0.2)",
        }}
        transition={{ type: "spring", stiffness: 150, damping: 10 }}
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
          <img
            src="/profile.JPG" // Place your image in /public
            alt="Ian Derrick"
            className="w-full h-full object-cover"
          />
          {/* Soft glow effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-blue-500/10 opacity-0 hover:opacity-100 transition duration-500"></div>
        </div>
      </motion.div>
    </section>
  );
}
