import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB_gHcC66mhHi4zvZtrffquzn8czNXSCS8",
    authDomain: "medsearch-63541.firebaseapp.com",
    databaseURL: "https://medsearch-63541-default-rtdb.firebaseio.com",
    projectId: "medsearch-63541",
    storageBucket: "medsearch-63541.appspot.com",
    messagingSenderId: "277614416925",
    appId: "1:277614416925:web:f42ed4b056ecbee15da2f4"
}

let app = null

if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig)
//   console.log(app);
} 

export default firebase
