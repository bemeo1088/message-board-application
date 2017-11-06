var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ListingsSchema = new Schema({
    name: String,
    message: String
});

var Listings = mongoose.model('Listing', ListingsSchema, 'listings');

// GET route to load messages to DOM
router.get ('/', function (req,res){
    Listings.find({}, function(err, foundListings){
        if(err) {
            res.sendStatus(500);
        } else {
            res.send(foundListings);
        }
    });
}) // END GET Route

// POST route to post property to MongoDB
router.post ('/', function (req,res){
    console.log('req.body', req.body);
    var listingToSave = new Listings (req.body);
    
    listingToSave.save(function (err, data){
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }
    });
}); //END POST Route

module.exports = router;