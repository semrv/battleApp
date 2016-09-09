angular.
    module('battleApp').
        service('shipsService',function() {
    this.boardSize = 0;
    this.numShips = 0;
    this.shipLength = 0;
    this.shipsSunk = 0;
    this.ships = [];
    this.guesses = 0;
    this.fire = function (guess) {
        for (var i = 0; i < this.numShips; i++) {
            var ship = this.ships[i];
            var index = ship.locations.indexOf(guess);
            if (index >= 0) {
                this.guesses++;
                ship.hits[index] = "hit";
                this.msg = 'HIT!!!';
                if (this.isSunk(ship) && ship.shipLive) {
                    this.msg = "You sank my battleship!";
                    ship.shipLive = false;
                    this.shipsSunk++;
                }
                return true;
            }
        }
        this.msg = ("You missed.");
        this.guesses++;
        return false;
    };

    this.isSunk = function (ship) {
        for (var i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== "hit") {
                return false;
            }
        }
        return true;
    };

    this.generateShipLocations =  function() {
        var locations;
        for (var i = 0; i < this.numShips; i++) {
            do {
                locations = this.generateShip();

            } while (this.collision(locations));
            this.ships[i].locations = locations;
        }
    };

    this.generateShip = function() {
        var direction = Math.floor(Math.random() * 2);
        var row, col;

        if (direction === 1) {
            row = Math.floor(Math.random() * this.boardSize);
            col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
        } else {
            row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
            col = Math.floor(Math.random() * this.boardSize)
        }

        var newShipLocations = [];
        for (var i = 0; i < this.shipLength; i++) {
            if (direction === 1) {
                newShipLocations.push(row + "" + (col + i));
            } else {
                newShipLocations.push((row + i) + "" + col);
            }
        }
        return newShipLocations;
    };

    this.collision = function(locations) {
        for (var i = 0; i < this.numShips; i++) {
            var ship = this.ships[i];
            for (var j = 0; j < locations.length; j++) {
                if (ship.locations.indexOf(locations[j]) >= 0) {
                    return true;
                }
            }
        }
        return false;
    };



});