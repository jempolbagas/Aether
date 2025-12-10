'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

type Project = {
  id: number;
  title: string;
  subtitle: string;
  specs: string;
  description: string;
  lore: string;
  image: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'THE VECTOR',
    subtitle: 'Atmospheric Observatory / Dolomites, Italy',
    specs: '[46.5° N, 11.8° E] // ELEV: 2200M',
    description: 'A rejection of the ground. Cantilevered 42 meters over a sheer vertical drop, the structure is designed to generate a distinct psychological response: the thrill of suspension.',
    lore: 'Gravity is a suggestion.',
    image: '/the-vector.webp',
  },
  {
    id: 2,
    title: 'THE ORIGIN',
    subtitle: 'Subtractive Geothermal Spa / Reykjanes, Iceland',
    specs: '[63.8° N, 22.4° W] // TEMP: 38°C',
    description: 'Architecture is usually an act of addition. The Origin is an act of subtraction. Located inside a dormant volcanic lava tube, we simply carved the void.',
    lore: 'Civilization is noise.',
    image: '/the-origin.webp',
  },
  {
    id: 3,
    title: 'THE MONOLITH',
    subtitle: 'Data Sanctuary / Svalbard, Norway',
    specs: '[78.2° N, 15.6° E] // TEMP: -12°C',
    description: 'A tomb for information. A black triangle on a white horizon designed to outlast the civilization that built it. It creates no heat; it reflects no light.',
    lore: 'A fortress for legacy.',
    image: '/the-monolith.webp',
  },
  {
    id: 4,
    title: 'THE VEIL',
    subtitle: 'Urban Fortress / Tokyo, Japan',
    specs: '[35.6° N, 139.7° E] // VISIBILITY: 0%',
    description: 'Tokyo is a city of observation. The Veil is a machine for privacy. An inverted panopticon where the resident sees everything, but the city sees nothing.',
    lore: 'True power is invisibility.',
    image: '/the-veil.webp',
  },
];

const MAX_SCROLL_OFFSET = '-92%';

export function FlagshipProjects() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Adjusted transform for the wider gap (gap-40) and smoother feel.
  const x = useTransform(scrollYProgress, [0, 1], ['0%', MAX_SCROLL_OFFSET]);

  return (
    // FIX 1: Increased height to 500vh for a "heavier," slower scroll feel.
    <section ref={targetRef} className="relative h-[500vh] bg-[#050505] text-white">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Horizontal Track */}
        {/* FIX 2: Increased gap to gap-40 (10rem) to separate the "Monuments". Added larger padding. */}
        <motion.div style={{ x }} className="flex gap-40 px-20">
          {projects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </motion.div>

        {/* Progress Bar */}
        <div className="absolute bottom-12 left-12 right-12 h-[1px] bg-white/10">
            <motion.div 
                style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
                className="h-full w-full bg-white/50" 
            />
        </div>

      </div>
    </section>
  );
}

function Card({ project }: { project: Project }) {
  return (
    <div className="relative h-[80vh] w-[80vw] md:w-[60vw] shrink-0 overflow-hidden bg-[#0a0a0a] border border-white/5 group">
        
        {/* Background Image */}
        {/* FIX 3: Removed opacity on image, let the gradient handle the fade. Added subtle scale on hover. */}
        <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] group-hover:scale-105 grayscale"
            style={{ backgroundImage: `url(${project.image})` }}
        />
        
        {/* FIX 4: The Gradient Overlay (The "Dark Mode" Fix). 
            This ensures the text at the bottom is ALWAYS readable. */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent opacity-90" />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-16">
            
            {/* Top: Specs & ID */}
            <div className="flex justify-between items-start z-10">
                <span className="font-mono text-xs md:text-sm text-white/70 tracking-widest uppercase bg-black/50 px-2 py-1 backdrop-blur-sm border border-white/10">
                    {project.specs}
                </span>
                {/* Fixed Hierarchy: Large number is now subtle background element */}
                <span className="font-mono text-6xl md:text-8xl text-white/5 font-bold select-none absolute top-8 right-8 mix-blend-overlay">
                    0{project.id}
                </span>
            </div>

            {/* Bottom: Title & Details */}
            <div className="space-y-6 z-10 max-w-4xl">
                <div>
                    <h3 className="font-headline text-5xl md:text-7xl lg:text-8xl font-medium uppercase tracking-tighter leading-[0.95] mb-4 text-white">
                        {project.title}
                    </h3>
                    <p className="font-mono text-xs md:text-sm text-accent uppercase tracking-[0.2em] text-white/60">
                        {project.subtitle}
                    </p>
                </div>

                {/* Decorative Line */}
                <div className="h-[1px] w-24 bg-white/30" />

                {/* Description and lore hidden per requirements */}
            </div>
        </div>
    </div>
  );
}