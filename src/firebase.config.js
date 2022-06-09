import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyADVS-X3MjR5LqIQifK3eUS3j9SFr3LJXg',
  authDomain: 'house-market-place-a5a38.firebaseapp.com',
  projectId: 'house-market-place-a5a38',
  storageBucket: 'house-market-place-a5a38.appspot.com',
  messagingSenderId: '78940523230',
  appId: '1:78940523230:web:e46b468c41c76880bf904f',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
