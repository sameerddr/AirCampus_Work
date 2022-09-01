// Ex 1--

var prom = new Promise(function(resolve, reject) {
    const x = "the condition is true";
    const y = "the condition is true";
    if (x == y) {
        resolve()
    } else {
        reject();
    }
});

prom.then(function() {
    console.log("success");
}).catch(function() {
    console.log("error occured");
});


// Ex2--

function fun1() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log("Function : Your Promises Has Been Resolved");
                resolve();
            } else {
                console.log("Function : Your Promises Has Been Rejected");
                reject();
            }
        }, 2000);
    })
}

fun1().then(function() {
    console.log("Thanks Harry");
}).catch(function() {
    console.log("Very Bad Harry");
})

// Ex-3

const students = [
    { name: "sameer", subject: "Javascript" },
    { name: "lokesh", subject: "Java" },
]

function enroll(student) {

}