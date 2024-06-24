// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Add middleware to parse JSON
app.use(express.json());

// Use the comments router
const commentsRouter = require('./comments');
app.use('/comments', commentsRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});