// objects

// simple objects 

const course = {
    lecture: 10,
    section: 3,
    title: "javascript",
}

console.log(course);
console.log(course.lecture);

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

console.log(courses);