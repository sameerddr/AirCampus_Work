let counter = 0;

function getdata() {
    console.log("yes " + counter++);
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

const Betterfunction = debounce(getdata, 1000);