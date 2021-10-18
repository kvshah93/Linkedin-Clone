import firebase from 'firebase'; 

const firebaseConfig = {
    apiKey: "AIzaSyBTwNBBKQjP3k8pQVk4gDrD9sv8SLSCSQw",
    authDomain: "linkedin-clone-yt-2d066.firebaseapp.com",
    projectId: "linkedin-clone-yt-2d066",
    storageBucket: "linkedin-clone-yt-2d066.appspot.com",
    messagingSenderId: "647674706815",
    appId: "1:647674706815:web:86f6876411cbdeb8f3f84a"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebaseApp.auth();

export { db, auth };