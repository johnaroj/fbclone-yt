import firebase from 'firebase';
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCTPEkuOBfLZsJeWMgcRnfYIbBUpadagEo",
    authDomain: "facebook-2-yt-6122d.firebaseapp.com",
    projectId: "facebook-2-yt-6122d",
    storageBucket: "facebook-2-yt-6122d.appspot.com",
    messagingSenderId: "239189702066",
    appId: "1:239189702066:web:ea2fe7bbc81594a83320ab"
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig): firebase.app();
const db = app.firestore();
const storage = firebase.storage();

export {  db, storage};