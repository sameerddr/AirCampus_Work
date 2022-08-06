const paragraph1 = document.getElementById("para1");
console.log(paragraph1.textContent);
const h1Element = document.querySelector("h1");
console.log(h1Element);
const list = document.querySelector(".list");
console.log(list);
const listItems = document.querySelectorAll("ul > li");
console.log(listItems);
let listItem1 = document.createElement("li");

let listItem2 = document.createElement("li");
// Then we can use the  textContent property to add the text for our list items.
// Then we can use the  textContent property to add the text for our list items.

listItem1 = document.createElement("li");
listItem1.textContent = "It's free";

llistItem2 = document.createElement("li");
listItem2.textContent = "It's awesome";