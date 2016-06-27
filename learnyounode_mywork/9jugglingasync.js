var http = require('http');
var str1 = "";
var str2 = "";
var str3 = "";



http.get(process.argv[2], function callback (response) {
    
    response = response.setEncoding('utf8');
    
    response.on('data', function (data) {
        str1 += data;
    })
    response.on('end', function (data) {
        console.log(str1);
        http.get(process.argv[3], function callback (response) {
            
            response = response.setEncoding('utf8');
            
            response.on('data', function (data) {
            str2 += data; //async data collection
        })
        response.on('end', function (data) {
            console.log(str2); //fires when 1st url is collected and prints it
            http.get(process.argv[4], function callback (response) { //time to run 2nd url now
            
                response = response.setEncoding('utf8');
                
                response.on('data', function (data) {
                    str3 += data;
                })
                response.on('end', function (data) {
                    console.log(str3);
                })
            })
        })
    })
})
})


