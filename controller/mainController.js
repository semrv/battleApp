angular.
    module('battleApp').
        controller('mainController', function ($scope,logicService,dataService) {
    $scope.missSquare = {};
    $scope.hitSquare = {};

    $scope.processGuess = function(event){
            //var location = $scope.parseGuess(guess)       IF WE HAVE INPUT
            var location = event.target.id;
            if(location) {
                $scope.guesses = logicService.guesses;
                $scope.hit = logicService.fire(location);

                if($scope.hit === true){
                    $scope.hitSquare[location] = true;
                    $scope.msg = logicService.msg
                } else  {
                    $scope.missSquare[location] = true;
                    $scope.msg = logicService.msg
                }
                if (dataService.shipsSunk === dataService.numShips) {
                    alert('YOU SANK ALL MY BATTLESHIPS, IN ' + $scope.guesses + ' guesses')
                }
            }
            // IF WE HAVE INPUT
          //$scope.guess = '';
        };


    // IF WE HAVE INPUT, THIS FUNCTION NEEDS TO PARSE PEOPLE GUESS
    //$scope.parseGuess = function (guess) {
    //        var alphabet = ["A", "B", "C", "D", "E", "F", "G"];
    //        if (guess === null || guess.length !== 2) {
    //            alert("Oops, please enter a letter and a number on the board.");
    //        } else {
    //            firstChar = guess.charAt(0);
    //            var row = alphabet.indexOf(firstChar);
    //            var column = guess.charAt(1);
    //
    //            if (isNaN(row) || isNaN(column)) {
    //                alert("Oops, that isn't on the board.");
    //            } else if (row < 0 || row >= dataService.boardSize ||
    //                column < 0 || column >= dataService.boardSize) {
    //                alert("Oops, that's off the board!");
    //            } else {
    //                return row + column;
    //            }
    //        }
    //        return null;
    //};

    $scope.generate =  function () {
        logicService.generateShipLocations()
    };
    $scope.squareData = [
        [0,1,2,3,4,5,6],
        [0,1,2,3,4,5,6],
        [0,1,2,3,4,5,6],
        [0,1,2,3,4,5,6],
        [0,1,2,3,4,5,6],
        [0,1,2,3,4,5,6],
        [0,1,2,3,4,5,6]
    ];

    $scope.shipsCoordinates = dataService.ships;




});