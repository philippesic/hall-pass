// Import the functions you need from the SDKs you need
import { initializeApp } from "../node_modules/@firebase/app/dist/app-public.d.ts";
import { getAnalytics } from "../node_modules/@firebase/analytics/dist/analytics-public.d.ts";
import {
  getDatabase,
  ref,
  set,
} from "../node_modules/@firebase/database/dist/internal.d.ts";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnmmyfhj9BDQx_QZRQKICCjsLhv6L3fBA",
  authDomain: "hall-pass-396016.firebaseapp.com",
  projectId: "hall-pass-396016",
  storageBucket: "hall-pass-396016.appspot.com",
  messagingSenderId: "408163764629",
  appId: "1:408163764629:web:9f6415797f1d39f000ce9c",
  measurementId: "G-T3Y4P8HKSK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export function writeUserData(name, A1, A2, A3, A4, B1, B2, B3, B4) {
  const db = getDatabase();
  set(ref(db, "users/" + userId), {
    Name: name,
    a1: A1,
    a2: A2,
    a3: A3,
    a4: A4,
    b1: B1,
    b2: B2,
    b3: B3,
    b4: B4,
  });
}

export function readUserData(name, A1, A2, A3, A4, B1, B2, B3, B4) {
  const userId = firebase.auth().currentUser.uid;
  const userRef = database.ref("Users/" + userId);

  userRef.on("value", (snapshot) => {
    const userData = snapshot.val();
    if (userData) {
      name = userData.Name;
      A1 = userData.a1;
      A2 = userData.a2;
      A3 = userData.a3;
      A4 = userData.a4;
      B1 = userData.b1;
      B2 = userData.b2;
      B3 = userData.b3;
      B4 = userData.b4;
    }
  });
}
