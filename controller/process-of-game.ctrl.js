angular.
    module('battleApp').
        controller('ProcessOfGameController', function ($scope,shipsService, ModalWindow) {
    $scope.missSquare = {};
    $scope.hitSquare = {};
    $scope.squareData = shipsService.squareData;
    $scope.$watch('gameStatus', function(){
        if(!$scope.gameStatus) return;
        ModalWindow.showModal();
    });
    $scope.processGuess = function (rowIndex, col) {
        var location = rowIndex.toString() + col.toString();
        if (location) {
            $scope.guesses = shipsService.guesses;
            var hit = shipsService.fire(location);
            $scope.shipdead = shipsService.shipdead;
            $scope.gameStatus = shipsService.gameStatus;
            if (hit) {
                $scope.hitSquare[location] = true;
                $scope.msg = shipsService.msg
            } else {
                $scope.missSquare[location] = true;
                $scope.msg = shipsService.msg
            }

        }
    };
});
