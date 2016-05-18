(function(){
    'use strict';

    angular
        .module('stockDogApp.dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$http'];

    function DashboardController($http) {
        console.log("DashboardController initialized");
    }


})();