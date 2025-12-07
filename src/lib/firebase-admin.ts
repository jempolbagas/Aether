import admin from 'firebase-admin';

if (!admin.apps.length) {
  try {
    const serviceAccountBase64 = process.env.FIREBASE_SERVICE_ACCOUNT_BASE64;
    if (!serviceAccountBase64) {
      throw new Error('Firebase service account is not set in environment variables. Please base64 encode your service account JSON and set it as FIREBASE_SERVICE_ACCOUNT_BASE64.');
    }
    const serviceAccount = JSON.parse(Buffer.from(serviceAccountBase64, 'base64').toString('utf-8'));
    
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    });
  } catch (error: any) {
    console.error('Firebase admin initialization error:', error.message);
  }
}

let firestoreAdminInstance: admin.firestore.Firestore;

try {
  firestoreAdminInstance = admin.firestore();
} catch (error: any) {
    console.error('Could not get Firestore instance:', error.message);
    // @ts-ignore
    firestoreAdminInstance = undefined;
}

export const firestoreAdmin = firestoreAdminInstance;
