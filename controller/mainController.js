angular.
    module('battleApp').
        controller('mainController', function ($scope,shipsService,$state) {
    $scope.missSquare = {};
    $scope.hitSquare = {};
    $scope.processGuess = function (rowIndex, col) {
        var location = rowIndex.toString() + col.toString()
        if (!location) {
            throw ('Location hasnt been written correct')
        }
        if (location) {
            var guesses = shipsService.guesses;
            var hit = shipsService.fire(location);

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

    try {
        $scope.start = function (shipLength, ammount, value) {
            if (!shipLength || !ammount || !value) {
                throw new SyntaxError('Данные неверны');
            }
            shipsService.shipLength = shipLength;
            shipsService.numShips = ammount;
            for (var i = 0; i < ammount; i++) {
                shipsService.ships.push({locations: [], hits: ["", "", ""], shipLive: true})
            }
            if (value > 10) {
                throw new SyntaxError('БОЛЬШЕ ДЕСЯТИ')
            } else {
                for (var k = 0; k < value; k++) {
                    $scope.squareData.push([])
                    for (var j = 0; j < value; j++) {
                        $scope.squareData[k].push(j)
                    }
                }
            }
            shipsService.boardSize = value;
            shipsService.generateShipLocations()
        }
    } catch (e){}
    $scope.squareData = [];

    //$scope.shipsCoordinates = shipsService.ships;

});