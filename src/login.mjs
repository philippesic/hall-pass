import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "../node_modules/@firebase/auth";

const signupSection = document.getElementById("signupSection");
const loginSection = document.getElementById("loginSection");

function toggleSections() {
  if (signupSection.style.display === "none") {
    signupSection.style.display = "block";
    loginSection.style.display = "none";
  } else {
    signupSection.style.display = "none";
    loginSection.style.display = "block";
  }
}

function signUp() {
  const signupEmail = document.getElementById("signupEmail").value;
  const signupPassword = document.getElementById("signupPassword").value;

  createUserWithEmailAndPassword(auth, signupEmail, signupPassword);
}

function login() {
  const loginEmail = document.getElementById("loginEmail").value;
  const loginPassword = document.getElementById("loginPassword").value;

  signInWithEmailAndPassword(auth, loginEmail, loginPassword);
}

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
