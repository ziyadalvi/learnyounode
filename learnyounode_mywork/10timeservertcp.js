var net = require('net');

var server = net.createServer(function listener (socket){
     socket.end(dateReader()+"\n");
})
     server.listen(process.argv[2]);  
       
function dateReader() {
     var date = new Date();
     return date.getFullYear()+"-"+fixzero(date.getMonth()+1)+"-"+fixzero(date.getDate())+" "+fixzero(date.getHours())+":"+fixzero(date.getMinutes());
}

     function fixzero(single) {
          if(single < 10) {
               return "0"+single;
          }
          else return single
     }