// let counter = 0;

// function getdata() {
//     console.log("yes " + counter++);
// }

// function debounce(callback, delay) {
//     let timer;
//     return function(...args) {
//         console.log(getdata);
//         if (timer) clearTimeout(timer);
//         setTimeout(() => {
//             callback();
//         }, delay);
//     };
// }

// const Betterfunction = debounce(getdata, 1000);
// let count = 0;

// function getdata() {
//     console.log("yes" + count++);
// }

// function debounce(callback, delay) {
//     let timer;
//     return function(...args) {
//         if (timer) clearTimeout(timer);
//         setTimeout(() => {
//             callback();
//         }, delay);
//     };
// }

// const BetterFunction = debounce(getdata, 1000);
let count = 0;

function getdata() {
    console.log("yes it is working" + count++);
}

function debounce(callback, delay) {
    let timer;
    return function(...args) {
        if (timer) clearTimeout(timer);
        setTimeout(() => {
            callback();
        }, delay);
    };
}

const BettterFunction = debounce(getdata, 5000);