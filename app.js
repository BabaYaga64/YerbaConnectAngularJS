var yerba = angular.module('yerba', ['ui.router']);

yerba.config(function($stateProvider) {
    $stateProvider.state('home', {
        url:"",
        templateUrl: "partials/home.html"
    });
});
