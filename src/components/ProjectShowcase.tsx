import { FlagshipProjects } from "./FlagshipProjects";

export function ProjectShowcase() {
  return (
    // Removed the "container" class padding to allow full-width scroll
    <section id="projects" className="w-full bg-[#050505] py-0 border-t border-white/5">
        
        {/* Only the Flagship Scroll exists now. The old list is deleted. */}
        <FlagshipProjects />

    </section>
  );
}