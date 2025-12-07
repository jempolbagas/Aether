"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { adjustParallax } from "@/ai/flows/adaptive-parallax";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useToast } from "@/hooks/use-toast";

const heroImage = PlaceHolderImages.find(img => img.id === 'hero-bg');

const BASE_PARALLAX_AMOUNT = 30; // Base effect in %

export function Hero() {
  const [adjustedParallax, setAdjustedParallax] = useState(BASE_PARALLAX_AMOUNT);
  const { toast } = useToast();
  
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${adjustedParallax}%`]);

  useEffect(() => {
    const handleResize = async () => {
      try {
        const screenSize = Math.max(window.innerWidth, window.innerHeight);
        const result = await adjustParallax({
          screenSize,
          baseParallaxAmount: BASE_PARALLAX_AMOUNT,
        });
        console.log(`AI Parallax adjustment: ${result.reasoning}`);
        setAdjustedParallax(result.adjustedParallaxAmount);
      } catch (error) {
        console.error("AI Parallax adjustment failed:", error);
        toast({
          variant: "destructive",
          title: "AI Feature Error",
          description: "Could not adjust parallax effect.",
        });
      }
    };

    handleResize(); // Initial call
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [toast]);

  if (!heroImage) return null;

  return (
    <section ref={targetRef} className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <motion.h1 
          className="font-headline text-[10rem] md:text-[18rem] lg:text-[24rem] text-foreground mix-blend-difference pointer-events-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          AETHER
        </motion.h1>
      </div>

      <motion.div style={{ y }} className="absolute inset-0 z-0 h-[130%] -top-[15%]">
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </motion.div>
    </section>
  );
}
