(function(){
    'use strict';

    angular
        .module('stockDogApp.dashboard')
        .config(configFunction);

    configFunction.$inject = ['$stateProvider'];

    function configFunction($stateProvider) {

        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'app/dashboard/dashboard-main/dashboard.html',
                controller: 'DashboardController',
                controllerAs: 'dc',
                data : {
                    pageTitle: 'Dashboard'
                }
            });
    }

})();