let p = document.getElementById("parent");
let c = document.getElementById("child");

function parentcall() {
    alert("Parent");
}

function childcall() {
    alert("Child");
}

p.addEventListener("click", parentcall, false);
c.addEventListener("click", childcall, false);