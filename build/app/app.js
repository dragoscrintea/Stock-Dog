(function() {
    'use strict';

    angular
        .module('stockDogApp',
        [
            'ui.router',
            'mgcrea.ngStrap',
            'stockDogApp.watchlist',
            'stockDogApp.dashboard'

        ])
        .config(configFunction)
        .controller('MainController', MainController)


    configFunction.$inject = ['$stateProvider', '$urlRouterProvider'];

    function configFunction($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.when('', '/dashboard');
    }

    MainController.$inject = ['$scope', '$location', 'WatchlistService'];

    function MainController($scope, $location, WatchlistService) {

        $scope.watchlists = WatchlistService.query();

        $scope.$watch(function() {
            console.log($location.path());
            return $location.path();
        }, function(path) {
            if (_.contains(path, 'watchlist')) {
                $scope.activeView = 'watchlist';
            } else {
                $scope.activeView = 'dashboard';
            }
        });
    }


