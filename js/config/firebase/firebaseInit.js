import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

import { firebaseConfig } from "./firebaseConfig";

// Initialize Firebase connect to the project we setup
// connect to the app... created
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
// Ref to the real time database(RTDB)
const db = getDatabase(app);

export { db };
