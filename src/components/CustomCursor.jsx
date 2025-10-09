// src/components/CustomCursor.jsx
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth movement
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main glowing dot */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999]"
        style={{
          x,
          y,
          background:
            "radial-gradient(circle, rgba(0,150,255,0.7) 0%, rgba(0,150,255,0.2) 70%, transparent 100%)",
          boxShadow:
            "0 0 15px rgba(0,150,255,0.6), 0 0 30px rgba(0,150,255,0.3)",
          mixBlendMode: "screen",
        }}
      ></motion.div>

      {/* Small trailing light */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[9998]"
        style={{
          x,
          y,
          background:
            "radial-gradient(circle, rgba(0,255,255,0.9) 0%, transparent 80%)",
          mixBlendMode: "screen",
        }}
      ></motion.div>
    </>
  );
}
