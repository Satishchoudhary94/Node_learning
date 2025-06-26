const express  = require('express');
const path = require('path');
const app = express();

// Middleware to serve static files from the 'public' directory
// This allows us to serve HTML, CSS, and JavaScript files easily
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname, 'public','home.html'));
})/

app.get('/contact',(req, res)=>{
    res.send('<h1>Contact Us at contact@example.com</h1>');
});



app.get('/api/users', (req, res) => {
    const users = [
        { id: 1, name: 'Satish' },
        { id: 2, name: 'Rahul' },
        { id: 3, name: 'Anjali' }
    ];
    res.json(users);
});

// Products API route
app.get('/api/products', (req, res) => {
    const products = [
        { id: 101, name: 'Laptop' },
        { id: 102, name: 'Mobile' }
    ];
    res.json(products);
});

//Assignment 

app.get('/api/students', (req, res) => {
    const students = [
        { id: 1, name: 'Satish', age: 25, city: 'Delhi' },
        { id: 2, name: 'Rahul', age: 22, city: 'Mumbai' },
        { id: 3, name: 'Anjali', age: 23, city: 'Bangalore' },
    ];
    
    res.json(students);
});




app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000/');
});