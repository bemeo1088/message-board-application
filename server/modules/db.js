var mongoose = require('mongoose');
var dbPath = 'mongodb://localhost:27017/realestate';

mongoose.connection.on('connected', function () {
    console.log('mongod connected!');
});

mongoose.connection.on('error', function () {
    console.log('failed to connect to mongod');
});

mongoose.connect(dbPath);

module.exports = mongoose;