// // callbacks 
// function f1() {
//     console.log("1 function");
// }

// function f2() {
//     console.log("2 function");
// }
// f1();
// f2();

// function mymessage(str) {
//     setTimeout(() => {
//         console.log("Lets make it");
//     }, 3000)
// }
// mymessage();


// function addition(x, y, callback) {
//     setTimeout(() => {
//         console.log(`the sum is ${x+y}`);
//     }, 5000)
// }

// function display() {
//     console.log("numbers added");
// }
// addition(5, 5, display);

const students = [
    { name: "harry", subject: "mathss" },
    { name: "sameer", subject: "coding" },
]

function enrollStudents(student, callback) {
    setTimeout(() => {
        students.push(student);
        console.log('students has been inserted');
    }, 1000);
}

function getstudents() {
    // setTimeout(() => {
    let str = " ";
    students.forEach(function(student) {
        str += `<li>${student.name}</li> `
    })

    // }, 5000);
}