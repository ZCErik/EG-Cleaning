
angular.module('egCleaning', [
	  'my-directives', 
	  'ngAnimate', 
	  'ngRoute'
	])
  .config(function($routeProvider, $locationProvider) {
    
    //History API - To get to any page without using #
    $locationProvider.html5Mode(true);

    $routeProvider.when("/register", {
      templateUrl: "../partials/registerEmployee.html",
      controller: "EmployeeController"
    });

    $routeProvider.otherwise({ redirectTo: '/' });
  });
