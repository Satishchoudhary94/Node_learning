const http = require('http');

const server = http.createServer((req, res) => {
 
  const url = req.url;

  if(url == '/'){
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Welcome to the Home Page</h1>');
  }

  else if(url == '/contact'){
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Contact Us at contact@example.com</h1>');
  }

});



server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000/');
});