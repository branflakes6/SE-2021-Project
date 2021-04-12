import firebase from 'firebase';
import 'firebase/firestore';
const firebaseApp = firebase.initializeApp(firebase);
export default firebaseApp.firestore();
