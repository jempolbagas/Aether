"use client";

import { footerLinks, socialLinks, legalLinks } from "@/lib/contact-data";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";

export function Footer() {
    return (
        <footer className="w-full bg-foreground text-background py-16 md:py-24 px-6 md:px-12 overflow-hidden">
            <div className="max-w-[1920px] mx-auto flex flex-col h-full">

                {/* Top Row: Massive Logo */}
                <div className="mb-8 md:mb-12">
                    <h1 className="font-headline text-[12vw] leading-[0.8] tracking-tighter uppercase text-center md:text-left">
                        Aether
                    </h1>
                </div>

                <Separator className="bg-background/20 mb-12" />

                {/* Middle Row: Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 md:mb-24">

                    {/* Navigation */}
                    <div className="space-y-6">
                        <h4 className="font-mono text-xs uppercase tracking-widest text-background/50">
                            // Navigation
                        </h4>
                        <ul className="space-y-4">
                            {footerLinks.map((link) => (
                                <li key={link.title}>
                                    <a
                                        href={link.href}
                                        className="font-headline text-2xl hover:text-background/60 transition-colors duration-300"
                                    >
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Socials */}
                    <div className="space-y-6">
                        <h4 className="font-mono text-xs uppercase tracking-widest text-background/50">
                            // Socials
                        </h4>
                        <ul className="space-y-4">
                            {socialLinks.map((link) => (
                                <li key={link.title}>
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-mono text-sm uppercase tracking-wider hover:text-background/60 transition-colors duration-300"
                                    >
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="space-y-6">
                        <h4 className="font-mono text-xs uppercase tracking-widest text-background/50">
                            // Legal
                        </h4>
                        <ul className="space-y-4">
                            {legalLinks.map((link) => (
                                <li key={link.title}>
                                    <a
                                        href={link.href}
                                        className="font-mono text-sm uppercase tracking-wider hover:text-background/60 transition-colors duration-300"
                                    >
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-6">
                        <h4 className="font-mono text-xs uppercase tracking-widest text-background/50">
                            // Newsletter
                        </h4>
                        <form
                            className="space-y-4"
                            onSubmit={(e) => {
                                e.preventDefault();
                                // handle newsletter signup
                            }}
                        >
                            <Input
                                type="email"
                                name="email"
                                placeholder="ENTER FREQUENCY..."
                                className="bg-transparent border-b border-background/20 border-t-0 border-x-0 rounded-none px-0 py-2 placeholder:text-background/40 text-background focus-visible:ring-0 focus-visible:border-background"
                            />
                        </form>
                    </div>
                </div>

                <Separator className="bg-background/20 mb-8" />

                {/* Bottom Row: Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                    <p className="font-mono text-xs uppercase tracking-widest text-background/60">
                        Ex Nihilo. 2014 – Present.
                    </p>
                    <p className="font-mono text-xs uppercase tracking-widest text-background/40">
                        Aether Architecture Group
                    </p>
                </div>
            </div>
        </footer>
    );
}
