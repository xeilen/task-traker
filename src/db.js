import firebase from "firebase/app";
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyA3ithg-pUf4Drlz4J4iIdd-RSK7wjVo5g",
  authDomain: "task-tracker-866c1.firebaseapp.com",
  projectId: "task-tracker-866c1",
  storageBucket: "task-tracker-866c1.appspot.com",
  messagingSenderId: "1021327990269",
  appId: "1:1021327990269:web:1ae3aba06b35352d754d94"
}

const db = firebase.initializeApp(config)

export default db


