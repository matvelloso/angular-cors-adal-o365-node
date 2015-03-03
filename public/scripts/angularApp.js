'use strict';
angular.module('docsApp', ['ngRoute','AdalAngular'])
.config(['$routeProvider', '$httpProvider', 'adalAuthenticationServiceProvider', function ($routeProvider, $httpProvider, adalProvider) {
    $routeProvider.when("/Home", {
        controller: "homeCtrl",
        templateUrl: "/home.html",
    }).when("/search", {
        controller: "searchCtrl",
        templateUrl: "/search.html",
        requireADLogin: true,
    }).otherwise({ redirectTo: "/Home" });

    adalProvider.init(
        {
            tenant: 'dxdemos.net',
            clientId: 'de50e8bc-7b32-4722-9705-3195d1ac942a',
            endpoints: 
            {
                url: 'https://dxdemos-my.sharepoint.com/',
                resourceId: 'https://dxdemos-my.sharepoint.com/'
            }
            
        },
        $httpProvider
        );
   
}]);
