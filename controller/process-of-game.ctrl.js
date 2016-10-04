angular.
    module('battleApp').
        controller('ProcessOfGameController', function ($scope,shipsService,$state,$timeout) {
    $scope.missSquare = {};
    $scope.hitSquare = {};
    $scope.squareData = shipsService.squareData;
        $scope.processGuess = function (rowIndex, col) {
        var location = rowIndex.toString() + col.toString();
        if (!location) {
            throw ('Location hasnt been written correct')
        }
        if (location) {
            $scope.guesses = shipsService.guesses;
            var hit = shipsService.fire(location);
            $scope.shipdead = shipsService.shipdead;
            if (hit) {
                $scope.hitSquare[location] = true;
                $scope.msg = shipsService.msg
            } else {
                $scope.missSquare[location] = true;
                $scope.msg = shipsService.msg
            }
            if (shipsService.shipsSunk == shipsService.numShips) {
                alert('CONGRATULATIONS. YOU WIN!');
                $timeout(function(){$state.go('finish')},1000);
            }
        }
    };
});
