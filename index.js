const express = require('express')
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000; 
app.use(express.static(__dirname + '/Myweb/'));
    
 io.on('connection', (socket) => { 
 
 socket.on("new-connection", function (user)
  { socket.broadcast.emit('new-connection', user );  }); 
                
                
      socket.on('new-msg', data => { 
      io.emit('new-msgg', 
       {user: socket.id, msg:data.msg}); 
      
      });
      
      }); 
      http.listen(port, () => {
           console.log(`Socket.IO server running at http://localhost:${port}/`);
           
           });