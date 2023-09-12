const express = require('express');
const app = express();
const port = 8080;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Route for the root URL
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
