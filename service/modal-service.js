'use strict';

(function () {

    angular.module('battleApp').service('ModalWindow',
        ['$uibModal','$timeout','$state',
            function ($uibModal,$timeout,$state) {

                var modalParams = {
                    animation: true,
                    keyboard: true,
                    templateUrl: 'templates/modal.tpl.html',
                    controller: (['$scope', '$uibModalInstance',
                        function ($scope, $uibModalInstance) {

                            $scope.closeModal = function () {
                                $uibModalInstance.dismiss();
                                $timeout(function(){$state.go('finish')},300);

                            };

                        }])
                };

                function showModal() {
                    return $uibModal.open(modalParams)
                }

                return {
                    showModal: showModal
                }

            }]);

})();