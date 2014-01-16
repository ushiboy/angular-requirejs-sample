define([
  'angular',
  'angularRoute',
  'angularResource',
  './services/Phone',
  './filters/checkmark',
  './controllers/PhoneListCtrl',
  './controllers/PhoneDetailCtrl'
], function(angular) {

  'use strict';

  var phonecatApp =  angular.module('phonecatApp', [
    'ngRoute',
    'phonecatApp.controllers',
    'phonecatApp.filters',
    'phonecatApp.services'
  ]);
  phonecatApp.config([
    '$routeProvider',
    function($routeProvider) {
      $routeProvider.
        when('/phones', {
        templateUrl: 'assets/js/templates/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
        when('/phones/:phoneId', {
        templateUrl: 'assets/js/templates/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
        otherwise({
        redirectTo: '/phones'
      });
    }
  ]);
  return phonecatApp;
});
