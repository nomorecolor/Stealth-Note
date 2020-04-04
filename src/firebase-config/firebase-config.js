// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyABv7iuiQFWLDVys52fl3aHMuXsRX6cc6M',
  authDomain: 'stealth-note.firebaseapp.com',
  databaseURL: 'https://stealth-note.firebaseio.com',
  projectId: 'stealth-note',
  storageBucket: 'stealth-note.appspot.com',
  messagingSenderId: '570960820201',
  appId: '1:570960820201:web:2439105a78ddf68c99bd78',
  measurementId: 'G-52PMWG6K1W'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase
