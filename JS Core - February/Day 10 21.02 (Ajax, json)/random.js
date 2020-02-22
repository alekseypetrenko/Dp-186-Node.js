function getUser(){
    info.value = "User loading...";
    loadUser();
}

function loadUser(){
    const ajax = new XMLHttpRequest();

    ajax.onload = function(){
        if(this.status == 200){
            showUser(JSON.parse(this.responseText))
        } else {
            info.value = "Error data loading..."
        }
    }
    ajax.open("GET", 'https://randomuser.me/api/')
    ajax.send()
}

function showUser(data){
    info.value = `${data.results[0].name.first} ${data.results[0].dob.age} `
}