const express = require('express');
const path = require('path');

const app = express();

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

//add  custom route for about page
app.get('/about' ,(req , res) => {
res.sendFile(path.join(__dirname, 'public' , 'about.html'));
});

app.get('/api/info' , (req,res) => {
res.json({
    name: "My Express App",
    version: "1.0.0",
    message: "Hello from JSON route!"
});
});
app.listen(5050, () => {
  console.log('✅ Server running at http://localhost:5050');
});
