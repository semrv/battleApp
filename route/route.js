angular.
    module('battleApp').
        config(function($routeProvider) {
            $routeProvider.
                when('/',{
                    templateUrl: 'templates/tmp1.html',
                    controller: 'controllerTemplate-1'

            }).
                when('/game',{
                    templateUrl: 'templates/tmp2.html',
                    controller: 'controllerTemplate-2'

            }).
                when('/finish',{
                    templateUrl: 'templates/tmp3.html',
                    controller: 'controllerTemplate-3'

            }).
                otherwise({
                redirectTo: '/'
            });
});