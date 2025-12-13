"use client";

import { motion } from "framer-motion";
import { contactInfo } from "@/lib/contact-data";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { FormEvent, useState } from "react";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

export function Contact() {
    const { toast } = useToast();
    const [topography, setTopography] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const data = {
            ...Object.fromEntries(formData.entries()),
            topography
        };

        await new Promise(resolve => setTimeout(resolve, 1500));

        toast({
            title: "Request Received",
            description: "Your inquiry has been received. Our directors will review it shortly.",
            duration: 5000,
        });
        
        form.reset();
        setTopography("");
        setIsSubmitting(false);
    };

    return (
        <section
            id="contact"
            className="w-full min-h-screen bg-neutral-950 text-foreground py-24 px-6 md:px-12 flex flex-col justify-center overflow-hidden border-t border-neutral-900"
        >
            <div className="max-w-7xl mx-auto w-full">

                {/* Header Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="mb-16 md:mb-24"
                >
                    <h2 className="font-headline text-5xl md:text-8xl mb-6 tracking-tight uppercase">
                        {contactInfo.header}
                    </h2>
                    <p className="font-body text-lg md:text-xl text-neutral-400 max-w-2xl">
                        {contactInfo.subtext}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Left Column: Active Sectors */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="space-y-12"
                    >
                        <div className="border-t border-neutral-800 pt-8">
                            <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-8">
                                // Active Sectors
                            </h3>
                            <div className="space-y-8">
                                {contactInfo.sectors.map((sector) => (
                                    <motion.div
                                        key={sector.name}
                                        variants={fadeInUp}
                                        className="group"
                                    >
                                        <div className="flex flex-col space-y-2">
                                            <span className="font-mono text-sm text-primary uppercase">
                                                {sector.name}
                                            </span>
                                            <span className="font-headline text-2xl md:text-3xl text-neutral-200 group-hover:text-white transition-colors duration-300">
                                                {sector.location}
                                            </span>
                                            <span className="font-mono text-xs text-neutral-600 uppercase tracking-wider">
                                                [{sector.type}]
                                            </span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Inquiry Form */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="relative"
                    >
                         <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-8 border-t border-neutral-800 pt-8">
                            // Private Consultation
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="space-y-2">
                                <label htmlFor="identity" className="font-mono text-xs uppercase text-neutral-400">
                                    Identity
                                </label>
                                <Input
                                    id="identity"
                                    name="identity"
                                    placeholder="FULL NAME"
                                    className="bg-neutral-900 border-neutral-800 text-neutral-200 placeholder:text-neutral-700 focus:border-primary rounded-none h-12"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="coordinates" className="font-mono text-xs uppercase text-neutral-400">
                                    Coordinates
                                </label>
                                <Input
                                    id="coordinates"
                                    name="coordinates"
                                    placeholder="PROJECT LOCATION"
                                    className="bg-neutral-900 border-neutral-800 text-neutral-200 placeholder:text-neutral-700 focus:border-primary rounded-none h-12"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label id="topography-label" className="font-mono text-xs uppercase text-neutral-400">
                                    Topography
                                </label>
                                <Select name="topography" value={topography} onValueChange={setTopography} required>
                                    <SelectTrigger aria-labelledby="topography-label" className="bg-neutral-900 border-neutral-800 text-neutral-200 focus:ring-0 focus:border-primary rounded-none h-12">
                                        <SelectValue placeholder="SELECT TERRAIN TYPE" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-neutral-900 border-neutral-800 text-neutral-200">
                                        <SelectItem value="urban">URBAN / DENSE</SelectItem>
                                        <SelectItem value="coastal">COASTAL / OCEANIC</SelectItem>
                                        <SelectItem value="alpine">ALPINE / ELEVATED</SelectItem>
                                        <SelectItem value="arid">ARID / DESERT</SelectItem>
                                        <SelectItem value="forest">FOREST / VEGETATED</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="referral" className="font-mono text-xs uppercase text-neutral-400">
                                    Referral Code
                                </label>
                                <Input
                                    id="referral"
                                    name="referral"
                                    placeholder="COORDINATES (OPTIONAL)"
                                    className="bg-neutral-900 border-neutral-800 text-neutral-200 placeholder:text-neutral-700 focus:border-primary rounded-none h-12"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="vision" className="font-mono text-xs uppercase text-neutral-400">
                                    The Vision
                                </label>
                                <Textarea
                                    id="vision"
                                    name="vision"
                                    placeholder="DESCRIBE THE DESIRED VOID"
                                    className="bg-neutral-900 border-neutral-800 text-neutral-200 placeholder:text-neutral-700 focus:border-primary rounded-none min-h-[150px] resize-none"
                                    required
                                />
                            </div>

                            <Button
                                type="submit"
                                size="lg"
                                isLoading={isSubmitting}
                                className="w-full bg-primary text-black hover:bg-white hover:text-black rounded-none h-14 font-mono uppercase tracking-widest text-sm"
                            >
                                {isSubmitting ? "TRANSMITTING..." : "TRANSMIT"}
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
