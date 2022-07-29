function sorting(obj) {
    // let sorts = [];
    // for(property in obj){
    //   sorts.push((obj[property]));
    // }
    // console.log(sort)

    obj.sort((a, b) => a.price - b.price)
    return obj;

}
console.log(sorting([
    { name: "lemonade", price: 50 },
    { name: "lime", price: 10 }
]));


function keyValue(obj) {
    let res = []
    let a = (Object.keys(obj));
    let b = (Object.values(obj));
    // return a.push(res);
    res.push(a);
    res.push(b);
    return (res)
}
console.log(keyValue({ key1: true, key2: false, key3: undefined }))
exports.keyValue = keyValue


function shopping(obj) {

    return (Object.keys(obj));

}
console.log(shopping({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }))
console.log(shopping({ "Monopoly": 11.99, "Secret Hitler": 35.99, "Bananagrams": 13.99 }))

function freeDelivery(obj) {

    let sum = 0;
    // var results = [];
    for (var property in obj)
    // results.push(obj[property]);
    // console.log(results) ;

        sum = sum + (obj[property]);
    if (sum > 50) {
        return true
    } else {
        return false
    }




}
console.log(freeDelivery({ "Shampoo": 5.99, "Rubber Ducks": 15.99 }))

let user = {
    username: "sameer",
    r1: () => {
        console.log("this is username" + this.username);
    },
    r2() {
        console.log("this is normal" + this.username);
    }

}
user.r1();
user.r2();

const sameer2 = {
    name: "virat",
    age: 31
}
sameer2.name = "dhoni";
delete sameer2.age;
console.log(sameer2);
console.log(sameer2.name);

const fun3 = (function(a) {
    delete a;
    return a;
})(5);

console.log(fun3);
const sameer3 = {
    name: "virat",
    age: 31,
    "liked this video": true
}
console.log(
    ["liked this video"]);

const obj = {
    nam: "yes",
    age: 12
}

for (key in obj) {
    console.log(key);
    console.log(obj[key]);
}

const users = {
    name: "piyush",
    age: 3265
}

// console.log(JSON.stringify(users));
let aa = JSON.stringify(users);
console.log(JSON.stringify);

// refrencing object