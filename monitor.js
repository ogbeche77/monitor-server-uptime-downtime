const readline = require("readline");
var http = require('http');
var prompt = require('prompt');//prompts user for input, validation, regex
var uptime_count = 0;
var downtime_count = 0;
var healthCheckInterval;

var url_parameters = {
    host: 'localhost',
    port: 12345
};

var schema = {
    properties: {
        interval_in_seconds: {
            pattern: /^[0-9]+$/,
            message: 'Only numbers can be entered',
            required: true
        }
    }
}

prompt.start();

prompt.get(schema, function (err, result) { //method
    console.log('You have selected a server health check interval of ' + result.interval_in_seconds + ' seconds. ');
    healthCheckInterval = result.interval_in_seconds * 1000;
    setInterval(checkServerHealth, healthCheckInterval)
})

function checkServerHealth() {
    http.get(url_parameters, function (response) {
        if (response.headers["content-length"] == 376) { //size in bytes sent to the recipient
            console.log("Server is up and running!");
            uptime_count += 1;
        };

        if (response.headers["content-length"] == 95) {
            console.log("Server is currently down!");
            downtime_count += 1;
        };
        console.log(`Uptime count : ${uptime_count} `, `Downtime count: ${downtime_count}`);

    });

}