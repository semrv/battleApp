angular.module('battleApp').
    directive('changeClass', function(){
    return {
        restrict: 'A',
        scope: {
            shipdead: '=ccShipdead'
        },
        link: function (scope) {
            scope.$watch('shipdead',function() {
                if(scope.shipdead) {
                    for(var i=0; i<scope.shipdead.locations.length;i++) {
                        var loc = document.getElementById(scope.shipdead.locations[i]);
                        loc.classList.add('killed')
                    }
                }
            },true)
        }
    }
    });
