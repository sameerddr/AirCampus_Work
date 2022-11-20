console.log("working");

let inputValue = document.querySelector("#input");
let btn = document.getElementById("btn");

console.log(inputValue.value);

function handleinput(e) {
    e.preventDefault();
    console.log("btn");
}
btn.addEventListener("onclick", handleinput(e));