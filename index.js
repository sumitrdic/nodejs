const express = require('express')
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000; 
app.use(express.static(__dirname + '/'));
 
 
 io.on('connection', (socket) => {   
 socket.broadcast.emit('status',"online" );
 socket.on('disconnect', () =>{ 
 socket.broadcast.emit('status',"offline");
  });
 socket.on("status", status =>{
 socket.broadcast.emit('status',status);
 }); 
                
 socket.on('new-msg', data => { 
   io.emit('new-msgg', 
       {user: socket.id, msg:data.msg}); 
       });
    }); 
      http.listen(port, () => {
           console.log(`Socket.IO server running at http://localhost:${port}/`);
           
           });