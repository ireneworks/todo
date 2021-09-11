const addNewTodo = document.getElementById("todo-submit")
addNewTodo.addEventListener("click", function(){
    let newTodoContent = document.getElementById("new-todo-content").value;
    if(newTodoContent === ""){
        alert("할 일을 입력하세요.");
    }
    else{
       alert('['+newTodoContent+']'+"할 일이 등록되었습니다.");
    }
});