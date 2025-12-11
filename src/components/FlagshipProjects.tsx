'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projects, Project } from '@/lib/data';
import { useIsMobile } from '@/hooks/use-mobile';
import Link from 'next/link';

const MAX_SCROLL_OFFSET = '-92%';

export function FlagshipProjects() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', MAX_SCROLL_OFFSET]);

  // MOBILE: Standard Vertical Layout
  if (isMobile) {
    return (
      <section className="bg-[#050505] text-white flex flex-col gap-8 py-8">
        {projects.map((project) => (
          <div key={project.id} className="px-4">
             <Link href={`/work/${project.slug}`}>
                <Card project={project} isMobile={true} />
             </Link>
          </div>
        ))}
      </section>
    );
  }

  // DESKTOP: Horizontal Sticky Scroll
  return (
    <section ref={targetRef} className="relative h-[500vh] bg-[#050505] text-white">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Horizontal Track */}
        <motion.div style={{ x }} className="flex gap-40 px-20">
          {projects.map((project) => (
            <Link key={project.id} href={`/work/${project.slug}`}>
                <Card project={project} />
            </Link>
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

function Card({ project, isMobile = false }: { project: Project; isMobile?: boolean }) {
  return (
    <div className={`relative shrink-0 overflow-hidden bg-[#0a0a0a] border border-white/5 group ${isMobile ? 'h-[60vh] w-full' : 'h-[80vh] w-[80vw] md:w-[60vw]'}`}>
        
        {/* Background Image */}
        <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] group-hover:scale-105 grayscale"
            style={{ backgroundImage: `url(${project.image})` }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent opacity-90" />
        
        {/* Content Overlay */}
        <div className={`absolute inset-0 flex flex-col justify-between ${isMobile ? 'p-6' : 'p-8 md:p-16'}`}>
            
            {/* Top: Specs & ID */}
            <div className="flex justify-between items-start z-10">
                <span className="font-mono text-xs md:text-sm text-white/70 tracking-widest uppercase bg-black/50 px-2 py-1 backdrop-blur-sm border border-white/10">
                    {project.specs}
                </span>
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
                        {project.subtitle} / {project.location}
                    </p>
                </div>

                {/* Decorative Line */}
                <div className="h-[1px] w-24 bg-white/30" />
            </div>
        </div>
    </div>
  );
}
