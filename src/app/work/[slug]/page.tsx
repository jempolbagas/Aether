import { projects } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Aether`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-24 pb-20 md:pt-32">
        {/* Navigation Back */}
        <div className="fixed top-24 left-8 z-40 hidden md:block">
            <Link href="/#projects" className="text-xs font-mono uppercase tracking-widest text-white/50 hover:text-white transition-colors">
                ← Return to Archive
            </Link>
        </div>

        {/* Hero Section */}
        <section className="px-6 md:px-20 lg:px-40 mb-20 md:mb-32">
            <div className="border-l border-white/20 pl-6 md:pl-12 py-4">
                <span className="block font-mono text-xs text-white/50 tracking-[0.2em] mb-4">
                    PROJECT 0{project.id} // {project.location.toUpperCase()}
                </span>
                <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl uppercase leading-[0.85] tracking-tighter mb-8">
                    {project.title}
                </h1>
                <p className="font-mono text-sm md:text-base max-w-2xl text-white/80 leading-relaxed">
                    {project.description}
                </p>
            </div>
        </section>

        {/* Technical Specs Grid */}
        <section className="px-6 md:px-20 lg:px-40 mb-32">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 border-y border-white/10 py-12">

                {/* Client */}
                <div className="space-y-2">
                    <h3 className="font-mono text-xs text-white/40 uppercase tracking-widest">Client</h3>
                    <p className="font-body text-sm text-white/90">{project.client}</p>
                </div>

                {/* Year */}
                <div className="space-y-2">
                    <h3 className="font-mono text-xs text-white/40 uppercase tracking-widest">Year</h3>
                    <p className="font-body text-sm text-white/90">{project.year}</p>
                </div>

                {/* Location/Coords */}
                <div className="space-y-2">
                    <h3 className="font-mono text-xs text-white/40 uppercase tracking-widest">Coordinates</h3>
                    <p className="font-body text-sm text-white/90">{project.coordinates}</p>
                </div>

                 {/* Materials */}
                 <div className="space-y-2">
                    <h3 className="font-mono text-xs text-white/40 uppercase tracking-widest">Materiality</h3>
                    <ul className="font-body text-sm text-white/90 space-y-1">
                        {project.materials.map((mat, i) => (
                            <li key={i}>{mat}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>

        {/* Main Image */}
        <section className="w-full h-[60vh] md:h-[80vh] relative mb-32 grayscale hover:grayscale-0 transition-all duration-1000">
             <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
            />
             <div className="absolute inset-0 bg-black/20" />
        </section>

        {/* Narrative & Lore */}
        <section className="px-6 md:px-20 lg:px-40 mb-32 grid grid-cols-1 md:grid-cols-12 gap-12">
             <div className="md:col-span-4">
                 <h2 className="font-headline text-4xl md:text-5xl uppercase tracking-tight text-white/90">
                     Philosophy
                 </h2>
             </div>
             <div className="md:col-span-8 space-y-8">
                 <p className="font-headline text-2xl md:text-3xl leading-tight text-white/80 italic">
                     "{project.lore}"
                 </p>
                 <div className="h-[1px] w-20 bg-white/20" />
                 <p className="font-body text-sm md:text-base leading-relaxed text-white/60 max-w-prose">
                     The structure exists not to accommodate, but to challenge. Every angle is a decision, every void a statement.
                     In {project.location}, we found a silence that demanded form. This project is our answer to that silence—a
                     sovereign entity of {project.materials.join(', ').toLowerCase()} standing against time.
                 </p>
             </div>
        </section>

        {/* Masonry Gallery */}
        <section className="px-4 md:px-20 lg:px-40 pb-40">
            <h2 className="font-mono text-xs text-white/40 uppercase tracking-widest mb-12 text-center md:text-left">
                Visual Archives
            </h2>
            <div className="columns-1 md:columns-2 gap-4 md:gap-8 space-y-4 md:space-y-8">
                {project.gallery.map((img, index) => (
                    <div key={index} className="relative w-full overflow-hidden break-inside-avoid bg-[#111]">
                        <Image
                            src={img}
                            alt={`Gallery image ${index + 1} for ${project.title}`}
                            width={800}
                            height={1200}
                            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0 opacity-80 hover:opacity-100"
                        />
                    </div>
                ))}
            </div>
        </section>
    </main>
  );
}
