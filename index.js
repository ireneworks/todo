const addNewTodo = document.getElementById("todo-submit")
addNewTodo.addEventListener("click", noticeNewTodo);

function noticeNewTodo(){
    alert("할 일을 입력해주세요.");
}