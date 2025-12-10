"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    },
};

// Opacity-only variants to avoid conflicting with parallax `y` on the quote
const fadeVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" }
    },
};

export function About() {
    const aboutImage = PlaceHolderImages.find(img => img.id === "hero-bg");

    // Parallax for the founder quote
    const quoteRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress: quoteProgress } = useScroll({
        target: quoteRef,
        offset: ["start end", "end start"],
    });
    // Subtle, slower-than-scroll translation
    const quoteY = useTransform(quoteProgress, [0, 1], [-20, 20]);

    return (
        <section id="about-founder" className="w-full bg-background py-32 px-6 md:px-12 text-foreground overflow-hidden">
            <div className="max-w-6xl mx-auto space-y-32">

                {/* Section 1: The Hook */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={textVariants}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch"
                >
                    <div className="relative border-l-2 border-primary/50 pl-8 md:pl-16 flex flex-col justify-between">
                        <h2 className="font-headline text-5xl md:text-7xl mb-8">The Art of Disappearing.</h2>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                            We do not build houses. We do not build buildings. We manipulate the landscape to create voids where humanity can confront the sublime.
                        </p>
                    </div>

                    {aboutImage && (
                        <div className="relative w-full aspect-[4/5] md:aspect-[5/6] overflow-hidden">
                            <Image
                                src={aboutImage.imageUrl}
                                alt={aboutImage.description}
                                fill
                                sizes="(min-width: 768px) 50vw, 100vw"
                                className="object-cover grayscale contrast-125"
                                data-ai-hint={aboutImage.imageHint}
                                priority={false}
                            />
                            <div className="absolute inset-0 bg-black/25"></div>
                        </div>
                    )}
                </motion.div>

                {/* Section 2: The Founder Quote (Julian Vance) */}
                <motion.div
                    ref={quoteRef}
                    style={{ y: quoteY }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeVariants}
                    className="text-center"
                >
                    <figure>
                        <blockquote className="font-headline text-4xl md:text-6xl italic text-muted-foreground mb-6">
                            "True luxury is silence. It is the feeling of being suspended in a thunderstorm without getting wet."
                        </blockquote>
                        <figcaption className="not-italic text-sm uppercase tracking-widest text-primary">
                            — Julian Vance, Principal
                        </figcaption>
                    </figure>
                    {/* Horizontal separator line between quote and body text below */}
                    <div className="w-full h-[1px] bg-white/20 mt-16"></div>
                </motion.div>

                {/* Section 3: The Operational Model */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={textVariants}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
                >
                    <div>
                        <h3 className="font-headline text-3xl mb-4">Ex Nihilo</h3>
                        <p className="text-muted-foreground">
                            Founded in 2014, Aether operates without a headquarters. We are decentralized by design. We do not meet in boardrooms; we meet at the site of your future project.
                        </p>
                    </div>
                    <div>
                        <p className="text-muted-foreground">
                            We use heavy materials—concrete, steel, basalt—to create weightless experiences. We anchor into mountain faces and bury into shorelines not to conquer the landscape, but to become a ghost within it.
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}