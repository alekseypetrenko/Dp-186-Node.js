let ul = document.querySelector("ul");

function addNewIitem() {
    let inputValue = document.getElementById("toDoItem").value;
    let li = document.createElement("li");

    if (inputValue == "") {
        alert("Enter somethig...")
    } else {
        li.appendChild(document.createTextNode(inputValue))
        ul.prepend(li);
    }

    document.getElementById("toDoItem").value = "";

    let todos = ul.innerHTML;
    localStorage.setItem("todos", todos)


}
if(localStorage.getItem("todos")){
    ul.innerHTML = localStorage.getItem("todos")
}
