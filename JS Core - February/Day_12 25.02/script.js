const dom = {
    inp: document.querySelector("#inp-info"),
    btn: document.querySelector("#btn-memo"),
};

dom.btn.addEventListener("click", () => {
    Cookie.set(Date.now(), dom.inp.value, 2);
    //localStorage.setItem(Date.now(), dom.inp.value);

    const arr = JSON.parse(localStorage.getItem("inputs") || []);
    arr.push(dom.inp.value);
    localStorage.setItem("inputs", JSON.stringify(arr))
    dom.inp.value = ""
})

// function setCookie(cname, cvalue, exdays) {
//     const d = new Date();
//     d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
//     const expires = `expires=${d.toUTCString()}`;
//     document.cookie = `${cname}=${cvalue};${expires};path=/`;
// }

// function getCookie(cname) {
//     const name = cname + "=";
//     const ca = document.cookie.split(";");

//     for (var i = 0; i < ca.length; i++) {
//         var c = ca[i];
//         c = c.trim();
//         if (c.indexOf(name) == 0) {
//             return c.slice(name.length);
//         }
//     }
//     return "";
// }


// function deleteCookie(cname) {
//     document.cookie = `${cname}=; expires=Thu, 18 Dec 2013 12:00:00 UTC";`
//     return true
// }


class Cookie {
    static del(cname) {
        document.cookie = `${cname}=; expires=Thu, 18 Dec 2013 12:00:00 UTC"; path=/;`
        return true;

    }
    static get(cname) {
        const name = cname + "=";
        const ca = document.cookie.split(";");

        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            c = c.trim();
            if (c.indexOf(name) == 0) {
                return c.slice(name.length);
            }
        }
        return "";
    }
    static set(cname, cvalue, exdays){
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        const expires = `expires=${d.toUTCString()}`;
        document.cookie = `${cname}=${cvalue};${expires};path=/`;
        
    }

}



// cookie

// LocalStorage


localStorage.setItem("name", "Nick")


// SessionStorage

// IndexDB

