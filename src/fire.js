import firebase from 'firebase/compat/app';
import auth from 'firebase/compat/auth';
const firebaseConfig = {
    apiKey: "AIzaSyAOo_Vg0kjkFILCSBZVd3Fs5SAhwK001og",
    authDomain: "journal-44c04.firebaseapp.com",
    projectId: "journal-44c04",
    storageBucket: "journal-44c04.appspot.com",
    messagingSenderId: "1027854869468",
    appId: "1:1027854869468:web:bb702fe8f4d6ac590d2519"
  };
  
const fire = firebase.initializeApp(firebaseConfig);

export default fire;