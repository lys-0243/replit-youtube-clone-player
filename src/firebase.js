import firebase from "firebase/compat/app";

import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_RI6FVfBBLOsgwbkvfQ__KIrrBBcMfw4",
    authDomain: "freetube-clone22.firebaseapp.com",
    projectId: "freetube-clone22",
    storageBucket: "freetube-clone22.appspot.com",
    messagingSenderId: "728482857477",
    appId: "1:728482857477:web:485a561ba0f526adf9926c"
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
