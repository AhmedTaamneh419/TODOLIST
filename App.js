// Selectors
const todoInput = document.querySelector('.todo-input');

const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const fillterTodo = document.querySelector(".filter-todo")


// Event Listeners


todoButton.addEventListener('click',addTodo);
todoList,addEventListener('click',deleteCheck);
fillterTodo.addEventListener('click',fillterTodo);



// Functions

function addTodo(event){
    // prevent form from submitting
    event.preventDefault();
    // Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // Create LI
    const newTodo = document.createElement("li")

    newTodo.innerHTML=todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    // check mark button

    const completeButton = document.createElement('button');
    completeButton.innerHTML= '<i class="fas fa-check"></i>';

    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);

    // check mark button

    const trashButton = document.createElement('button');
    trashButton.innerHTML= '<i class="fas fa-trash"></i>';

    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // append to a list
    todoList.appendChild(todoDiv)

    // Clear Todo Input value
    todoInput.value = "";
}
function deleteCheck(e){
    const item = e.target;
    // Delete TODO
    if(item.classList[0]==='trash-btn'){

        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener('transitionend',function(){
          todo.remove();  
        })
        // Animation
        // /todo.remove();
        
    }

    // Check mark
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

//function fillterTodo(e){
    // const todos= todoList.childNodes;
    // todos.forEach(function(todo){
    //     switch(e.target.value){
    //         case "all":
    //             todo.style.display="flex";
    //             break;
    //         case "completed":
    //             if(todo.classList.contains('completed')){
    //                 todo.style.display="flex";
    //             }    else{
    //                 todo.style.display="none";
    //             }
    //     }
    // })
 //}