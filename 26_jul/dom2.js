console.log("welcome");

let elements = document.createElement("li");
// console.log(elements);

// add a class name and a id to the created element 
elements.className = "chid";
elements.id = "createdli";
elements.setAttribute("title", "mytitle");
elements.innerText = "hello i have created new li";
// console.log(elements);


let ul = document.querySelector("ul.this"); // targeting ul first this 
// console.log(ul);
ul.appendChild(elements);
// console.log(ul);
// console.log(elements);

let elem2 = document.createElement("h3");
elem2.className = "sameer";
elem2.id = "sam";
let text = document.createTextNode("this is sameer varshney ");
elem2.appendChild(text);
console.log(elem2);
// console.log(text);

// elements.replaceWith(elem2); // it replaces the elements line with the elem2

// using getAttribute is used to get the id and class of element 
let pr = elem2.getAttribute("class");
pr = elem2.getAttribute("id");
console.log(pr);
// using hasAttribute is used to check  wheather a element has the id and class of element in terms of true and false

let ms = elem2.hasAttribute("class");
ms = elem2.hasAttribute("id");
// console.log(ms);
// using removeAttribute is used to delete a element id and class  and other attributes
let s = elem2.removeAttribute("id");
console.log(s, elem2);