
let list = document.querySelector("ul")
let todos;

function addToLocal() {
    todos = list.innerHTML
    localStorage.setItem("todos", todos);
}

function addNewIitem() {
    let newItem = document.getElementById("toDoItem").value;
    let li = document.createElement("li");
    let items = document.getElementById("items");
    if (newItem == "") {
        alert("Enter somethig...")
    } else {
        li.appendChild(document.createTextNode(newItem))
        items.prepend(li);
    }


    document.getElementById("toDoItem").value = "";
    addToLocal(); 

    // WHY - Unexpectd end of JSON input ?????

    // let  arr = JSON.parse(localStorage.getItem("todos") || []);
    // arr.push(newItem)
    // localStorage.setItem("todos", JSON.stringify(arr));
}

if(localStorage.getItem("todos")){
    list.innerHTML = localStorage.getItem("todos")
}