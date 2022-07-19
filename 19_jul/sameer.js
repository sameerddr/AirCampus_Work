// objects

// 1--variables are called property inside the objects
// 2--functions are called methods inside the objects
// 3--you can dynamically stores property outside the objects
// 4--this point the function 's property   // used in constructor function
// 5-- objects are dynamic in nature

// simple objects 

const course = {
    lecture: 10,
    section: 3,
    title: "javascript",
}

console.log(course);
console.log(course.lecture);


// ---- Example -2
// const courses = {
//     lecture: 100,
//     section: 200,
//     title: "web devlopment",
//     notes: {
//         introduction: "welcome to the coding world "
//     },
//     enroll() {
//         console.log("Succesfully enroled ");
//     }
// }

// console.log(courses); // In this the function defination is not working
// console.log(courses.notes);
// courses.enroll();
// courses.fees = 1000 // we can also assign the values outside the function(Dyanamic Nature)
// console.log(courses);

// Factory Function --A factory function can be defined as a function that creates an object and returns it.

// CamelCase
// The factory function is a very useful tool in JavaScript since it returns the object of any class directly.
// Using the Factory Functions
// Factory functions are mainly used when the user wants to initialize the object of a class multiple times with some assigned value or static values. It makes the process easy since we just have to call this function and retrieve the new object created.

function createcourse() {
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
    return courses; // by mistake i have return thier the course object which i have used in the first example and it is returnig this also why?? even it is outside the function
}

console.log(createcourse()); // this is returning the full courses objects inside the function
let a = createcourse();
console.log(a.notes);
console.log(createcourse().notes);

// previous question same but without object name 
function createcourse() {
    return {
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
}
console.log(createcourse()); // this is returning the full courses objects inside the function
let aa = createcourse();
console.log(aa.notes);
console.log(createcourse().notes);


// with agruments

function booksLib(title) {
    return {
        title: title,
        book() {
            console.log("All Books are present");
        }
    }
}
let b = booksLib('JS'); // why error
// b.book()
console.log(booksLib());
console.log(booksLib.title);

//  constructor Fuction
// PascalCase
// To create an object from a constructor function, we use the new keyword.