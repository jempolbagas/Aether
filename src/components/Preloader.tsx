'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Define a type for our particle properties for better type-safety
interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
    delay: number;
}

const Preloader = () => {
    // Hold particles in state. Initial render will have an empty array.
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        // This code runs only on the client, after the component has mounted.
        const particleCount = 150;
        const generatedParticles = Array.from({ length: particleCount }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 1.5 + 0.5,
            duration: Math.random() * 8 + 7,
            delay: Math.random() * 7,
        }));
        setParticles(generatedParticles);
    }, []); // The empty dependency array is crucial here.

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0, transitionEnd: { display: 'none' } }}
            transition={{ delay: 4, duration: 1 }}
            className="fixed inset-0 bg-[#0c0c0c] z-[100] flex items-center justify-center overflow-hidden"
        >
            {/* Atmospheric Particle Field - now generated client-side */}
            <div className="w-full h-full absolute inset-0 z-0">
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute bg-white/10 rounded-full"
                        style={{
                            width: `${particle.size}px`,
                            height: `${particle.size}px`,
                            left: `${particle.x}%`,
                            top: `${particle.y}%`,
                        }}
                        animate={{
                            x: [0, (Math.random() - 0.5) * 150],
                            y: [0, (Math.random() - 0.5) * 150],
                            opacity: [1, 0.5, 0],
                        }}
                        transition={{
                            duration: particle.duration,
                            delay: particle.delay,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: 'linear'
                        }}
                    />
                ))}
            </div>

            {/* Blueprint Line Animation */}
            <motion.svg
                width="600"
                height="200"
                viewBox="0 0 600 200"
                initial="hidden"
                animate="visible"
                className="z-10"
            >
                <motion.text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-6xl font-serif"
                    style={{ fontFamily: 'Playfair Display' }}
                >
                    <motion.tspan
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        stroke="#e5e5e5"
                        strokeWidth="0.5"
                        fill="transparent"
                    >
                        Ex Nihilo
                    </motion.tspan>
                    <motion.tspan
                        initial={{ fillOpacity: 0 }}
                        animate={{ fillOpacity: 1 }}
                        transition={{ delay: 2.5, duration: 1 }}
                        fill="#e5e5e5"
                    >
                        Ex Nihilo
                    </motion.tspan>
                </motion.text>
            </motion.svg>
        </motion.div>
    );
};

export default Preloader;
