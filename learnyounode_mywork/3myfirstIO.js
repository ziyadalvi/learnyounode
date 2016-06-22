var fs = require("fs");
var str = fs.readFileSync('babysteps.js').toString();
var total=0;
for (var i=0; i<str.length; i++)
{
    if(str[i] == "\n")
    total++;
}
console.log(total)