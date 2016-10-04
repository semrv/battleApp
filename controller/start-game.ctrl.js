angular.
    module('battleApp').
       controller('StartGameController',function($scope,shipsService,$state) {
    $scope.data = {};
    $scope.missSquare = {};
    $scope.hitSquare = {};
    $scope.start = function () {
        shipsService.start($scope.data,function() {
            $state.go('game');
        });
    }
});
