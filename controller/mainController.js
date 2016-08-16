angular.
    module('battleApp').
        controller('mainController', function ($scope,logicService,dataService) {
        //DISPLAY SHOT
        $scope.processGuess = function(guess){
            var location = $scope.parseGuess(guess)
            //location = +'location';
            //console.log(typeof location)
            if(location) {
                $scope.guesses++;
                $scope.hit = logicService.fire(location);
                if ($scope.hit && dataService.shipsSunk === dataService.numShips) {
                    alert(123);
                }
            }

          //$scope.isFire = logicService.fire(guess);
          $scope.guess = '';
        };
        $scope.guesses = 0;

        $scope.parseGuess = function (guess) {
        var alphabet = ["A", "B", "C", "D", "E", "F", "G"];
        if (guess === null || guess.length !== 2) {
            alert("Oops, please enter a letter and a number on the board.");
        } else {
            firstChar = guess.charAt(0);
            var row = alphabet.indexOf(firstChar);
            var column = guess.charAt(1);

            if (isNaN(row) || isNaN(column)) {
                alert("Oops, that isn't on the board.");
            } else if (row < 0 || row >= dataService.boardSize ||
                column < 0 || column >= dataService.boardSize) {
                alert("Oops, that's off the board!");
            } else {
                return row + column;
            }
        }
        return null;
    };

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


    $scope.A = logicService.A;







});