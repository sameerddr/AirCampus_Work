console.log("welcome");

let elements = document.createElement("li");
// console.log(elements);

// add a class name and a id to the created element 
elements.className = "chid";
elements, id = "createdli";
elements.setAttribute("title", "mytitle");
elements.innerText = "hello i have created new li";
// console.log(elements);


let ul = document.querySelector("ul.this"); // targeting ul first this 
// console.log(ul);
ul.appendChild(elements);
// console.log(ul);
// console.log(elements);