
const doSomethingAsync = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve('i did something'), 3000)
    })
}

const doSomething = async () => {
    console.log(await doSomethingAsync());
}

console.log('befoe');
doSomething();
console.log('after');

// multiple async

const promiseToDoSomething = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve('i did something'), 10000)
    })

}

const watchOverSomeone = async () => {
    const something = await promiseToDoSomething();
    return something + '\n and i watched';
}

const watch = async () => {
    const something = await watchOverSomeone();
    return something + '\nand i watched as well';
}

watch().then(res => {
    console.log(res);
})