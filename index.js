const http = require('http');
const port = process.env.PORT || 3000; 
const hostname='0.0.0.0';
const server = http.createServer((req, res) => { res.statusCode = 200; 
     const msg = 'Hello Node!\n' ; 
     res.end(msg); });  
server.listen(port, hostname , () => { console.log(`Server running on http://localhost:${port}/`); });