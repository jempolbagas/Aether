import { getProjects } from "@/lib/firestore";
import { ProjectItem } from "./ProjectItem";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export async function ProjectShowcase() {
  const projects = await getProjects();
  const images = Object.fromEntries(PlaceHolderImages.map(img => [img.id, img]));

  if (!projects || projects.length === 0) {
    return (
      <section id="projects" className="min-h-[50vh] w-full flex items-center justify-center bg-background">
        <div className="text-center p-4">
          <h2 className="text-2xl font-headline text-muted-foreground">No projects found.</h2>
          <p className="text-muted-foreground mt-2">Run 'npm run seed' to populate the database.</p>
        </div>
      </section>
    );
  }

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
