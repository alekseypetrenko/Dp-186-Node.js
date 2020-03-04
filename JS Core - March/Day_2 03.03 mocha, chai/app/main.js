import { sum } from "./sum.js";
import { multi } from "./multi.js";


const dom = {
    root: document.querySelector("#root")
}

function renderRoot() {
    dom.root.innerHTML = `<div class="inp-wrapper">
        <input type="text" class="inp-one">
        <input type="text" class="inp-two">
        <button class="btn-sum">Sum</button>
        <button class="btn-multi">Multi</button>
    </div>
    <div class="results"></div>`
    dom.inp1 = dom.root.querySelector(".inp-one");
    dom.inp2 = dom.root.querySelector(".inp-two");
    dom.result = dom.root.querySelector(".results");
}

renderRoot();

root.addEventListener("click", (ev) => {
    if(ev.target.classList.contains("btn-sum")){
        dom.result.innerHTML = sum(+dom.inp1.value, +dom.inp2.value)
    }
    console.log(ev);
    
})