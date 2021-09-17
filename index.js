const submitNewTodo = document.getElementById("new-todo");
submitNewTodo.addEventListener("submit", addNewTodo);

function addNewTodo(e) {
    e.preventDefault();

    let newTodoContent = document.getElementById("new-todo-content").value;

    if (newTodoContent.value !== "") {
        addNewTodoToList();
        alert(`[${newTodoContent}]할 일이 등록되었습니다.`);
    }
    else {
        alert("할 일을 입력하세요.");
    }
    function addNewTodoToList(){
        //엘리먼트 생성
        const li = document.createElement("li");
        li.className = "todo";

        const checkbox = document.createElement("input");
        checkbox.type = 'checkbox';
        checkbox.className = "todo-checkbox";

        const todoText = document.createElement("input");
        todoText.type = "text";
        todoText.value = newTodoContent;

        const date = document.createElement("p");
        const deleteTodo = document.createElement("button");
        deleteTodo.type = "submit";
        deleteTodo.className = "delete-todo";
        //노드 추가
        li.append(checkbox, deleteTodo);
        date.append(`등록일: ${new Date()}`);
        checkbox.after(date, todoText);
        deleteTodo.append("삭제");

        //ol에 li 추가
        document.getElementById("todo-list").prepend(li);
    }
}

const deleteButton = document.getElementsByClassName("delete-todo");
deleteButton.addEventListener("submit", deleteTodo);
function deleteTodo(e){
    e.preventDefault();
    const li = document.querySelector('li');
    li.remove();
}