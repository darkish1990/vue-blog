import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCdnPxzWU-eWziVlaJtF1C1mg30ud52iRg",
    authDomain: "vue-firebase-sites-liba.firebaseapp.com",
    projectId: "vue-firebase-sites-liba",
    storageBucket: "vue-firebase-sites-liba.appspot.com",
    messagingSenderId: "197502499745",
    appId: "1:197502499745:web:b101ed4f45e3609e6fe9e0"
};

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()

// init firestore service
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

// export firestore
export { projectFirestore, timestamp, projectAuth }
