const express = require('express');
const app = express();
const port = 3000; // Choose a port number for your server

// Serve static files (HTML, CSS, JS) from a directory
app.use(express.static('public')); // Assuming your files are in a 'public' directory

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


// http://localhost:3000