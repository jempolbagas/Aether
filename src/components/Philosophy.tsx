"use client";

import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.2, ease: "easeOut" },
    },
};

export function Philosophy() {
    return (
        <section id="about" className="w-full min-h-screen flex items-center justify-center py-32 px-6 bg-background relative overflow-hidden">
            <motion.div
                className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >

                {/* The Motto */}
                <motion.div
                    className="text-muted-foreground text-sm uppercase tracking-[0.2em]"
                    variants={itemVariants}
                >
                    Motto: Ex Nihilo. (Out of nothing).
                </motion.div>

                {/* The Core Tenet - Centered and Large */}
                <div className="lg:col-span-2 text-center py-20">
                    <motion.h2
                        className="font-headline text-5xl md:text-7xl lg:text-8xl leading-tight text-foreground"
                        variants={itemVariants}
                    >
                        True luxury is <span className="italic text-muted-foreground">silence</span>.
                    </motion.h2>
                </div>

                {/* The Manifesto Text */}
                <motion.div
                    className="lg:col-start-2 text-lg md:text-xl leading-relaxed text-muted-foreground"
                    variants={itemVariants}
                >
                    <p className="mb-8">
                        It is the feeling of being suspended in a thunderstorm without getting wet. It is the ability to look out at a world that cannot look back at you.
                    </p>
                    <p>
                        We use heavy materials—concrete, steel, basalt—to create weightless experiences.
                    </p>
                </motion.div>

            </motion.div>
        </section>
    );
}