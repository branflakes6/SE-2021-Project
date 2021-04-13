import firebase from "firebase";
import 'firebase/firestore';
import "firebase/auth";


const firebaseConfig = {
    //apiKey: process.env.VUE_FIREBASE_API_KEY,
    apiKey: "AIzaSyAfhrnhESJEvgVtDj1WwjKKP1Fh2wspqLM",
    authDomain: "poker-trainer-d2a00.firebaseapp.com",
    projectId: "poker-trainer-d2a00",
    storageBucket: "poker-trainer-d2a00.appspot.com",
    //messagingSenderId: process.env.VUE_FIREBASE_MESSAGEID,
    messagingSenderId: "604223404719",
    //appId: process.env.VUE_FIREBASE_APPID
    appId : "1:604223404719:web:a18a4714b452854b23725a"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp