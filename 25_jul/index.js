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