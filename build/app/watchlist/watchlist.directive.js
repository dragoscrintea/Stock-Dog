(function() {
    'use strict';

    angular
        .module('stockDogApp')
        .directive('stkWatchlistPanel', ['$location','$state', '$modal', '$stateParams', 'WatchlistService',
            function($location, $state, $modal, $stateParams, WatchlistService) {
            return {
                templateUrl: 'app/watchlist/views/watchlist-panel.html',
                restrict: 'E',
                scope: {},
                link: function($scope) {
                    $scope.watchlist = {};
                    var addListModal = $modal({
                       scope: $scope,
                       template: 'app/watchlist/views/addlist-modal.html',
                       show: false
                    });

                    $scope.watchlists = WatchlistService.query();

                    $scope.showModal = function() {
                        addListModal.$promise.then(addListModal.show);
                    }

                    $scope.createList = function() {
                        WatchlistService.save($scope.watchlist);
                        addListModal.hide();
                        $scope.watchlist = {};
                    }

                    $scope.deleteList = function(list) {
                        WatchlistService.remove(list);
                        $location.path('/');
                    }
                    
                    $scope.currentList = $stateParams.listId;
                    
                }
            };

        }]);

})();