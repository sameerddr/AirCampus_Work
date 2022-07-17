let string = "Aircampus";
let rotate = string.slice(0, 2);
let s = string.slice(2);
console.log(s);
console.log(`${s}${rotate}`); // rcampusAi 
// usAircamp
let r = string.slice(0, 7);
let ss = string.slice(7);
console.log(`${ss}${r}`);

function checkStringsAnagram(a, b) {
    let len1 = a.length;
    let len2 = b.length;
    if (len1 !== len2) {
        console.log('Invalid Input');
        return
    }
    let str1 = a.split('').sort().join('');
    let str2 = b.split('').sort().join('');
    if (str1 === str2) {
        console.log("True");
    } else {
        console.log("False");
    }
}
checkStringsAnagram("indian", "ndiani")