 angular.
     module('battleApp').
        config(function($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('start', {
            url: '/start',
            templateUrl: 'templates/start.html'
        })
        .state('game', {
            url: '/game',
            templateUrl: 'templates/game.html'
        })
        .state('finish', {
            url: '/finish',
            templateUrl: 'templates/finish.html'
        });

     $urlRouterProvider.otherwise('/start')

 });
