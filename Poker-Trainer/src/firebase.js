import firebase from "firebase";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "process.env.VUE_FIREBASE_API_KEY",
    authDomain: "poker-trainer-d2a00.firebaseapp.com",
    projectId: "poker-trainer-d2a00",
    storageBucket: "poker-trainer-d2a00.appspot.com",
    messagingSenderId: "process.env.VUE_FIREBASE_MESSAGEID",
    appId: "VUE_FIREBASE_APPID"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()