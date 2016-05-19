(function(){
    'use strict';
    
    angular
        .module('stockDogApp.core')
        .service('CompanyService', CompanyService);
        
    CompanyService.$inject = ['$http'];
    
    function CompanyService($http) {

        this.query = function($http) {
            return $http.get('https://stock-dog-quantcruncher.c9users.io/companies.json')
                .then(function (response) {
                    return response.data;
                });
        };
        
    }
    
})();