export type Sector = {
    name: string;
    location: string;
    type: string;
};

export type ContactInfo = {
    header: string;
    subtext: string;
    email: string;
    sectors: Sector[];
};

export type FooterLink = {
    title: string;
    href: string;
};

export const contactInfo: ContactInfo = {
    header: "The Dialogue",
    subtext: "We do not exist in one place. We exist where the project demands. To initiate a commission is to begin the process of disappearance.",
    email: "studio@aether.arch",
    sectors: [
        {
            name: "Sector I",
            location: "Vík, Iceland",
            type: "Basalt/Oceanic",
        },
        {
            name: "Sector II",
            location: "California, USA",
            type: "Redwood/Vertical",
        },
        {
            name: "Sector III",
            location: "South Tyrol, Italy",
            type: "Alpine/Tension",
        },
    ],
};

export const footerLinks: FooterLink[] = [
    { title: "Manifesto", href: "#about" },
    { title: "Works", href: "#projects" },
    { title: "The Firm", href: "#about-founder" },
    { title: "Inquiries", href: "#contact" },
];

export const socialLinks: FooterLink[] = [
    { title: "Instagram", href: "https://instagram.com/aether" },
    { title: "LinkedIn", href: "https://linkedin.com/company/aether-arch" },
];

export const legalLinks: FooterLink[] = [
    { title: "Data Sanctity", href: "/privacy" },
    { title: "Protocols", href: "/terms" },
];
