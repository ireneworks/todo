const submitNewTodo = document.getElementById("todo-submit")
submitNewTodo.addEventListener("click", addNewTodo);

function addNewTodo() {
    let newTodoContent = document.getElementById("new-todo-content").value;
    if(newTodoContent === ""){
        alert("할 일을 입력하세요.");
    }
    else{
        alert(`[${newTodoContent}]할 일이 등록되었습니다.`);
    }
    const todoList = document.getElementById("todo-list");
    const addNewTodoList = document.createElement("li");
    addNewTodoList.value = newTodoContent;
    todoList.appendChild(addNewTodoList);

}
