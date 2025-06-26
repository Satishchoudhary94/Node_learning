const express = require('express');
const app = express();

app.use(express.json()); // to parse JSON

let users = [  // in-memory database
    { id: 1, name: "Satish", age: 25 },
    { id: 2, name: "Rahul", age: 22 }
];

// GET all users
app.get('/api/users', (req, res) => {
    res.json(users);
});

app.post('/api/users', (req, res) => {
    console.log("REQ BODY = ", req.body); // Debug line
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        age: req.body.age
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

// PUT: Update user by ID
app.put('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    if (!user) return res.status(404).send("User not found");

    user.name = req.body.name;
    user.age = req.body.age;
    res.json(user);
});

// DELETE: Remove user by ID
app.delete('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    users = users.filter(u => u.id !== userId);
    res.json({ message: "User deleted" });
});

// Start server
app.listen(3000, () => {
    console.log("CRUD API running at http://localhost:3000");
});
