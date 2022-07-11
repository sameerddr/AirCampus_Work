function specialNumber(n) {
    if (n == 0) return 'NO';
    let originalNum = n;
    let sum = 0;
    while (n > 0) {
        let digit = n % 10;
        sum += getFact(digit);
        n = Math.floor(n / 10);
    }
    if (originalNum === sum) return 'YES'
    else return 'NO'
}

function getFact(n) {
    let fact = 1;
    for (let i = 2; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

console.log(specialNumber(145));

exports.specialNumber = specialNumber


// Q2--------------------------
function triangular_series(n) {
    let count = 0,
        sum = 0;
    for (i = 1; i <= n; i++) {
        digit = "";
        for (j = 1; j <= i; j++) {
            count++;
            sum = sum + count;
            digit += `${sum} `;
        }
        console.log(digit)
    }
}
triangular_series(5);

// Q3