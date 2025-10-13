// import express
const express = require('express');

//create an app
const app = express();

//define a route
app.get('/' , (req ,res) => {
res.send('Hello world from express');
});

//start server
app.listen(3000, () => {
console.log('Server running at http://localhost:3000');
});