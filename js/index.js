import { getTodoData } from "./lib/firebase/api";

// Function to render the to-do list using the provided template
function renderTodoList(todos) {
    const todoListContainer = document.getElementById("todo-list-container");

    // Clear previous content
    todoListContainer.innerHTML = "";

    Object.values(todos).forEach(todo => {
        const todoItem = document.createElement("div");
        todoItem.classList.add("border", "border-gray-200", "p-4", "mb-4");

        const description = document.createElement("h2");
        description.classList.add("text-lg", "font-semibold", "mb-2");
        description.textContent = todo.task_name; // Adjusted to match the actual property name

        const category = document.createElement("p");
        category.classList.add("text-sm", "text-gray-600", "mb-1");
        category.innerHTML = `<strong>Category:</strong> ${todo.category}`;

        const status = document.createElement("p");
        status.classList.add("text-sm", "text-gray-600", "mb-1");
        status.innerHTML = `<strong>Status:</strong> ${todo.status}`;

        const dueDate = document.createElement("p");
        dueDate.classList.add("text-sm", "text-gray-600", "mb-1");
        dueDate.innerHTML = `<strong>Due Date:</strong> ${todo.startDate}`; // Adjusted to match the actual property name

        todoItem.appendChild(description);
        todoItem.appendChild(category);
        todoItem.appendChild(status);
        todoItem.appendChild(dueDate);

        todoListContainer.appendChild(todoItem);
    });
}

// Function to initialize the application
async function appInit() {
    try {
        const todos = await getTodoData();
        renderTodoList(todos);
    } catch (error) {
        console.error("Error fetching to-do data:", error);
    }
}

appInit();
