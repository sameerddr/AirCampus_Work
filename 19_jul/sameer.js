// objects
// 1--variables are called property inside the objects
// 2--functions are called methods inside the objects
// 3--you can dynamically stores property outside the objects
// 4--this point the
// function 's property   // used in constructor function


// simple objects 

const course = {
    lecture: 10,
    section: 3,
    title: "javascript",
}

console.log(course);
console.log(course.lecture);


// ---- Example -2
const courses = {
    lecture: 100,
    section: 200,
    title: "web devlopment",
    notes: {
        introduction: "welcome to the coding world "
    },
    enroll() {
        console.log("Succesfully enroled ");
    }
}

console.log(courses); // In this the function defination is not working
console.log(courses.notes);
courses.enroll();