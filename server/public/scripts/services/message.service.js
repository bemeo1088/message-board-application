myApp.service('MessageService', function ($http){
    var self = this;
    self.results = {data: []};

    self.submitListing = function (listingToSubmit) {
        $http.post('/listing', listingToSubmit).then (function (response){
            console.log(response);
            self.getListings();
        })
    }

    self.getListings = function () {
        $http.get('/listing').then ( function (response){
            self.results.data = response.data;
        });
    }
});