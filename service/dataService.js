/**
 * Created by roman on 15.08.16.
 */
angular.
    module('battleApp').
        service('dataService', function () {
    this.boardSize = 0;
    this.numShips = 0;
    this.shipLength = 0;
    this.shipsSunk = 0;
    this.ships = [];
});