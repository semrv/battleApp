angular.
    module('battleApp').
        controller('mainController', function ($scope,logicService,dataService,$location) {
    $scope.missSquare = {};
    $scope.hitSquare = {};
    $scope.processGuess = function (event) {
        var location = event.target.id;
        if(!location) {
            throw ('Location hasnt been written correct')
        }
        if (location) {
            $scope.guesses = logicService.guesses;
            $scope.hit = logicService.fire(location);

            if ($scope.hit === true) {
                $scope.hitSquare[location] = true;
                $scope.msg = logicService.msg
            } else {
                $scope.missSquare[location] = true;
                $scope.msg = logicService.msg
            }
            if (dataService.shipsSunk === dataService.numShips) {
                alert('YOU WIN!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1')
                $location.path('/finish')
            }
        }

    };

    $scope.generate = function () {
        logicService.generateShipLocations()
    };
    $scope.squareData = [
        [0, 1, 2, 3, 4, 5, 6, 7],
        [0, 1, 2, 3, 4, 5, 6, 7],
        [0, 1, 2, 3, 4, 5, 6, 7],
        [0, 1, 2, 3, 4, 5, 6, 7],
        [0, 1, 2, 3, 4, 5, 6, 7],
        [0, 1, 2, 3, 4, 5, 6, 7],
        [0, 1, 2, 3, 4, 5, 6, 7]
    ];

    $scope.shipsCoordinates = dataService.ships;

});