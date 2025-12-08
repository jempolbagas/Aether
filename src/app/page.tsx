import { CornerNav } from "@/components/CornerNav";
import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/Philosophy";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";

export default function Home() {
    return (
        <main className="bg-background">
            <Hero />
            <Philosophy />
            <ProjectShowcase />
            <About />
            <Footer />
            <CornerNav />
        </main>
    );
}