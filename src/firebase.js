import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCTvSytc9hK-v-9nklfWJgCwph-o6N3vtc",
    authDomain: "linkedin-clone-e0747.firebaseapp.com",
    projectId: "linkedin-clone-e0747",
    storageBucket: "linkedin-clone-e0747.appspot.com",
    messagingSenderId: "117735149473",
    appId: "1:117735149473:web:e1e826ea03c00a2f9c45e0"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};   