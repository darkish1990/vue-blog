import firebase from 'firbase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCdnPxzWU-eWziVlaJtF1C1mg30ud52iRg",
    authDomain: "vue-firebase-sites-liba.firebaseapp.com",
    projectId: "vue-firebase-sites-liba",
    storageBucket: "vue-firebase-sites-liba.appspot.com",
    messagingSenderId: "197502499745",
    appId: "1:197502499745:web:b101ed4f45e3609e6fe9e0"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()

export { projectFirestore }