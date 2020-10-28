import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCXLPhDWQ9NweSo1HWnsp4Ydb0UWXojiHs",
  authDomain: "chat-e8522.firebaseapp.com",
  databaseURL: "https://chat-e8522.firebaseio.com",
  projectId: "chat-e8522",
  storageBucket: "chat-e8522.appspot.com",
  messagingSenderId: "892961848101",
  appId: "1:892961848101:web:f4efdc070e2291bbf578cc",
  measurementId: "G-CTHSRQ94WL"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider(); 

  export { auth, provider };
  export default db;