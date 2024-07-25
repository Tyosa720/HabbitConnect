import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBelRl05LL1yCr1TnSUw7dWvVoplyrzkzQ",
  authDomain: "habitconnect-f721c.firebaseapp.com",
  databaseURL: 'https://habitconnect-f721c-default-rtdb.firebaseio.com',
  projectId: "habitconnect-f721c",
  storageBucket: "habitconnect-f721c.appspot.com",
  messagingSenderId: "663892545501",
  appId: "1:663892545501:ios:be54e250618624ea4cf034"
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
