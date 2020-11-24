const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

//register a listner
eventEmitter.on('tutorial', (num1, num2) => {
    console.log(num2 + num1);
});

// register an event
eventEmitter.emit('tutorial', 1, 2);

class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

let pedro = new Person('Pedro');
let you = new Person('Chris');

you.on('name', () => {
    console.log('my name is ' + you.name);
});

pedro.on('name', () => {
    console.log('my name is ' + pedro.name);
});

pedro.emit('name');
you.emit('name');