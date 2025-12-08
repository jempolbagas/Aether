import { CornerNav } from "@/components/CornerNav";
import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/Philosophy";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { About } from "@/components/About";

export default function Home() {
    return (
        <main className="bg-background">
            <Hero />
            <Philosophy />
            <ProjectShowcase />
            <About />
            <CornerNav />
        </main>
    );
}