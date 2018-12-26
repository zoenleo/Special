const express = require('express');
const path = require('path');
// const api = require('./api');

const app = express();

const PORT = process.env.PORT || 8080;

app.use('/', express.static(path.join(__dirname, '/view')));

// app.use('/api', api);

app.listen(PORT, () => {
    console.log(`start app listening on port ${PORT}!`);
});