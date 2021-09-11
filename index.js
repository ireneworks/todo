const addNewTodo = document.getElementById("todo-submit")
addNewTodo.addEventListener("click", noticeNewTodo);

function noticeNewTodo(){
    let newTodoContent = document.getElementById("new-todo-content");
    alert(newTodoContent)
}