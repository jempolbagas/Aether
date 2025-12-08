"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function Contact() {
  const [formState, setFormState] = useState({
    identity: "",
    frequency: "",
    coordinates: "",
    vision: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate network delay
    setTimeout(() => {
      console.log("Transmission Data:", formState);
      setStatus("success");
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <section className="w-full bg-background text-foreground py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        variants={stagger}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={fadeInUp} className="mb-20">
          <h2 className="font-headline text-6xl md:text-8xl lg:text-9xl mb-6 tracking-tight">
            INITIATE
          </h2>
          <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-2xl">
            We do not meet in boardrooms. We meet at the edge of the world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          {/* Direct Transmission Details */}
          <motion.div variants={fadeInUp} className="space-y-12">
            <h3 className="text-sm tracking-widest uppercase border-b border-border pb-4 mb-8">
              Direct Transmission
            </h3>

            <div className="space-y-2">
              <span className="block text-xs uppercase tracking-widest text-muted-foreground">
                Email
              </span>
              <p className="text-xl md:text-2xl font-light">concierge@aether.arch</p>
              <p className="text-sm text-muted-foreground italic">
                Please allow 48 hours for a secure response
              </p>
            </div>

            <div className="space-y-2">
              <span className="block text-xs uppercase tracking-widest text-muted-foreground">
                Secure Line
              </span>
              <p className="text-xl md:text-2xl font-light">+1 (415) 000-VOID</p>
              <p className="text-sm text-muted-foreground italic">
                24/7 Global Concierge
              </p>
            </div>

            <div className="space-y-2">
              <span className="block text-xs uppercase tracking-widest text-muted-foreground">
                Hubs
              </span>
              <ul className="text-xl md:text-2xl font-light space-y-1">
                <li>Vík, Iceland</li>
                <li>Redwood, CA</li>
                <li>South Tyrol, Italy</li>
              </ul>
            </div>
          </motion.div>

          {/* Entry Form */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-sm tracking-widest uppercase border-b border-border pb-4 mb-8">
              Entry Form
            </h3>

            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-full flex flex-col justify-center items-center text-center space-y-4 py-20 border border-border/50"
              >
                <span className="text-4xl">❖</span>
                <h4 className="font-headline text-3xl">Transmission Sent</h4>
                <p className="text-muted-foreground">
                  Your coordinates have been received. We will initiate contact shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="group">
                  <label
                    htmlFor="identity"
                    className="block text-xs uppercase tracking-widest text-muted-foreground mb-2 group-focus-within:text-foreground transition-colors"
                  >
                    Identity
                  </label>
                  <input
                    type="text"
                    id="identity"
                    name="identity"
                    required
                    value={formState.identity}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-foreground transition-colors font-light text-lg rounded-none"
                    placeholder="FULL NAME"
                  />
                </div>

                <div className="group">
                  <label
                    htmlFor="frequency"
                    className="block text-xs uppercase tracking-widest text-muted-foreground mb-2 group-focus-within:text-foreground transition-colors"
                  >
                    Frequency
                  </label>
                  <input
                    type="text"
                    id="frequency"
                    name="frequency"
                    required
                    value={formState.frequency}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-foreground transition-colors font-light text-lg rounded-none"
                    placeholder="EMAIL OR PHONE"
                  />
                </div>

                <div className="group">
                  <label
                    htmlFor="coordinates"
                    className="block text-xs uppercase tracking-widest text-muted-foreground mb-2 group-focus-within:text-foreground transition-colors"
                  >
                    Coordinates
                  </label>
                  <input
                    type="text"
                    id="coordinates"
                    name="coordinates"
                    value={formState.coordinates}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-foreground transition-colors font-light text-lg rounded-none"
                    placeholder="PROJECT LOCATION"
                  />
                </div>

                <div className="group">
                  <label
                    htmlFor="vision"
                    className="block text-xs uppercase tracking-widest text-muted-foreground mb-2 group-focus-within:text-foreground transition-colors"
                  >
                    Vision
                  </label>
                  <textarea
                    id="vision"
                    name="vision"
                    rows={3}
                    required
                    value={formState.vision}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-foreground transition-colors font-light text-lg resize-none rounded-none"
                    placeholder="BRIEF MESSAGE"
                  />
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="relative overflow-hidden group w-full md:w-auto px-8 py-4 bg-transparent border border-foreground text-foreground uppercase tracking-[0.2em] text-sm hover:bg-foreground hover:text-background transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? "Transmitting..." : "Transmit"}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
