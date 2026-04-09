const express = require('express');
const app = express();
const PORT = 3000;

// Endpoint 1: Health check
app.get('/', (req, res) => {
  res.send('Hello world,Docker app is running!');
});

// Endpoint 2: Greeting
app.get('/greet/:name', (req, res) => {
  const { name } = req.params;
  res.send(`Hello, ${name}! Welcome to my Dockerised app.`);
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});