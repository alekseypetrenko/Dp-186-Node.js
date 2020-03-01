let ul = document.querySelector("ul");

function addNewIitem() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("toDoItem").value;

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


if (localStorage.getItem("todos")) {
    ul.innerHTML = localStorage.getItem("todos")   
    
}

function check(){
    console.log(this);
    
}
let li = document.querySelectorAll("li");

for (let i = 0; i < li.length; i++){
    li[i].onclick = check()
}
