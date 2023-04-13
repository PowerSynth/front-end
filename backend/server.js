//------------------------------------------------------------------------------------------------------------
// Simple backend file to handle uploading/deleting initial files; must be
// running for file handling to work To Run: node server.js
//------------------------------------------------------------------------------------------------------------

const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

// Uploading file
app.post("/upload", (req, res) => {
  setTimeout(() => {
    console.log('file uploaded')
    return res.status(200).json({result : true, msg : 'file uploaded'});
  });
});

// Deleting file
app.delete("/upload", (req, res) => {
  console.log('File deleted')
  return res.status(200).json({result : true, msg : 'file deleted'});
});

// Running file on port 8080
app.listen(8080, () => {console.log('Server running on port 8080')});