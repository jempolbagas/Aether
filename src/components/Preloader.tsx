'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Preloader = () => {
    const [particleCount] = useState(50); // Number of particles

    // Generate random properties for each particle
    const particles = Array.from({ length: particleCount }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 5 + 5, // Slower drift
        delay: Math.random() * 5,
    }));

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0, transitionEnd: { display: 'none' } }}
            transition={{ delay: 3, duration: 1 }} // Fade out after 3 seconds
            className="fixed inset-0 bg-[#0c0c0c] z-[100] flex items-center justify-center overflow-hidden"
        >
            <div className="w-full h-full absolute">
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute bg-white/20 rounded-full"
                        style={{
                            width: `${particle.size}px`,
                            height: `${particle.size}px`,
                            left: `${particle.x}%`,
                            top: `${particle.y}%`,
                        }}
                        animate={{
                            x: [0, (Math.random() - 0.5) * 200], // Drift horizontally
                            y: [0, (Math.random() - 0.5) * 200], // Drift vertically
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
            <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-white/50 text-lg font-light tracking-widest"
            >
                AETHER
            </motion.p>
        </motion.div>
    );
};

export default Preloader;
