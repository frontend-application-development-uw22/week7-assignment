import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const app = initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: "portfolio-contact-form-87424.appspot.com",
  messagingSenderId: "337587494874",
  appId: "1:337587494874:web:145e2dbe7b19b4f024aae3",
  experimentalForceLongPolling: true, 
  useFetchStreams: false, 
});

const db = getFirestore(app);

export default db;