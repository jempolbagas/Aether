import 'server-only';
import { firestoreAdmin } from './firebase-admin';
import { z } from 'zod';

const ProjectSchema = z.object({
  id: z.string(),
  title: z.string(),
  location: z.string(),
  tag: z.string(),
});

export type Project = z.infer<typeof ProjectSchema>;

export async function getProjects(): Promise<Project[]> {
  try {
    if (!firestoreAdmin) {
      throw new Error("Firestore Admin not initialized. Check your environment variables and Firebase setup.");
    }
    const projectsSnapshot = await firestoreAdmin.collection('projects').get();
    if (projectsSnapshot.empty) {
      console.warn('No projects found in Firestore. Run `npm run seed` to populate data.');
      return [];
    }
    const projects = projectsSnapshot.docs.map(doc => ProjectSchema.parse({ ...doc.data(), id: doc.id }));
    return projects;
  } catch (error) {
    console.error('Error fetching projects from Firestore:', error);
    return [];
  }
}
