const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

// Uncomment if working with form data
// app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

module.exports = app;
