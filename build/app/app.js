(function() {
    'use strict';

    angular
        .module('stockDogApp',
        [
            'ui.router',
            'mgcrea.ngStrap',
            'stockDogApp.core',
            'stockDogApp.watchlist',
            'stockDogApp.dashboard',
            'stockDogApp.stocktable'

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
            return $location.path();
        }, function(path) {
            if (_.includes(path, 'watchlist')) {
                $scope.activeView = 'watchlist';
            } else {
                $scope.activeView = 'dashboard';
            }
        });
    }

})();
