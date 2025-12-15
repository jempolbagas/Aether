"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useLenis } from "@/components/SmoothScroll";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const navItemVariants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
};

// Mobile menu link with smooth scrolling
const MobileMenuLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const { lenis } = useLenis();
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Check if the link is an anchor link or the home link
    if ((href.startsWith('#') || href === '/') && lenis) {
      e.preventDefault();
      const target = href === '/' ? 0 : href;
      lenis.scrollTo(target);
      // Silently update URL using Next.js router
      router.push(href, { scroll: false });
    }
  };

  return (
    <SheetClose asChild>
      <Link 
        href={href}
        className="text-2xl font-headline uppercase tracking-widest text-foreground"
        onClick={handleClick}
      >
        {children}
      </Link>
    </SheetClose>
  );
};

// Reusing NavLink for both Desktop and Mobile Menu (styling adjusted via className)
const NavLink = ({
  href,
  children,
  className,
  delay = 0,
  onClick
}: {
  href: string;
  children: React.ReactNode;
  className: string;
  delay?: number;
  onClick?: () => void;
}) => {
  const { lenis } = useLenis();
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick();

    // Check if the link is an anchor link or the home link
    if ((href.startsWith('#') || href === '/') && lenis) {
      e.preventDefault();
      const target = href === '/' ? 0 : href;
      lenis.scrollTo(target);
      // Silently update URL using Next.js router
      router.push(href, { scroll: false });
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={navItemVariants}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      <Link
        href={href}
        className="text-sm uppercase tracking-widest text-foreground hover:text-muted-foreground transition-colors duration-300"
        onClick={handleClick}
      >
        {children}
      </Link>
    </motion.div>
  );
};

export function CornerNav() {
  return (
    <>
      {/* Desktop View (The Original 4-Corner HUD) - Hidden on Mobile */}
      <nav className="hidden md:block">
        <NavLink href="/" className="fixed p-8 z-50 mix-blend-difference top-0 left-0" delay={0.2}>Aether</NavLink>
        <NavLink href="#projects" className="fixed p-8 z-50 mix-blend-difference top-0 right-0" delay={0.4}>Projects</NavLink>
        <NavLink href="#about" className="fixed p-8 z-50 mix-blend-difference bottom-0 left-0" delay={0.6}>Manifesto</NavLink>
        <NavLink href="#contact" className="fixed p-8 z-50 mix-blend-difference bottom-0 right-0" delay={0.8}>Contact</NavLink>
      </nav>

      {/* Mobile View - Hidden on Desktop */}
      <nav className="block md:hidden">
        {/* Top Left: Home */}
        <NavLink href="/" className="fixed p-4 z-50 mix-blend-difference top-0 left-0" delay={0.2}>Aether</NavLink>

        {/* Top Right: Menu Trigger */}
        <div className="fixed top-0 right-0 p-4 z-50 mix-blend-difference">
          <Sheet>
            <SheetTrigger asChild>
              <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-sm uppercase tracking-widest text-foreground hover:text-muted-foreground transition-colors duration-300 bg-transparent border-none cursor-pointer"
              >
                MENU
              </motion.button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full bg-background border-l border-white/10 flex flex-col justify-center items-center gap-8">
              <SheetTitle>
                  <VisuallyHidden>Navigation Menu</VisuallyHidden>
              </SheetTitle>
              <SheetDescription>
                  <VisuallyHidden>Main navigation links for the portfolio.</VisuallyHidden>
              </SheetDescription>

              <div className="flex flex-col gap-8 text-center">
                <MobileMenuLink href="/">Aether</MobileMenuLink>
                <MobileMenuLink href="#projects">Projects</MobileMenuLink>
                <MobileMenuLink href="#about">Manifesto</MobileMenuLink>
                <MobileMenuLink href="#contact">Contact</MobileMenuLink>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Bottom Corners Hidden on Mobile */}
      </nav>
    </>
  );
}
