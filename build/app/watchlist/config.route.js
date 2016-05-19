(function(){
    'use strict';

    angular
        .module('stockDogApp.watchlist')
        .config(configFunction)

    configFunction.$inject = ['$stateProvider'];

    function configFunction($stateProvider) {

        $stateProvider
            .state('watchlist', {
                url: '/watchlist/:listId',
                templateUrl: 'app/watchlist/views/watchlist.html',
                controller: 'WatchlistController',
                data : {
                    pageTitle: 'Dashboard | Watchlist'
                }

            });

    }

})();