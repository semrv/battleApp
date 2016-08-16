angular.
    module('battleApp').
        controller('mainController', function ($scope,logicService) {
        //DISPLAY SHOT
        $scope.fire = function(guess){
          $scope.isFire = logicService.fire(guess);
            $scope.guess = '';
    };
        $scope.A = logicService.A;
        $scope.B = logicService.generateShipLocations();

});