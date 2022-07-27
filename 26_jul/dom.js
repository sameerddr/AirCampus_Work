console.log("welecome ");

/* 
element slectors 
1 . Single element Selector
2 . Multi element Selector

*/
// 1 . Single element Selector

// getelementBYId
let element = document.getElementById("myfirst")
    // console.log(element);
element.style.color = "white";
element.style.background = "red";
element.innerText = "yes it is wokring";
element.innerHTML = " <i> yes it is wokring </i>";

// querySlector
let sel = document.querySelector("#myfirst"); // id select
sel = document.querySelector(".child"); // class slect
sel = document.querySelector("i"); // tag select
sel = document.querySelector("div"); // tag select only give single div
sel = document.querySelector("h1"); // tag select
console.log(sel);
// sel.style.color = "green";

// few things which i can get of my element 
// console.log(element.innerHTML);
// console.log(element.innerText);
// element = element.className;
// console.log(element);

// 2. Mutli  element Slector

// getElementByClass

let elems = document.getElementsByClassName("child");
console.log(elems);
let elem = document.getElementsByClassName("container");
elem = document.getElementsByClassName("container");
console.log(elem[0].getElementsByClassName("child"));

let div = document.getElementsByTagName("div");
console.log(div);

for (let i = 0; i < div.length; i++) {
    const element = div[i];
    console.log(element);
    // console.log(div[i]);
    element.style.color = "yellow";
}


// -------------------

let cont = document.querySelector("div");
cont = document.querySelector(".container")
console.log(cont);
// console.log(cont.childNodes); // will include text and comments
console.log(cont.children); // will not include text and comments