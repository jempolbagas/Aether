export type Project = {
    id: string;
    title: string;
    location: string;
    tag: string;
    quote: string;
    concept: string;
    architecture: string;
    keyMaterial: string;
};

export const projects: Project[] = [
    {
        id: 'project-void',
        title: 'The Void',
        location: 'Vík, Iceland',
        tag: 'Basalt',
        quote: 'Stare into the abyss until it becomes a home.',
        concept: 'Commissioned by a client who wanted to disappear from the digital world, The Void is a monolithic structure built directly into the black basalt columns of the Reynisfjara shoreline.',
        architecture: 'We utilized a proprietary "Obsidian-Concrete" mix to match the exact albedo of the Icelandic volcanic rock. From the ocean, the house is invisible—a shadow within a shadow. The interior features floor-to-ceiling smart glass that withstands hurricane-force winds.',
        keyMaterial: 'Basalt & Blackened Steel',
    },
    {
        id: 'project-spire',
        title: 'The Spire',
        location: 'California, USA',
        tag: 'Verticality',
        quote: 'Elevation is the only way to see the truth.',
        concept: 'Located in a secret sector of the Redwood National and State Parks, The Spire was a challenge of verticality. The goal was to build a home that did not disturb a single root system of the ancient giants surrounding it.',
        architecture: 'The footprint of the house is a mere 20 feet in diameter, but it rises 150 feet into the canopy. It is a cylinder of reflective glass and polished aluminum. It mirrors the forest around it, becoming a ghost in the trees.',
        keyMaterial: 'Mirrored Glass & Aerospace Aluminum',
    },
    {
        id: 'project-anchor',
        title: 'The Anchor',
        location: 'South Tyrol, Italy',
        tag: 'Engineering',
        quote: 'Gravity is just a suggestion.',
        concept: 'A feat of pure engineering, The Anchor is a cantilevered residence jutting out from the Dolomites. It was designed for a retired conductor who wanted to hear the acoustics of the wind through the valley.',
        architecture: 'The structure is anchored 50 meters deep into the mountain face using bridge-building technology. The living space hangs over a 2,000-foot drop. The floor in the master bedroom features a section of structural glass.',
        keyMaterial: 'Reinforced Concrete & Tension Cables',
    },
];