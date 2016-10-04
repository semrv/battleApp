 angular.
     module('battleApp').
        config(function($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('start', {
            url: '/start',
            templateUrl: 'templates/start.tpl.html',
            controller: 'StartGameController'
        })
        .state('game', {
            url: '/game',
            templateUrl: 'templates/game.tpl.html',
            controller: 'ProcessOfGameController',
        })
        .state('finish', {
            url: '/finish',
            templateUrl: 'templates/finish.tpl.html',
            controller: 'FinishGameController'
        });

     $urlRouterProvider.otherwise('/start')

 });
