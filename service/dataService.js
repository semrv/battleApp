/**
 * Created by roman on 15.08.16.
 */
angular.
    module('battleApp').
        service('dataService' ,function() {
        this.boardSize = 7;
        this.numShips = 3;
        this.shipLength = 3;
        this.shipsSunk = 0;
        this.ships = [{locations: [0, 0, 0], hits: ["", "", ""], shipLive: true},
            {locations: [0, 0, 0], hits: ["", "", ""], shipLive: true},
            {locations: [0, 0, 0], hits: ["", "", ""], shipLive: true}];

});