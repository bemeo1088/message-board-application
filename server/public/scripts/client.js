var myApp = angular.module( 'myApp', ['ngRoute']);

myApp.controller('ListingController', function ($http){
    var vm = this;
    vm.listing = {
        name: '',
        message: ''
    };

    vm.results = MessageService.results;

    vm.submitListing = function ( listingToSend) {
        MessageService.submitListing(listingToSend);
    }

    MessageService.getListings();
});