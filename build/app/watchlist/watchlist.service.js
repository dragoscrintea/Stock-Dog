(function() {
    'use strict';

    angular
        .module('stockDogApp')
        .service('WatchlistService', WatchlistService);

    function WatchlistService() {

        var loadModel = function() {
            var model = {
                watchlists: localStorage['StockDog.watchlists'] ?
                    JSON.parse(localStorage['StockDog.watchlists']) : [],
                nextId: localStorage['StockDog.nextId'] ?
                    parseInt(localStorage['StockDog.nextId']) : 0
            }
            return model;
        };

        var saveModel = function() {
            localStorage['StockDog.watchlists'] = JSON.stringify(Model.watchlists);
            localStorage['StockDog.nextId'] = Model.nextId;
        };

        var findById = function(listId) {
            return _.find(Model.watchlists, function(watchlist) {
                return watchlist.id === parseInt(listId);
            });
        }

        // Service return functions

        // return all watchlists or by given id
        this.query = function(listId) {
            if(listId) {
                return findById(listId);
            }
            else {
                return Model.watchlists;
            }
        }

        // save a new watchlist to watchlists model
        this.save = function(watchlist) {
            watchlist.id = Model.nextId++;
            Model.watchlists.push(watchlist);
            saveModel();
        }

        // remove given watchlist from watchlists model
        this.remove = function(watchlist) {
            _.remove(Model.watchlists, function(list) {
                return list.id === watchlist.id;
            });
            saveModel();
        }

        // initialize singleton

        var Model = loadModel();

    }

})();