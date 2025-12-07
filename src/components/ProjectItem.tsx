"use client";

import type { Project } from "@/lib/data";
import type { ImagePlaceholder } from "@/lib/placeholder-images";
import { motion } from "framer-motion";
import Image from "next/image";

type ProjectItemProps = {
  project: Project;
  image: ImagePlaceholder;
  index: number;
};

export function ProjectItem({ project, image }: ProjectItemProps) {
  return (
    <motion.div
      className="group relative w-full h-[60vh] md:h-[80vh] my-32 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <Image
        src={image.imageUrl}
        alt={project.title}
        fill
        sizes="100vw"
        className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        data-ai-hint={image.imageHint}
        priority={image.id === 'project-void'}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      
      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 text-foreground">
        <div className="max-w-4xl">
          <div className="overflow-hidden relative">
             <motion.p 
                className="text-sm uppercase tracking-wider text-muted-foreground mb-2 transform-gpu translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0"
              >
                {project.tag} &mdash; {project.location}
              </motion.p>
          </div>
          <h2 className="font-headline text-5xl md:text-7xl lg:text-8xl">{project.title}</h2>
        </div>
      </div>
    </motion.div>
  );
}
