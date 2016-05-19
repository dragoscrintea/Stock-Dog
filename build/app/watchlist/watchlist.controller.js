(function(){
    'use strict';
    
    angular
        .module('stockDogApp.watchlist')
        .controller('WatchlistController', WatchlistController);
        
        
    WatchlistController.$inject = ['$scope', '$http', '$stateParams', '$modal', 'WatchlistService', 'CompanyService'];
    
    function WatchlistController($scope, $http, $stateParams, $modal, WatchlistService, CompanyService) {
        
        $scope.companies = [];
        
        CompanyService.query($http).then(function(data){
            $scope.companies = data;
        });
        
        $scope.watchlist = WatchlistService.query($stateParams.listId);
        $scope.stocks = $scope.watchlist.stocks;
        $scope.newstock = {};
        
        var addStockModal = $modal({
           scope: $scope,
           templateUrl: 'app/watchlist/views/addstock-modal.html',
           show: false
        });
        
        $scope.showStockModal = function() {
            addStockModal.$promise.then(addStockModal.show);
        }
        
        $scope.addStock = function() {
            
            $scope.newstock = JSON.parse(JSON.stringify($scope.newstock));
            
            $scope.watchlist.addStock({
               listId: $stateParams.listId,
               company: $scope.newstock.company,
               shares: $scope.newstock.shares
            });
            addStockModal.hide();
            $scope.newstock = {};
        }
        
    }
    
})();