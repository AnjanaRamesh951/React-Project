import firebase from 'firebase';
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDqvQyJp1XqdSkFiBLcScVi3CvUgPIWLMI",
    authDomain: "instagram-react-demo-29105.firebaseapp.com",
    projectId: "instagram-react-demo-29105",
    storageBucket: "instagram-react-demo-29105.appspot.com",
    messagingSenderId: "52470241277",
    appId: "1:52470241277:web:1cbc7776cc8b451ca6ab94",
    measurementId: "G-ENK7FD1S2L"
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export { db, auth, storage };

 // export default db;