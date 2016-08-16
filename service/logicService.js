angular.
    module('battleApp').
        service('logicService',function(dataService) {

    this.fire = function (guess) {
        for (var i = 0; i < dataService.numShips; i++) {
            var ship = dataService.ships[i];

            var index = ship.locations.indexOf(guess);
            console.log(index);
            console.log(guess);
            console.log(ship);
            if (index >= 0) {
                ship.hits[index] = "hit";
                //view.displayHit(guess);           SET CLASS
                var msg = 'HIT!!!';
                if (this.isSunk(ship)) {
                        msg = "You sank my battleship!";
                        dataService.shipsSunk++;
                    }

                    return msg;
                }

            }
            //view.displayMiss(guess);   SET CLASS
            msg = ("You missed.");
            return msg;
        };



    this.isSunk = function(ship) {
        for (var i = 0; i < dataService.shipLength; i++) {
            if (ship.hits[i] !== "hit") {
                return false;
            }
        }
        return true;
    };

    this.generateShipLocations =  function() {
        var locations;
        for (var i = 0; i < dataService.numShips; i++) {
            do {
                locations = this.generateShip();

            } while (this.collision(locations));
            dataService.ships[i].locations = locations;
        }
    };

    this.generateShip = function() {
        var direction = Math.floor(Math.random() * 2);
        var row, col;

        if (direction === 1) {
            row = Math.floor(Math.random() * dataService.boardSize);
            col = Math.floor(Math.random() * (dataService.boardSize - dataService.shipLength));
        } else {
            row = Math.floor(Math.random() * (dataService.boardSize - dataService.shipLength));
            col = Math.floor(Math.random() * dataService.boardSize)
        }

        var newShipLocations = [];
        for (var i = 0; i < dataService.shipLength; i++) {
            if (direction === 1) {
                newShipLocations.push(row + "" + (col + i));
            } else {
                newShipLocations.push((row + i) + "" + col);
            }
        }
        return newShipLocations;
    };

    this.collision = function(locations) {
        for (var i = 0; i < dataService.numShips; i++) {
            var ship = dataService.ships[i];
            for (var j = 0; j < locations.length; j++) {
                if (ship.locations.indexOf(locations[j]) >= 0) {
                    return true;
                }
            }
        }
        return false;
    };








    this.A = dataService.ships;

});