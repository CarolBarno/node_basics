
const logger = require('./logger');
const path = require('path');
const os = require('os');
const file = require('fs');
const http = require('http');

var totalMem = os.totalmem();

var cpu = os.cpus();

var pathObj = path.parse(__filename);

const files = file.readdirSync('./');
const fs = file.readdir('./', function (err, fl) {
    if (err)
        console.log('Error', err);
    else console.log('Result', fl);
})

const server = http.createServer((req, res) => {
    if(req.url == "/") {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write('hello world');
        res.end();
    }

    if(req.url == '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

server.listen(3000);

console.log(cpu);


