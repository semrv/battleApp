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
 //todo  Заменить фукнции length, number, foo - одной функцией!

    $scope.squareData = [];

    $scope.length = function (shipLength) {
        dataService.shipLength = shipLength;
        console.log(dataService.shipLength);
    };

    $scope.number = function (ammount){
        dataService.numShips = ammount;
        for (var i=0; i < ammount; i++) {
            dataService.ships.push({locations: [], hits: ["", "", ""], shipLive: true})
        }
        console.log(dataService.ships);
    }

    $scope.foo = function (value) {
        for (var i = 0; i < value; i++) {
            $scope.squareData.push([])
            for(var j=0; j < value; j++){
                $scope.squareData[i].push(j)
            }
        }
        dataService.boardSize = value;
        console.log($scope.squareData)
    };



    $scope.shipsCoordinates = dataService.ships;

});