(function(){
    'use strict';

    angular
        .module('stockDogApp.watchlist')
        .config(configFunction)

    configFunction.$inject = ['$stateProvider'];

    function configFunction($stateProvider) {

        $stateProvider
            .state('/watchlist/:listId', {
                templateUrl: 'app/watchlist/views/watchlist.html',
                controller: 'WatchlistController',
                controllerAs: 'wc',
                data : {
                    pageTitle: 'Dashboard | Watchlist'
                }

            });

    }

})();