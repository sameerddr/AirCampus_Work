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

exports.sorting = sorting

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