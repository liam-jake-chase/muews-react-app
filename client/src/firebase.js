import firebase from 'firebase/app';
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey:"AIzaSyDv_F9CvB97KK1ZXRn5rNsvngJxu9gjXdk",
    authDomain: "muews-ed035.firebaseapp.com",
    databaseURL: "https://muews-ed035.firebaseio.com",
    projectId: "muews-ed035",
    storageBucket: "muews-ed035.appspot.com",
    messagingSenderId: "142418129281",
    appId: "1:142418129281:web:5cc45c8a9bfc869fe7b880"
  });


  export const auth = app.auth()
  export default app