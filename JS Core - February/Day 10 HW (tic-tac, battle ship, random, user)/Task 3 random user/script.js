function loadInfo(link = "https://randomuser.me/api/?results=300"){
    let ajax = new XMLHttpRequest();
    
    ajax.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let data = JSON.parse(this.responseText);
            let results = data.results;
            usersAge(results);
            menCount(results);
            averageAge(results);
            city(results);
        }
    }
    ajax.open("GET", link)
    ajax.send()
}


function usersAge(results){
    let young = {date: results[0].dob.date};
    let old = {date: results[0].dob.date};
    results.forEach(el => {
        if (young.date < el.dob.date){
            young = {date: el.dob.age, firstname: el.name["first"], lastname: el.name["last"] }
        }
        if (old.date > el.dob.date){
            old = {date: el.dob.age, firstname: el.name["first"], lastname: el.name["last"] }
        }
    });
    youngest.value = `${young.date}, ${young.firstname} ${young.lastname}`;
    oldest.value = `${old.date}, ${old.firstname} ${old.lastname}`;
}

function menCount(results){
    let menCount = 0, womenCount = 0;
    results.forEach(el => el.gender === "male" ? menCount++ : womenCount++);
    menNum.value = `${menCount}`;
    womenNum.value = `${womenCount}`;
}

function averageAge(results){
    let menAgeSum = 0;
    let womenAgeSum = 0;
    let menCount = 0;
    let womenCount = 0;
    results.forEach(el => {
        if(el.gender === "male"){
            menAgeSum += el.dob.age;
            menCount++;
        }
        if(el.gender === "female"){
            womenAgeSum += el.dob.age;
            womenCount++;
        }
    })
    manAvgAge.value = Math.floor(menAgeSum/menCount);
    womenAvgAge.value = Math.floor(womenAgeSum/womenCount);
}


function city(results){
    let obj = {};
    results.forEach(el=> {
        console.log(el.location.city);
    });
    
}