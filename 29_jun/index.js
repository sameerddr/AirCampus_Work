// let num = 5;
// for (let i = 1; i <= num; i++) {
//     let stars = '';
//     for (let j = 1; j <= i; j++) {
//         // stars += '*';
//         stars = stars + "*"
//             // console.log("*");
//     }
//     console.log(stars);
// }
// Q3
// let num = 5;
// for (let i = 1; i <= num; i++) {
//     let stars = '';
//     for (let j = 1; j <= i; j++) {
//         // stars +='*';
//         stars = stars + j
//             // console.log("*");
//     }
//     console.log(stars);
// }
// Q4--------------------------------------------------
let num = 5;
for (let i = 1; i <= num; i++) {
    let stars = '';
    for (let j = 1; j <= i; j++) {
        // stars +='*';
        stars = stars + i
            // console.log("*");
    }
    console.log(stars);
}

// Q5----------------------------------------
let n = 5;
let count = 1;
for (let i = 1; i <= num; i++) {
    let stars = '';
    for (let j = 1; j <= i; j++) {
        stars = stars + count;
        stars += " "
        count++;
    }
    console.log(stars);
}
// Q6-----------------------
let numm = 5;
for (let i = 1; i <= numm; i++) {
    let stars = '';
    for (let j = 1; j <= i; j++) {
        if ((i + j) % 2 == 0) {
            stars = 0
        } else {
            stars = 1
        }
    }
    console.log(stars);
}