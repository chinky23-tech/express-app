const express = require('express');
const path = require('path');

const app = express();

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Route for home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Route for about page
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});
// Route for style.css page
app.get('/style', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'style.css'));
});
// API route
app.get('/api/info', (req, res) => {
    res.json({
        name: "My Express App",
        version: "1.0.0",
        message: "Hello from JSON route!"
    });
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log('✅ Server running at http://localhost:8000');
    console.log('📄 Home page: http://localhost:8000/');
    console.log('📄 About page: http://localhost:8000/about');
    console.log('🔗 API endpoint: http://localhost:8000/api/info');
});