var myApp = angular.module('myApp', []);

myApp.controller('myController', ['$scope', function ($scope) {

    $scope.records = [
        {
            "name": "Mathematik",
            "semester": 2,
            "note": 1.4
        }, {
            "name": "Compilerbau",
            "semester": 3,
            "note": 1.4
        }, {
            "name": "Rechnerarchitektur",
            "semester": 3,
            "note": 2.2
        }
    ]

    $scope.addKlausur = function () {

        var record = $scope.klausur;

        $scope.records.push(record);

        $scope.klausur = '';

    };

}]);

