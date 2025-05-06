const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

app.post('/submit', (req, res) => {
  const responseHTML = `
    <html>
    <head><link rel="stylesheet" href="/style.css"></head>
    <body>
      <div class="container">
        <h1>Thanks, for your message!</h1>
        <a href="/">Go Home</a>
      </div>
    </body>
    </html>
  `;
  res.send(responseHTML);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
