// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB-YkVSRlJ_1rlfwQ8yA7cYxa1RBC7VZmo',
  authDomain: 'folio-84465.firebaseapp.com',
  databaseURL: 'https://folio-84465-default-rtdb.firebaseio.com',
  projectId: 'folio-84465',
  storageBucket: 'folio-84465.appspot.com',
  messagingSenderId: '1043528195329',
  appId: '1:1043528195329:web:603a4d1ff0158051db8f00',
  measurementId: 'G-LLFFLXE5TZ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
