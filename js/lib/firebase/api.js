/*
    Read Data from RTDB
*/

import { ref, child, get } from "firebase/database";

import { db } from "./../../config/firebase/firebaseInit";

/*

  1.connect to the to do list
    reference ref
    const dbRef = ref(db, "/todos")

  2.asking for the data from that ref path to a node in JSON file...
    get(ref) ===> data snapshot
    ex: const dataSnapshot = await get(dbRef);

  extracting the data
    dataSnapshot.val()

*/



async function getTodoData() {
  const dbRef = ref(db, "/todos");
  const dataSnapshot = await get(dbRef);
  return await dataSnapshot.val();
}

export { getTodoData };