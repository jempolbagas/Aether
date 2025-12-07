import { projects } from "@/lib/data";
import { ProjectItem } from "./ProjectItem";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function ProjectShowcase() {
  const images = Object.fromEntries(PlaceHolderImages.map(img => [img.id, img]));

  return (
    <section id="projects" className="w-full bg-background py-20">
      <div className="container mx-auto px-4">
        {projects.map((project, index) => {
          const image = images[project.id];
          if (!image) return null;
          return (
            <ProjectItem key={project.id} project={project} image={image} index={index} />
          );
        })}
      </div>
    </section>
  );
}
