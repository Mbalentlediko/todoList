//
// Selecting necessary elements
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const sortButton = document.getElementById("sort-button");
const todoList = document.getElementById("todo-list");

// Function to add a new to-do item
function addTodoItem(event) {
    event.preventDefault(); // Prevent form submission
    const todoText = todoInput.value.trim(); // Get the value of the input field
    if (todoText !== "") { // Check if the input field is not empty
        const todoItem = document.createElement("li"); // Create a new list item
        todoItem.textContent = todoText; // Set the text content of the list item
        todoList.appendChild(todoItem); // Append the list item to the todo list
        todoInput.value = ""; // Clear the input field
    }
}

// Function to sort the to-do list alphabetically
function sortTodoList() {
    const todoItems = Array.from(todoList.children); // Convert the list items to an array
    const sortedItems = todoItems.sort((a, b) => a.textContent.localeCompare(b.textContent)); // Sort the array alphabetically
    todoList.innerHTML = ""; // Clear the todo list
    sortedItems.forEach(item => todoList.appendChild(item)); // Append sorted items back to the todo list
}

// Event listeners
addButton.addEventListener("click", addTodoItem); // Add event listener to add button
todoForm.addEventListener("submit", addTodoItem); // Add event listener to form submission
sortButton.addEventListener("click", sortTodoList); // Add event listener to sort button
