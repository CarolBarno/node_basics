
const axios = require('axios');

axios.post('https://whatever.com/todos', {
    todos: 'Buy the milk'
})
.then(res => {
    console.log(`statusCode: ${res.statusCode}`)
    console.log(res);
})
.catch(error => {
    console.log(error);
})

// get request using express

const express = require('express');
const app = express();

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.post('/todos', (req, res) => {
    console.log(req.body.todos);
})

// get request using http 
//get the data

const http = require('http');

const server = http.createServer((req, res) => {
    // access http headers
    req.on('data', chunk => {
        console.log(`data chunk available is: ${chunk}`);
    })
    req.on('end', () => {
        //end of data
    })
})

//access the data

const server1 = http.createServer((req, res) => {
    let data = '';
    req.on('data', chunk => {
        data += chunk;
    })
    req.on('end', () => {
        JSON.parse(data).todos
    })
})