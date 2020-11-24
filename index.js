let employee = {
    baseSalary: 30_000,
    overTime: 10,
    rate: 20,
    getWage: function () {
        return this.baseSalary + (this.overTime * this.rate);
    }
};

function Circle(radius) {
    this.radius = radius;

    let defaultLocation = {
        x: 0,
        y: 0
    };

    this.getDefaultLocation = function() {
        return defaultLocation;
    };

    this.draw = function () {
       
        console.log('draw');
    };

    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            if(!value.x || !value.y)
            throw new Error('Invalid location');

            defaultLocation = value;
        }
    });
}

// const circle = new Circle(10);
// circle.draw();
// circle.defaultLocation = 1;


let salary = employee.getWage();

function StopWatch() {
    let startTime, endTime, running, duration = 0;

    this.start = function() {
        if(running)
        throw new Error('Stop watch already started');

        running = true;

        startTime = new Date();
    };

    this.stop = function() {
        if(!running)
        throw new Error('Stop watch not started');

        running = false;

        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    };

    this.reset = function() {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };

    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration;
        }
    });
}

const watch = new StopWatch();
watch.start();
watch.stop();
watch.reset();