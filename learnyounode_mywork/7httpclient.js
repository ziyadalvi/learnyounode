//Program to perform HTTP GET request to a URL provided in CMD Line. stdout the the data from the response to new line. 

var fs = require('fs');
var http = require('http');

http.get(process.argv[2],function callback (response) {
    response = response.setEncoding("utf8");
    
    response.on("data", function(data) {
        console.log(data);
    })

})