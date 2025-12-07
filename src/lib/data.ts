export type Project = {
  id: string;
  title: string;
  location: string;
  tag: string;
};

export const projects: Project[] = [
  {
    id: 'project-void',
    title: 'The Void',
    location: 'Vík, Iceland',
    tag: 'Basalt',
  },
  {
    id: 'project-spire',
    title: 'The Spire',
    location: 'California, USA',
    tag: 'Verticality',
  },
  {
    id: 'project-anchor',
    title: 'The Anchor',
    location: 'South Tyrol, Italy',
    tag: 'Engineering',
  },
];
