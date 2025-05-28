const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;

app.use(cors({
  origin: 'http://localhost:3000' // Allow frontend running on port 3000
}));