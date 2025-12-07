"use client";

import { motion } from "framer-motion";

export function Philosophy() {
    return (
        <section id="about" className="w-full min-h-screen flex items-center justify-center py-32 px-6 bg-background relative overflow-hidden">
            <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* The Motto */}
                <motion.div
                    className="text-muted-foreground text-sm uppercase tracking-[0.2em]"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    Motto: Ex Nihilo. (Out of nothing).
                </motion.div>

                {/* The Core Tenet - Centered and Large */}
                <div className="lg:col-span-2 text-center py-20">
                    <motion.h2
                        className="font-headline text-5xl md:text-7xl lg:text-8xl leading-tight text-foreground"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        True luxury is <span className="italic text-muted-foreground">silence</span>.
                    </motion.h2>
                </div>

                {/* The Manifesto Text */}
                <motion.div
                    className="lg:col-start-2 text-lg md:text-xl leading-relaxed text-muted-foreground"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <p className="mb-8">
                        It is the feeling of being suspended in a thunderstorm without getting wet. It is the ability to look out at a world that cannot look back at you.
                    </p>
                    <p>
                        We use heavy materials—concrete, steel, basalt—to create weightless experiences.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}