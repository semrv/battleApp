angular.module('battleApp').service('shipsService', function () {
    this.boardSize = 0;
    this.numShips = 0;
    this.shipLength = 0;
    this.shipsSunk = 0;
    this.ships = [];
    this.guesses = 0;
    this.shipdead = '';
    this.squareData = [];
    this.gameStatus = false;
    this.start = function (data, callback) {
        if (data.shipLength > data.value || data.ammount > data.value) {
            alert('Length of ships and Number of ships cant be larger than the field size')
            return false;
        }
        this.shipLength = data.shipLength;
        this.numShips = data.ammount;
        this.boardSize = data.value;
        for (var i = 0; i < data.ammount; i++) {
            this.ships.push({locations: [], hits: [""], shipLive: true})
        }
        for (var k = 0; k < data.value; k++) {
            this.squareData.push([])
            for (var j = 0; j < data.value; j++) {
                this.squareData[k].push(j)
            }
        }
        this.generateShipLocations();
        if (callback) callback()
    };

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
                    this.shipdead = ship;
                    if(this.shipsSunk === this.numShips) {
                        this.gameStatus = true;
                    }
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

    this.generateShipLocations = function () {
        var locations;
        for (var i = 0; i < this.numShips; i++) {
            do {
                locations = this.generateShip();

            } while (this.collision(locations));
            this.ships[i].locations = locations;
        }
    };

    this.generateShip = function () {
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

    //this.collision = function (locations) {
    //    for (var i = 0; i < this.numShips; i++) {
    //        var ship = this.ships[i];
    //        for (var j = 0; j < locations.length; j++) {
    //            if (ship.locations.indexOf(locations[j]) >= 0) {
    //                return true;
    //            }
    //        }
    //    }
    //    return false;
    //};

    this.collision = function (locations) {
        var isCollision = false;
        _.forEach(this.ships, function (ship) {
            _.forEach(locations,function(value) {
                if(_.indexOf(ship.locations,value) >= 0) {
                    isCollision = true;
                    return false;
                }
            })
        })
        return isCollision
    }
});
