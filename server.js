const express = require('express');
const logger = require('morgan');
const app = express();


const PORT = process.env[2] || 3000;

app.listen(PORT, console.log('Polling at', `${PORT}`));
