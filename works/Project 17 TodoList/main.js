//Selectors
let todoInput = document.querySelector(".todo-input");
let todoButton = document.querySelector(".todo-button");
let todoList = document.querySelector(".todo-list");
let filterOption = document.querySelector(".filter-todo");

//EventListen
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);
//document.addEventListener("DOMContentLoaded", getTodos);

//Function
//Adding the LIST
function addTodo(event) {
  //prevent form form submitting
  event.preventDefault();

  //Create toDo DIV
  let todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //Create the List
  let newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  //Add ToDo tp LOCALSTORAGE
  //saveLocalTodos(todoInput.value);

  //Check Button
  let completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  //Trash Button
  let trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  //Append to List
  todoList.appendChild(todoDiv);

  //Clear Todo Input Value
  todoInput.value = "";
}

//DELETING the LIST
function deleteCheck(event) {
  let item = event.target;

  //Delete ToDoList
  if (item.classList[0] === "trash-btn") {
    let todo = item.parentElement;

    //Animate, waits only when the animation is completed or the transition is completed
    todo.classList.add("fall");
    //removeLocalStorage(todo);
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  //CHECKING the List
  if (item.classList[0] === "complete-btn") {
    let todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

//Filter ToDo
//Show All ToDo LIST
//Show Completed ToDo LIST
//show Uncompleted ToDo LIST
function filterTodo(event) {
  let todoS = todoList.childNodes;
  todoS.forEach(function (todo) {
    switch (event.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}

/*----------------------
//EXTRA STUFF ON SAVING IT ON LOCALsTORAGE

//Save localStorage and adding new items
function saveLocalTodos(todo) {
  //Check -- Do I have thing in there?
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

//Update ToDo LIST
function getTodos() {
  //Check -- Do I have thing in there?
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function (todo) {
    //Create toDo DIV
    let todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //Create the List
    let newTodo = document.createElement("li");
    newTodo.innerText = todo;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //Check Button
    let completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //Trash Button
    let trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //Append to List
    todoList.appendChild(todoDiv);
  });
}

//Remove LOCALSTORAGE
function removeLocalStorage(todo) {
  //Check -- Do I have thing in there?
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  let todoIndex = todo.children[0].innerText;
  todos.splice(todos.index(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}

---------------------*/
