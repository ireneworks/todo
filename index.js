const submitNewTodo = document.getElementById("new-todo");
submitNewTodo.addEventListener("submit", addNewTodo);

let newTodoContent = document.getElementById("new-todo-content");

function addNewTodoToList(){
    //엘리먼트 생성
    const li = document.createElement("li");
    li.className = "todo";

    const checkbox = document.createElement("input");
    checkbox.type = 'checkbox';
    checkbox.className = "todo-checkbox";

    const todoText = document.createElement("input");
    todoText.type = "text";
    todoText.value = "ad";

    const date = document.createElement("p");
    const deleteTodo = document.createElement("button");
    // deleteTodo.type = "submit";
    deleteTodo.className = "delete-todo";
    //노드 추가
    li.append(checkbox, deleteTodo);
    date.append(`등록일: ${new Date()}`);
    checkbox.after(date, todoText);
    deleteTodo.append("삭제");

    //ol에 li 추가
    document.getElementById("todo-list").prepend(li);
}

function addNewTodo(e) {
    e.preventDefault();

    if (newTodoContent.value !== "") {
        addNewTodoToList();
        alert(`[${newTodoContent.value}]할 일이 등록되었습니다.`);
    }
    else {
        alert("할 일을 입력하세요.");
    }
    return(newTodoContent.value);
}

const list = document.getElementById("todo-list");
const deleteButton = document.getElementsByClassName("delete-todo");
deleteButton.addEventListener("click", deleteTodo);
function deleteTodo (){
    list.removeChild(document.getElementsByClassName("todo"));
}