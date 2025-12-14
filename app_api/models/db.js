var mongoose = require('mongoose');
var dbURI = 'mongodb://localhost/mekanbul';
if (process.env.NODE_ENV === 'production' || process.env.MONGODB_URI) {
    dbURI = process.env.MONGODB_URI;
}
mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
    console.log('Mongoose bağlandı: ' + dbURI);
});
mongoose.connection.on('error', function (err) {
    console.log('Mongoose bağlantı hatası: ' + err);
});
require('./venue');