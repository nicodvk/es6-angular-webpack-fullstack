angular
  .module('LegacyModule', [])
  .controller('LegacyCtrl', ['$scope', function ($scope) {
    $scope.message = 'Hello !';
  }])
  .directive('legacy', function () {
    return {
      scope: {},
      restrict: 'E',
      controller: 'LegacyCtrl',
      template: 'I\'m a legacy directive with a message : {{ message }}'
    };
  });