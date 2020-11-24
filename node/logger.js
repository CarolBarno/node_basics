

var url = 'http://mylogger.io';

function log(message) {
    // send http request
    console.log(message);
}

module.exports = {
    log: log,
    url: url
}

