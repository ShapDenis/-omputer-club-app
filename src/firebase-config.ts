import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyD3nMneEf3ifla0ZOR_e_mQBX53EJjX7Og',
  authDomain: 'computer-club-app-37270.firebaseapp.com',
  projectId: 'computer-club-app-37270',
  storageBucket: 'computer-club-app-37270.appspot.com',
  messagingSenderId: '819964124501',
  appId: '1:819964124501:web:dc576c0b88fe1f766b63dc',
  measurementId: 'G-DZ7MMV5F29'
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
