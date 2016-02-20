// app.js

angular.module("docsApp", ["ngRoute", "mgcrea.ngStrap"])

 .controller("MainController", function ($scope, $route, $routeParams, $location) {
     $scope.$route = $route;
     $scope.$location = $location;
     $scope.$routeParams = $routeParams;

     $scope.isActive = function() {
         return $routeParams.current.params.page !== "" && $location.path().indexOf($routeParams.current.params.page) > 1;
     }
 })

.config(function ($routeProvider, $locationProvider) {
    $routeProvider
     .when("/:page", {
         templateUrl: function(parameters) {
             return "pages/" + parameters.page + ".html";
         },
         controller: "MainController"
     })
    .when("/", {
        templateUrl: "pages/home.html",
        controller: "MainController"
     })
    .otherwise({
            redirectTo: "/"
     });

    // configure html5 to get links working on jsfiddle
    $locationProvider.html5Mode(false);
});