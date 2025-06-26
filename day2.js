const fs = require('fs');

// Writing to a file
fs.writeFileSync('message.txt', 'Hello Satish, welcome to Node.js!');

// Reading from the file
const data = fs.readFileSync('message.txt', 'utf8');

console.log(data);
