import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCAPbt0sVnCQTxhsYrKR0Q6fW62lMi1ALI",
    authDomain: "imessage-clone-92ca2.firebaseapp.com",
    databaseURL: "https://imessage-clone-92ca2.firebaseio.com",
    projectId: "imessage-clone-92ca2",
    storageBucket: "imessage-clone-92ca2.appspot.com",
    messagingSenderId: "286126308861",
    appId: "1:286126308861:web:eeffc2caf3817ecf962d94",
    measurementId: "G-GGPRT83D5N"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider(); 

  export { auth, provider };
  export default db;