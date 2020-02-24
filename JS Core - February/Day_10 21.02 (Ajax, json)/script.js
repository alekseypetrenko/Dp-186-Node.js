function loadData(link = "./data.json", isJSON = false) {
    // AJAX object creating
    const ajax = new XMLHttpRequest();
    // data recieveing

    // ajax.onreadystatechange = function(){
    //     if (this.readyState == 4 && this.status == 200) {
    //         console.log(`readyState: ${this.readyState}, status: ${this.status}`);
    //         console.log(this.responseText);
    //     }      
    // }

    // ajax.onload = function(){
    //     console.log(`readyState: ${this.readyState}, status: ${this.status}`);
    //     console.log(this.responseText);  
    // }

    ajax.onload = function () {
        if (this.status == 200) {
            showData(this.responseText, true)
        }
    }


    // sending data set up
    ajax.open("GET", link);
    // send data

    ajax.send()
    return "Hi"
}

function showData(data, isJSON) {
    let phones;
    if (isJSON) {
        phones = JSON.parse(data);
    } else {
        phones = data.split(/\n/).map(str => str.split(";"));
    }
    console.log(phones);

}