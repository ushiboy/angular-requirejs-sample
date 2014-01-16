define([
  './module',
  '../services/Phone'
], function(controllers) {

  'use strict';

  return controllers.controller('PhoneListCtrl', [
    '$scope',
    'Phone',
    function($scope, Phone) {
      $scope.phones = Phone.query();
      $scope.orderProp = 'age';
    }
  ]);
});
