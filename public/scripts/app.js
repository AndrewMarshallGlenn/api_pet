var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/dogs', {
            templateUrl: '/views/templates/dogs.html',
            controller: 'dogController'
        })
        .when('/cats', {
            templateUrl: '/views/templates/cats.html',
            controller: 'catController'
        })
        .when('/pigs', {
            templateUrl: '/views/templates/pigs.html',
            controller: 'pigController'
        })
        .otherwise({
            redirectTo: 'dogs'
        });
}]);

//myApp.controller('APIController', ['$scope', '$http', function($scope, $http) {
//    $scope.data = {};
//
//    function petFinder() {
//        // API key
//        var key = '3c4ece3d5c68d2044f06cf07caf92ee7';
//
//        var baseURL = 'http://api.petfinder.com/';
//        var query = 'pet.getRandom';
//        query += '?key=' + key;
//        query += '&animal=dog';
//        query += '&output=basic';
//        query += '&format=json';
//
//        var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';
//        console.log(request);
//
//        $http.jsonp(request).then(
//            function(response) {
//                $scope.animal = response.data.petfinder.pet;
//                console.log($scope.animal);
//            }
//        );
//    }
//
//    petFinder();
//}]);

