angular.
    module('battleApp').
        controller('controllerTemplate-3', function ($scope,$location) {
        $scope.MSG = 'TEMPLATE NUMBER 3'
        console.log($location.absUrl());
        console.log($location.hash());
         console.log($location.host())
         console.log($location.path('/finish'))
        console.log($location.port());
    console.log($location.protocol());
    console.log($location.replace());
    console.log($location.search());
    console.log($location.url());
    console.log($location.path())

});