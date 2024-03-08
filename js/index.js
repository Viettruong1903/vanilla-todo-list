import { getTodoData } from "./lib/firebase/api";
//single source of truth for the data...
let store = [];

async function appInit() {
  const toDos = await getTodoData();
  console.log(toDos);
}

appInit();

/*

  RTDB return object of object....
  [objects]

*/ 