"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const opacity = useMotionValue(0); // Hidden by default

  // Smooth out the movement
  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Subtract 5px to center the 10px cursor on the mouse
      cursorX.set(e.clientX - 5);
      cursorY.set(e.clientY - 5);

      // Ensure it's visible when moving
      if (opacity.get() === 0) {
        opacity.set(1);
      }
    };

    const handleMouseLeave = () => {
      opacity.set(0);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      className="fixed w-[10px] h-[10px] border border-white/60 rounded-full pointer-events-none z-[9999]"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        opacity: opacity,
        top: 0,
        left: 0,
      }}
    />
  );
}
