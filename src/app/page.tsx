import { CornerNav } from "@/components/CornerNav";
import { Hero } from "@/components/Hero";
import { ProjectShowcase } from "@/components/ProjectShowcase";

export default function Home() {
  return (
    <main className="bg-background">
      <Hero />
      <ProjectShowcase />
      <CornerNav />
    </main>
  );
}
