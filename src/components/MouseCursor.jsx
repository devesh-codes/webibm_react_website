import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function MouseCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Outer Circle (slower)
  const outerX = useSpring(mouseX, {
    stiffness: 160,
    damping: 18,
  });

  const outerY = useSpring(mouseY, {
    stiffness: 160,
    damping: 18,
  });

  // Inner Dot (faster)
  const innerX = useSpring(mouseX, {
    stiffness: 700,
    damping: 35,
  });

  const innerY = useSpring(mouseY, {
    stiffness: 700,
    damping: 35,
  });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* Outer Circle */}
      <motion.div
        style={{
          x: outerX,
          y: outerY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="fixed top-0 left-0 w-8 h-8 rounded-full bg-red-500/20 pointer-events-none z-[99998]"
      />

      {/* Inner Dot */}
      <motion.div
        style={{
          x: innerX,
          y: innerY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-red-700 pointer-events-none z-[99999]"
      />
    </>
  );
}