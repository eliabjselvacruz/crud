import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyv-3gVZpdw08airK-ygftHR2TaYH7blE",
  authDomain: "caracoles-crud.firebaseapp.com",
  projectId: "caracoles-crud",
  storageBucket: "caracoles-crud.appspot.com",
  messagingSenderId: "993917971365",
  appId: "1:993917971365:web:b8338d2b9ac96c8c5a164c"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();

/**
 * Save a New Task in Firestore
 * @param {string} title the title of the Task
 * @param {string} description the description of the Task
 */
export const saveTask = (title, description) =>
  addDoc(collection(db, "tasks"), { title, description });

export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "tasks"), callback);

/**
 *
 * @param {string} id Task ID
 */
export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));

export const getTask = (id) => getDoc(doc(db, "tasks", id));

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, "tasks", id), newFields);

export const getTasks = () => getDocs(collection(db, "tasks"));
