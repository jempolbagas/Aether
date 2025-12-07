import 'dotenv/config';
import { firestoreAdmin } from '../src/lib/firebase-admin';

const projects = [
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

async function seedDatabase() {
  console.log('Seeding database...');
  const collectionRef = firestoreAdmin.collection('projects');
  
  const batch = firestoreAdmin.batch();

  for (const project of projects) {
    const docRef = collectionRef.doc(project.id);
    batch.set(docRef, project);
  }

  try {
    await batch.commit();
    console.log('✅ Database seeded successfully.');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}

seedDatabase().then(() => {
  process.exit(0);
});
