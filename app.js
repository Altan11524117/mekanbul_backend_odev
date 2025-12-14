require('dotenv').config();
var express = require('express');
var cors = require('cors');
require('./app_api/models/db');
var apiRouter = require('./app_api/routes/index');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/api', apiRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Sunucu çalışıyor: http://localhost:${port}`);
});
module.exports = app;