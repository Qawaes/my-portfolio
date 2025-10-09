import { motion } from "framer-motion";
import { Linkedin, Github } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import {Toaster, toast} from "react-hot-toast"


export default function Contact() {
  const glowRef = useRef(null);
  const [status, setStatus] = useState("");

  // Glow follows cursor
  useEffect(() => {
    const glow = glowRef.current;
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      glow.style.left = `${clientX}px`;
      glow.style.top = `${clientY}px`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Form handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const response = await fetch("https://formspree.io/f/mdkwlevg", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

     if (response.ok) {
      setStatus("SUCCESS");
      toast.success("✅ Message sent successfully!");
      e.target.reset();
    } else {
      setStatus("ERROR");
      toast.error("❌ Something went wrong. Try again.");
    }
  };

  return (
   <section
  id="contact"
  className="relative z-10 min-h-screen bg-gradient-to-b from-gray-900/80 via-black/80 to-gray-900/80 text-white py-20 px-8 flex flex-col justify-center items-center overflow-visible backdrop-blur-sm"
>

      

      {/* Cursor Glow */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute w-64 h-64 bg-blue-500/10 blur-3xl rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
      ></div>

       {/* Toast Notifications */}
      <Toaster position="bottom-right" />

      <motion.h2
        className="text-4xl font-bold mb-8 text-blue-400"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Let’s Connect 🤝
      </motion.h2>

      <motion.p
        className="text-gray-300 text-center max-w-2xl mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Whether you have a question, a collaboration idea, or just want to say
        hi — my inbox and WhatsApp are always open. I love connecting with
        like-minded creators and innovators!
      </motion.p>

      {/* Contact Links */}
      <motion.div
        className="flex flex-wrap justify-center gap-8 mb-12 z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {[
          {
            href: "https://wa.me/254727925858",
            icon: <FaWhatsapp className="w-10 h-10" />,
            label: "WhatsApp",
          },
          {
            href: "https://www.linkedin.com/in/ian-derrick-344776256/",
            icon: <Linkedin className="w-10 h-10" />,
            label: "LinkedIn",
          },
          {
            href: "https://github.com/Qawaes",
            icon: <Github className="w-10 h-10" />,
            label: "GitHub",
          },
        ].map((item, i) => (
          <motion.a
            key={i}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center transition-transform hover:scale-110"
            whileHover={{ y: -5 }}
          >
            <motion.div
              className="text-blue-400 mb-2 relative"
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3 + i,
                ease: "easeInOut",
              }}
            >
              <div className="absolute inset-0 bg-blue-400 blur-lg opacity-30 group-hover:opacity-70 transition"></div>
              {item.icon}
            </motion.div>
            <span className="text-sm">{item.label}</span>
          </motion.a>
        ))}
      </motion.div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white/10 p-8 rounded-2xl shadow-lg backdrop-blur-md border border-transparent bg-clip-padding relative group z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 opacity-60 group-hover:opacity-90 blur-sm transition-all duration-500 animate-gradient-x"></div>
        <div className="relative grid gap-6">
          <div>
            <label className="block text-sm mb-2">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-blue-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-blue-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Message</label>
            <textarea
              name="message"
              placeholder="Let's talk..."
              rows="4"
              required
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:border-blue-400 focus:outline-none"
            />
          </div>

          <motion.button
            type="submit"
            className="relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white font-semibold py-3 rounded-md mt-2 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message 
          </motion.button>
        </div>
      </motion.form>

      {/* Footer */}
      <motion.p
        className="text-gray-500 text-sm mt-10 z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        © {new Date().getFullYear()} Ian Derrick
      </motion.p>
    </section>
  );
}
