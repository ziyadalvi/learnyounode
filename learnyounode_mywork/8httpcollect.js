var fs = require('fs');
var http = require('http');
var str = "";
var count = 0;

http.get(process.argv[2],function callback(response) {

    response.on('data', function (data) {
       str = str + data;
       count = count + data.length;
      
    })
    
     response.on('end', function(end) {
           console.log(count);
           console.log(str);
       })
})