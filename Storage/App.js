console.log("Working Fine");
localStorage.setItem("Key", '["sameer", "aman"]');
let a = localStorage.getItem("Key");
console.log(a);
localStorage.removeItem("Key");
localStorage.setItem("Key", '["sameer", "aman"]');
localStorage.clear();

const person = {
    name: "sameer",
    age: 21,
};
localStorage.setItem("user", JSON.stringify(person));
let b = JSON.parse(localStorage.getItem("user"));
console.log(b);