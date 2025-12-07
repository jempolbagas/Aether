"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navItemVariants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
};

const NavLink = ({ href, children, className, delay }: { href: string; children: React.ReactNode; className: string; delay: number }) => (
  <motion.div
    initial="initial"
    animate="animate"
    variants={navItemVariants}
    transition={{ duration: 0.5, delay }}
    className={`fixed p-4 md:p-8 z-50 mix-blend-difference ${className}`}
  >
    <Link href={href} className="text-sm uppercase tracking-widest text-foreground hover:text-muted-foreground transition-colors duration-300">
      {children}
    </Link>
  </motion.div>
);

export function CornerNav() {
  return (
    <nav>
      <NavLink href="/" className="top-0 left-0" delay={0.2}>Aether</NavLink>
      <NavLink href="#projects" className="top-0 right-0" delay={0.4}>Projects</NavLink>
      <NavLink href="#about" className="bottom-0 left-0" delay={0.6}>About</NavLink>
      <NavLink href="#contact" className="bottom-0 right-0" delay={0.8}>Contact</NavLink>
    </nav>
  );
}
