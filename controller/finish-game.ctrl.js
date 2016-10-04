angular.
    module('battleApp').
        controller('FinishGameController', function ($scope,shipsService) {
            $scope.guesses = shipsService.guesses;
});
