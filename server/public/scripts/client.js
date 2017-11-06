var myApp = angular.module( 'myApp', []);

myApp.controller('ListingController', function (MessageService){
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