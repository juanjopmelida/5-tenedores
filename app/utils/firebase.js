import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCXWloa6-bcUappU_v2qDeAgLRt7zz0ZyM",
  authDomain: "tenedores-c362c.firebaseapp.com",
  databaseURL: "https://tenedores-c362c.firebaseio.com",
  projectId: "tenedores-c362c",
  storageBucket: "tenedores-c362c.appspot.com",
  messagingSenderId: "724779101518",
  appId: "1:724779101518:web:4a7dee1b47fb5d7f65c21f",
};
// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
