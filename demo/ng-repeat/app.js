var myApp = angular.module('myApp', []);

myApp.controller('directorCtrl', ['$scope', function ($scope) {

    $scope.students = [
        {
            "firstName": "Patrick",
            "lastName": "Treyer",
            "phone": "0123 45678923"
        }, {
            "firstName": "Max",
            "lastName": "Mustermann",
            "phone": "0324 2384324"
        }, {
            "firstName": "Karl",
            "lastName": "Huber",
            "phone": "0333 9238474"
        }, {
            "firstName": "Hans",
            "lastName": "Maier",
            "phone": "0233 12321123"
        }, {
            "firstName": "Peter",
            "lastName": "Maier",
            "phone": "3944 12390312"
        }
    ]


}]);

