function mydata() {
    document.getElementById("myid").disabled = false;
    console.log("user clicked");
}

const mythroat = (fn, d) => {
    return function(...args) {
        document.getElementById("myid").disabled = true;
        setTimeout(() => {
            fn();
        }, d);
    };
};

const newfun = mythroat(mydata, 3000);