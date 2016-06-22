var total=0;
var val = process.argv.length;
for(var i=2; i<val; i++){
    total = total + Number(process.argv[i]);
}
console.log(total);