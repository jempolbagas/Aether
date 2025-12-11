export interface Project {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  location: string;
  specs: string; // Full specification string for display purposes.
  coordinates: string; // Parsed coordinates, for mapping or geolocation features.
  secondaryMetric: string; // Parsed elevation/temperature/visibility, for filtering or analytics.
  description: string;
  lore: string;
  image: string;
  client: string;
  year: string;
  materials: string[];
  gallery: string[];
  narrative?: string; // Optional project-specific narrative text
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'the-vector',
    title: 'THE VECTOR',
    subtitle: 'Atmospheric Observatory',
    location: 'Dolomites, Italy',
    specs: '[46.5° N, 11.8° E] // ELEV: 2200M',
    coordinates: '46.5° N, 11.8° E',
    secondaryMetric: 'ELEV: 2200M',
    description: 'A rejection of the ground. Cantilevered 42 meters over a sheer vertical drop, the structure is designed to generate a distinct psychological response: the thrill of suspension.',
    lore: 'Gravity is a suggestion.',
    image: '/the-vector.webp',
    client: 'The Alpentor Trust',
    year: '2024',
    materials: ['Reinforced Concrete', 'Oxidized Steel', 'Smart Glass'],
    gallery: [
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?q=80&w=2670&auto=format&fit=crop', // Foggy mountains (replacement)
      'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=2574&auto=format&fit=crop', // Abstract mist
      'https://images.unsplash.com/photo-1444090542259-0af8fa96557e?q=80&w=2670&auto=format&fit=crop', // Dark texture
      'https://images.unsplash.com/photo-1490682143684-14369e18dce8?q=80&w=2670&auto=format&fit=crop', // Minimalist rock
    ]
  },
  {
    id: 2,
    slug: 'the-origin',
    title: 'THE ORIGIN',
    subtitle: 'Subtractive Geothermal Spa',
    location: 'Reykjanes, Iceland',
    specs: '[63.8° N, 22.4° W] // TEMP: 38°C',
    coordinates: '63.8° N, 22.4° W',
    secondaryMetric: '38°C',
    description: 'Architecture is usually an act of addition. The Origin is an act of subtraction. Located inside a dormant volcanic lava tube, we simply carved the void.',
    lore: 'Civilization is noise.',
    image: '/the-origin.webp',
    client: 'Reykjavik Energy Sovereignty',
    year: '2023',
    materials: ['Basalt', 'Raw Concrete', 'Geothermal Vapor'],
    gallery: [
      'https://images.unsplash.com/photo-1507643179173-617d654551a3?q=80&w=2669&auto=format&fit=crop', // Black sand/rock
      'https://images.unsplash.com/photo-1516653980844-c6820de1412d?q=80&w=2574&auto=format&fit=crop', // Steam/Ice
      'https://images.unsplash.com/photo-1596726884638-348df8f4410a?q=80&w=2574&auto=format&fit=crop', // Texture
      'https://images.unsplash.com/photo-1480600378036-231cb027f677?q=80&w=2670&auto=format&fit=crop', // Dark water
    ]
  },
  {
    id: 3,
    slug: 'the-monolith',
    title: 'THE MONOLITH',
    subtitle: 'Data Sanctuary',
    location: 'Svalbard, Norway',
    specs: '[78.2° N, 15.6° E] // TEMP: -12°C',
    coordinates: '78.2° N, 15.6° E',
    secondaryMetric: '-12°C',
    description: 'A tomb for information. A black triangle on a white horizon designed to outlast the civilization that built it. It creates no heat; it reflects no light.',
    lore: 'A fortress for legacy.',
    image: '/the-monolith.webp',
    client: 'Global Heritage Archive',
    year: '2025',
    materials: ['Black Granite', 'Permafrost', 'Aerogel'],
    gallery: [
      'https://images.unsplash.com/photo-1534032488662-38f32e4d9b9a?q=80&w=2574&auto=format&fit=crop', // White/minimal
      'https://images.unsplash.com/photo-1505307520760-4c3e34b9d5c4?q=80&w=2574&auto=format&fit=crop', // Concrete texture
      'https://images.unsplash.com/photo-1436158482163-5491eb4d35eb?q=80&w=2670&auto=format&fit=crop', // Geometric
      'https://images.unsplash.com/photo-1550625624-b15236ce1576?q=80&w=2670&auto=format&fit=crop', // Ice
    ]
  },
  {
    id: 4,
    slug: 'the-veil',
    title: 'THE VEIL',
    subtitle: 'Urban Fortress',
    location: 'Tokyo, Japan',
    specs: '[35.6° N, 139.7° E] // VISIBILITY: 0%',
    coordinates: '35.6° N, 139.7° E',
    secondaryMetric: 'VISIBILITY: 0%',
    description: 'Tokyo is a city of observation. The Veil is a machine for privacy. An inverted panopticon where the resident sees everything, but the city sees nothing.',
    lore: 'True power is invisibility.',
    image: '/the-veil.webp',
    client: 'Kurokawa Family Office',
    year: '2022',
    materials: ['Titanium Mesh', 'Shadow Glass', 'Polished Concrete'],
    gallery: [
      'https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=2670&auto=format&fit=crop', // Tokyo lights
      'https://images.unsplash.com/photo-1506544070267-b50a41dae6c6?q=80&w=2670&auto=format&fit=crop', // Abstract architecture
      'https://images.unsplash.com/photo-1485627941502-d2e6429fa8af?q=80&w=2672&auto=format&fit=crop', // Concrete/Urban
      'https://images.unsplash.com/photo-1493016467268-bd4a3c10a428?q=80&w=2670&auto=format&fit=crop', // Metal/Glass
    ]
  },
];
