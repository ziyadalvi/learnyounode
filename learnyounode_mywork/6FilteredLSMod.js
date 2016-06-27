// main file 
var dir = process.argv[2];
var filter = process.argv[3];
var mymodule = require('./6module.js')


mymodule (dir,filter, function (err, data) {
    if (err) {
        console.log("There was an error")
    }
    else {
            for(var i=0; i<data.length; i++)
            console.log(data[i]);
        }
        /*  can be replaced by 
            list.forEach(function (file) {
            console.log(file)

    */

    })

//  where list is an array of filename strings.  
