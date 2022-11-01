var promise = new Promise(function(reslove, reject) {
    const x = "geeksforgeeks";
    const y = "geeksforgefdeks";
    if (x == y) {
        reslove();
    } else {
        reject();
    }
});

promise
    .then(function() {
        console.log("Sucess");
    })
    .catch(function() {
        console.log("failed");
    });

function fun1() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {
                resolve();
            } else {
                reject();
            }
        }, 3000);
    });
}
fun1()
    .then(function() {
        console.log("done");
    })
    .catch(function() {
        console.log("fail");
    });