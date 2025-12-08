'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [variant, setVariant] = useState<'default' | 'pointer' | 'project'>('default');
  const [isClicked, setIsClicked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Mouse position setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Throttling for variant detection
  const lastVariantCheck = useRef(0);
  const VARIANT_CHECK_THROTTLE = 100; // ms

  // Smooth spring physics
  const springConfig = { damping: 28, stiffness: 500 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check for mobile/touch device
    const checkMobile = () => {
      if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      // Update cursor position (always immediate)
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Throttle variant detection to reduce DOM queries
      const now = Date.now();
      if (now - lastVariantCheck.current > VARIANT_CHECK_THROTTLE) {
        lastVariantCheck.current = now;
        
        const target = e.target;
        if (!(target instanceof HTMLElement)) {
          // Default variant for non-HTMLElement targets
          setVariant('default');
          return;
        }

        // Check for interactive elements (optimized to avoid multiple DOM traversals)
        const projectElement = target.closest('.project-image');
        if (projectElement) {
          setVariant('project');
          return;
        }

        const interactiveElement = target.closest('a, button, [role="button"]');
        if (interactiveElement) {
          setVariant('pointer');
        } else {
          setVariant('default');
        }
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [mouseX, mouseY]);

  if (isMobile) return null;

  // Variants for Framer Motion
  const variants = {
    default: {
      width: 16,
      height: 16,
      backgroundColor: 'transparent',
      border: '1px solid currentColor',
      mixBlendMode: 'difference' as React.CSSProperties['mixBlendMode'],
    },
    pointer: {
      width: 24,
      height: 24,
      backgroundColor: 'currentColor',
      border: '0px solid currentColor',
      mixBlendMode: 'difference' as React.CSSProperties['mixBlendMode'],
    },
    project: {
      width: 96,
      height: 96,
      backgroundColor: 'currentColor',
      border: '0px solid currentColor',
      mixBlendMode: 'difference' as React.CSSProperties['mixBlendMode'],
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 flex items-center justify-center rounded-full pointer-events-none z-[9999] text-white"
      style={{
        translateX: cursorX,
        translateY: cursorY,
        x: '-50%', // Center the cursor on the mouse
        y: '-50%',
        opacity: isVisible ? 1 : 0,
      }}
      animate={{
        ...variants[variant],
        scale: isClicked ? 0.8 : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 28, // Matches spring config for movement for consistency, or can be different
        layout: { duration: 0.2 }, // Smooth transitions between variants
      }}
    >
      {variant === 'project' && (
        <span className="text-black font-sans text-xs font-bold tracking-widest">
          VIEW
        </span>
      )}
    </motion.div>
  );
};
