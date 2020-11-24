const { resolve } = require("path");

let done = true;

const isItDoneYet = new Promise((resolve, reject) => {
    if (done) {
        const workDone = 'here is the thing i built';
        resolve(workDone);
    }
    else {
        const why = 'still working on something else';
        reject(why);
    }
})

const checkIfDone = () => {
    isItDoneYet.then(ok => {
        console.log(ok);
    }).catch(err => {
        console.log(err);
    })
}

checkIfDone();

// chaining promises

const status = response => {
    if(response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
    }
    return Promise.reject(new Error(response.statusText));
}

const json = response => response.json();

fetch('/todos.json')
.then(status)
.then(json)
.then(data => {
    console.log('Request succeeded with json response', data);
})
.catch(error => {
    console.log('request failed', error);
})

// promise.all()
 
const f1 = fetch('/something.json');
const f2 = fetch('/something2.json');

Promise.all([f1, f2])
.then(res => {
    console.log('array of results', res);
})
.catch(err => {
    console.log(err);
})

// promise.race()

const first = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'first');
})

const second = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'second');
})

Promise.race([first, second]).then(result => {
    console.log(result);
})