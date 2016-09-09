 angular.
     module('battleApp').
        config(function($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('start', {
            url: '/',
            templateUrl: 'templates/tmp1.html'
        })
        .state('game', {
            url: '/',
            templateUrl: 'templates/tmp2.html'
        })
        .state('finish', {
            url: '/',
            templateUrl: 'templates/tmp3.html'
        });

     $urlRouterProvider.otherwise('/')

 });