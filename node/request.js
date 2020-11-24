
const https = require('https');

// GET Method

const options = {
    hostname: 'whatever.com',
    port: 443,
    path: '/todos',
    method: 'GET'
}

const req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`);

    res.on('data', d => {
        process.stdout.write(d);
    })
})

req.on('error', error => {
    console.log(error)
})

req.end();

//POST Method

const data = JSON.stringify({
    todos: 'Buy the milk'
})

const options1 = {
    hostname: 'whatever.com',
    port: 443,
    path: '/todos',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
}

const req1 = https.request(options1, res => {
    console.log(`statusCode: ${res.statusCode}`);

    res.on('data', d => {
        process.stdout.write(d);
    })
})

req1.on('error', error => {
    console.log(error);
})

req1.write(data);
req1.end();