// call mehtod -- is predefined javascript method, with call() an object can use a method belonging to another object


const youtube = {
    name: "sameer",
    content: "progrsaming",
    feature: function(rating) {
        console.log(`very friendly way of teaching ${this.name} is my fav ${this.content} channel  and rating is ${rating} `);
    }
}

// youtube.feature(10);

const youtube2 = {
    name: "codewithharry",
    content: "progrsaming",
}

// youtube.feature.call(youtube2, 5);

// bind method -- by this method we can bind an object to a common function , so that the function gives different result when its need .

const youtube11 = {
    name: "sameer",
    content: "progrsaming",
    feature: function(rating) {
        console.log("bind jone");
        console.log(`very friendly way of teaching ${this.name} is my fav ${this.content} channel  and rating is ${rating} `);
    }
}
const youtube22 = {
    name: "lokesh",
    content: "progrsaming",
}
const youtube33 = {
    name: "manan",
    content: "progrsaming",
}

let a = youtube11.feature.bind(youtube22);
let b = youtube11.feature.bind(youtube33);
a();
b();



// apply meth0d-----

const you = {
    name: "sameer",
    content: "progrsaming",
    feature: function(rating, number, address) {
        console.log(`very friendly way of teaching ${this.name} is my fav ${this.content} channel  and rating is ${rating} and my number is ${number} and address is ${address} `);
    }
}
const you2 = {
    name: "akss",
    content: "progrsaming",
}
feature.call(you2, [2, 9346547587, "aligarh"]);