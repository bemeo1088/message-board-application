var mongoose = require('mongoose');
var dbPath = 'mongodb://localhost:27017/message';

mongoose.connection.on('connected', function () {
    console.log('mongodb connected!');
});

mongoose.connection.on('error', function () {
    console.log('failed to connect to mongodb');
});

mongoose.connect(dbPath);

module.exports = mongoose;