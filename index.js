const submitNewTodo = document.getElementById("todo-submit")
submitNewTodo.addEventListener("click", addNewTodo);

function addNewTodo() {
    const newTodoContent = document.getElementById("new-todo-content").value;

    function addNewTodoToList(){
        //li 엘리먼트 생성
        const addNewList = document.createElement("li");
        //text 노드 추가
        addNewList.appendChild(document.createTextNode(newTodoContent));
        //ol에 li 추가
        document.getElementById("todo-list").appendChild(addNewList);
    }
    addNewTodoToList();
    // if (newTodoContent !== "") {
    //     addNewTodoToList();
    //     alert(`[${newTodoContent}]할 일이 등록되었습니다.`);
    // }
    // else {
    //     alert("할 일을 입력하세요.");
    // }
}
