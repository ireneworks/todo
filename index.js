const addNewTodo = document.getElementById("todo-submit")
addNewTodo.addEventListener("click", noticeNewTodo);

function noticeNewTodo(){
    let newTodoContent = document.getElementById("new-todo-content").value;
    if (newTodoContent === ""){
        alert("할 일을 입력해주세요.");
    }
    else {
        alert(newTodoContent);
    }
}