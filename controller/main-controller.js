angular.
    module('battleApp').
        controller('mainController', function ($scope,shipsService,$state) {
    $scope.missSquare = {};
    $scope.hitSquare = {};
    $scope.data = {};
    $scope.processGuess = function (rowIndex, col) {
        var location = rowIndex.toString() + col.toString();
        if (!location) {
            throw ('Location hasnt been written correct')
        }
        if (location) {
            var guesses = shipsService.guesses;
            var hit = shipsService.fire(location);
            $scope.shipdead = shipsService.shipdead;
            if (hit === true) {
                $scope.hitSquare[location] = true;
                $scope.msg = shipsService.msg
            } else {
                $scope.missSquare[location] = true;
                $scope.msg = shipsService.msg
            }
            if (shipsService.shipsSunk == shipsService.numShips) {
                alert('CONGRATULATIONS. YOU WIN! ')
                $state.go('finish')
            }
        }
    };
    $scope.start = function(){
        shipsService.start($scope.data, function (squareData) {
            $scope.squareData = squareData;
        });
    }




});
