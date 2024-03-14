import { getToDoData } from "./lib/firebase/api";
import { todoItemTemplate } from "./templates/todoItem";

async function appInit() {
	const appData = await getToDoData();
	// interactive templating
	const toDoItems = Object.values(appData).map((obj)=> {
		return todoItemTemplate(obj.todo);
	});

	// toDoItems.forEach(todo =>{
	// 	document.querySelector('#root').insertAdjacentHTML("afterbegin", todo);
	// });

	
	// render function jsx +++ data
	// template fnc() passing the data ===>> template string htmlish string

	// interactive templating
	//container
	const div = document.createElement('div');
	toDoItems.forEach(markup => {
		div.appendChild(markup);
	})

	document.querySelector('main').append(div);
}

appInit();
